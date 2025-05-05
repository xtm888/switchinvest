'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

// Fix leaflet's default icon path issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom gold marker icon for properties
const goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Create a custom teal icon for the HQ
const tealIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Define building locations
const propertyLocations = [
  { name: "Étoile Residences", location: "Brussels", coordinates: [50.8476, 4.3572], type: "Residential" },
  { name: "Portside Business Centre", location: "Antwerp", coordinates: [51.2213, 4.4051], type: "Commercial" },
  { name: "North Sea Gateway Logistics", location: "Ghent (Port Area)", coordinates: [51.0940, 3.7174], type: "Mixed Use" },
  { name: "The Sablon Quarters", location: "Brussels", coordinates: [50.8429, 4.3536], type: "Residential" },
  { name: "European Real Estate Association", location: "Brussels", coordinates: [50.8505, 4.3488], type: "Commercial" },
];

const LeafletMap = () => {
  const hqPosition: L.LatLngExpression = [50.8280, 4.3710]; // Ixelles, Brussels coordinates
  const belgiumCenter: L.LatLngExpression = [50.5039, 4.4699]; // Center of Belgium

  return (
    <div className="relative z-0">
      {/* Wrapper with z-index:0 ensures map stays below navigation */}
      <MapContainer 
        center={belgiumCenter} 
        zoom={8} 
        scrollWheelZoom={true} 
        style={{ height: '50vh', width: '100%' }} 
        className="rounded-lg shadow-md"
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      
      {/* SwitchInvest HQ Marker */}
      <Marker position={hqPosition} icon={tealIcon}>
        <Popup className="custom-popup">
          <div className="font-semibold">SwitchInvest HQ</div>
          <div className="text-sm">Ixelles, Brussels</div>
        </Popup>
      </Marker>
      
      {/* Property Markers */}
      {propertyLocations.map((property, index) => (
        <Marker 
          key={index} 
          position={property.coordinates as L.LatLngExpression} 
          icon={goldIcon}
        >
          <Popup className="custom-popup">
            <div className="font-semibold">{property.name}</div>
            <div className="text-sm">{property.location}</div>
            <div className="text-xs mt-1 text-gray-600">{property.type}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default LeafletMap;
