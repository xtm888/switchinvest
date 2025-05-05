"use client"

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const Html5Map: React.FC = () => {
  const [mapdataLoaded, setMapdataLoaded] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Combined Effect for Observer setup and Map Initialization
  useEffect(() => {
    if (scriptsLoaded && mapContainerRef.current) {
      console.log('Scripts loaded, setting up observer and initializing map...');
      const targetNode = mapContainerRef.current;
      let observer: MutationObserver | null = null; // Declare observer here

      // --- MutationObserver Setup --- 
      const linkSelector = 'a[href="https://simplemaps.com"][title="For evaluation use only."]';
      const hideLink = () => {
        const trialLink = targetNode.querySelector(linkSelector);
        if (trialLink && (trialLink as HTMLElement).style.display !== 'none') {
          console.log('MutationObserver: Hiding Simplemaps trial link.');
          (trialLink as HTMLElement).style.display = 'none';
        }
      };
      hideLink(); // Initial check
      observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            hideLink();
          }
        }
      });
      const config = { childList: true, subtree: true };
      observer.observe(targetNode, config);
      // --- End MutationObserver Setup ---

      // --- Map Initialization --- 
      console.log('Clearing map container before initialization.');
      targetNode.innerHTML = ''; // Clear container

      if (typeof (window as any).simplemaps_countrymap?.load === 'function') {
        console.log('Manually initializing Simplemaps...');
        try {
          (window as any).simplemaps_countrymap.load();
          console.log('Simplemaps initialized successfully.');
        } catch (error) {
          console.error('Error calling simplemaps_countrymap.load():', error);
        }
      } else {
        console.warn('simplemaps_countrymap.load function not found when expected.');
      }
      // --- End Map Initialization ---

      // Cleanup function for this effect
      return () => {
        console.log('Cleaning up map effect: disconnecting observer.');
        if (observer) {
          observer.disconnect();
        }
        // Note: Simplemaps doesn't provide a standard 'destroy' or 'unmount' method.
        // Clearing innerHTML on next run is the main cleanup for the map itself.
      };
    }
  }, [scriptsLoaded]); // Re-run this effect only when scriptsLoaded changes

  // Note: The map scripts (mapdata.js, countrymap.js) rely on global variables and
  // directly manipulate the DOM. mapdata.js MUST load before countrymap.js.
  // Manual initialization is triggered via useEffect when scripts are loaded.

  return (
    <>
      <Script
        src="/js/mapdata.js" // Path relative to /public
        strategy="lazyOnload" // Load after page is interactive
        onLoad={() => {
          console.log('mapdata.js loaded');
          setMapdataLoaded(true); // Signal mapdata is loaded
        }}
        onError={(e) => console.error('Error loading mapdata.js:', e)}
      />
      {/* Conditionally load countrymap.js only after mapdata.js is loaded */}
      {mapdataLoaded && (
        <Script
          src="/js/countrymap.js" // Path relative to /public
          strategy="lazyOnload" // Load after page is interactive
          onLoad={() => {
            console.log('countrymap.js loaded');
            // Check if simplemaps_countrymap is initialized
            if (typeof (window as any).simplemaps_countrymap !== 'undefined') {
               console.log('Simplemaps countrymap object found.');
               setScriptsLoaded(true); // Set final loaded state
            } else {
               console.warn('Simplemaps countrymap object NOT found after script load.');
            }
          }}
          onError={(e) => console.error('Error loading countrymap.js:', e)}
        />
      )}

      {/* The div where the map will be rendered, matching the 'div' setting in mapdata.js */}
      <div ref={mapContainerRef} id="map" className="h-[50vh] w-full">
        {/* Optional: Add a loading indicator until scripts are loaded */}
        {!scriptsLoaded && <p>Loading map...</p>}
      </div>
    </>
  );
};

export default Html5Map;
