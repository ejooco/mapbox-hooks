import React, { useEffect, useState, useRef } from "react";
//import "./styles.css";
import mapboxgl from "mapbox-gl";

function Map() {
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(2);

  const node = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: node.current,
      style: "mapbox://styles/ejooco/ckgkbaf6105hj1ao4mdgcw9fy",
      center: [lng, lat],
      zoom: zoom
    });
  }, []);

  return (
    <div>
      <div ref={node} className="mapContainer" />
    </div>
  );
}

export default Map;
