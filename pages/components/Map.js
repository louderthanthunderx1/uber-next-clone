import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
  'pk.eyJ1IjoibG91ZGVybG9raSIsImEiOiJja3l0cjE1c2kwNTZwMnRxa3ZoZHBpN2ZmIn0.3AozMmunJmldCkyebSGk-w'

const Map = (props) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-73.990593,40.740121],
      // center: [-99.29011, 39.39172],
      zoom: 3,
    })
    // show markers
    if(props.pickupCoordinates){
      // parser to addTomap
      addToMap(map, props.pickupCoordinates)
    }
    
    if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }

    // zoom function
    if(props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ],{
        padding: 60,
      })
    }

  },[props.pickupCoordinates,props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  }


  return <Wrapper id="map"></Wrapper>
  
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2
`
