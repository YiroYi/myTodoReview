import React, { useRef, useEffect } from 'react';
import './Map.css';
import mapboxgl from 'mapbox-gl';


const Map = props => {
  console.log(props.center)
  const mapRef = useRef();

  const {center, zoom } = props;

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoieWlyb3lpIiwiYSI6ImNrampqNTZsMjlzbjMydHBkOGtsa3UwYmEifQ.Ap2-dvIvx_O6yFYUlcy-tA';

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: center, // starting position [lng, lat]
      zoom: zoom // starting zoom
      },
      mapRef.current
    );

    // Set options
    new mapboxgl.Marker({
        color: "#red",
        draggable: true
      }).setLngLat(center)
      .addTo(map);
  }, [center, zoom])


  return <div id="map" ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
}

export default Map;
