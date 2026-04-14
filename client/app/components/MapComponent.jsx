'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  const position = [51.505, -0.09];
  const [icon, setIcon] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 1. Mark that we are on the client
    setIsClient(true);

    // 2. Import Leaflet dynamically inside useEffect to prevent SSR errors
    const initLeaflet = async () => {
      const L = await import('leaflet');
      const customIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });
      setIcon(customIcon);
    };

    initLeaflet();
  }, []);

  // Prevent rendering anything until the client-side is confirmed
  // This stops the "appendChild" error by ensuring the div exists first
  if (!isClient) {
    return (
      <div className="w-full h-[350px] rounded-[2.5rem] bg-slate-100 animate-pulse border-8 border-white" />
    );
  }

  return (
    <div className="group relative w-full h-[350px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] z-0">
      
      {/* Decorative label */}
      <div className="absolute top-4 left-4 z-[1000] pointer-events-none">
        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm border border-slate-100">
          Studio Location
        </span>
      </div>

      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false} 
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {icon && (
          <Marker position={position} icon={icon}>
            <Popup>
              <div className="p-1">
                <h4 className="font-bold text-purple-600">Our Studio</h4>
                <p className="text-xs text-slate-600">Web Dev & Quranic Research</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}