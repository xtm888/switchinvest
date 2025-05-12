"use client"

import { useRef, useEffect, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import { useTranslation } from "@/hooks/use-translation"

interface RegionFeature {
  type: "Feature"
  properties: {
    name_nl: string
    name_fr: string
    name_de: string
    area_km2?: number
    population?: number
    capital?: string
    color?: string
    [key: string]: any
  }
  geometry: {
    type: "Polygon"
    coordinates: number[][][]
  }
}

interface RegionGeom {
  type: "FeatureCollection"
  name?: string
  features: RegionFeature[]
}

export default function BelgianMap() {
  const ref = useRef<SVGSVGElement>(null)
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const width = 800
    const height = 1000

    // Create SVG
    const svg = d3.select(ref.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width} ${height}`)

    // Set up projection
    const projection = d3.geoMercator()
      .center([4.4, 50.8])
      .scale(6000)
      .translate([width / 2, height / 2])

    const pathGenerator = d3.geoPath().projection(projection)

    // Load and render the regions
    d3.json("/belgium_regions.json")
      .then((data: any) => {
        const regions = data as RegionGeom
        
        // Add a background rectangle
        svg.append("rect")
          .attr("width", width)
          .attr("height", height)
          .attr("fill", "#333")
          .attr("opacity", 0.1)

        // Define colors for each region
        const regionColors: { [key: string]: string } = {
          "Antwerpen": '#87CEEB',
          "Limburg": '#87CEEB',
          "Oost-Vlaanderen": '#87CEEB',
          "West-Vlaanderen": '#87CEEB',
          "Brabant Wallon": '#FFB6C1',
          "Henegouwen": '#FFB6C1',
          "Luik": '#FFB6C1',
          "Luxemburg": '#FFB6C1',
          "Namen": '#FFB6C1'
        }

        const regionPaths = svg.selectAll("path")
          .data(regions.features)
          .enter()
          .append("path")
          .attr("d", (d) => pathGenerator(d) as string)
          .attr("fill", (d) => {
            const color = d.properties.color || regionColors[d.properties.name_nl]
            return color || "#444"
          })
          .attr("opacity", 0.8)
          .attr("stroke", "#333")
          .attr("stroke-width", 1.5)
          .attr("class", "region-path")
          
        // Add hover effects
        regionPaths
          .on("mouseover", function(event, d) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr("stroke-width", 3)
              .attr("stroke", "#FFD700")
          })
          .on("mouseout", function() {
            d3.select(this)
              .transition()
              .duration(200)
              .attr("stroke-width", 1.5)
              .attr("stroke", "#333")
          })
          .on("click", (event, d) => {
            console.log(`Clicked on ${d.properties.name_nl}`)
          })

        // Add labels for each region
        regions.features.forEach((region: RegionFeature) => {
          const centroid = pathGenerator.centroid(region)
          if (centroid) {
            svg.append("text")
              .attr("x", centroid[0])
              .attr("y", centroid[1])
              .attr("text-anchor", "middle")
              .attr("fill", "#333")
              .attr("font-size", "12px")
              .attr("font-family", "serif")
              .text(region.properties.name_nl)
              .style("pointer-events", "none")
          }
        })

        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error loading regions:", err)
        setError("Failed to load map data")
        setIsLoading(false)
      })

    // Clean up on unmount
    return () => {
      d3.select(ref.current).selectAll("*").remove()
    }
  }, [])

  return (
    <div className="relative w-full h-[600px] max-w-[800px] mx-auto">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-500/10 text-red-500">
          {error}
        </div>
      )}
      <svg ref={ref} className="w-full h-full" />
    </div>
  )
}
