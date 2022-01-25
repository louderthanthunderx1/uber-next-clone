import { useEffect,useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log("pickup", pickup);
    console.log("dropoff", dropoff)


    const [ pickupCoordinates,setPickupCoordinates] = useState("")
    const [ dropoffCoordinates, setDropoffCorrdinates] = useState("")


    const getPickupCoordinates = (pickup) => {
        // const pickup = "Santa Monica"
        // use API function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibG91ZGVybG9raSIsImEiOiJja3l0cjE1c2kwNTZwMnRxa3ZoZHBpN2ZmIn0.3AozMmunJmldCkyebSGk-w",
                limit:1
            })
        )
        .then(response => response.json())
        .then(data => {
            // find center
            // console.log(data.features[0].center)
            setPickupCoordinates(data.features[0].center)
        })
        // ?access_token = 
    }

    const getDropoffCoordinates = (dropoff) => {
        // const dropoff = "Los Angeles"
        // use API function
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoibG91ZGVybG9raSIsImEiOiJja3l0cjE1c2kwNTZwMnRxa3ZoZHBpN2ZmIn0.3AozMmunJmldCkyebSGk-w",
                limit:1
            })
        )
        .then(response => response.json())
        .then(data => {
            // find center
            // console.log("Dropoff")
            // console.log(data.features[0].center)
            setDropoffCorrdinates(data.features[0].center)
        })

    }

    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup,dropoff])


    return (
      <Wrapper>
          <Map 
            // parser to Map data
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
          />
            
          <RideContainer>
              <RideSelector 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
              />
              <ConfirmButtonContainer>
                  <ConfirmButton>
                    Confirm UberX
                  </ConfirmButton>
              </ConfirmButtonContainer>
          </RideContainer>
      </Wrapper>
  )
}

export default Confirm


const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl rounded-lg
`
const Wrapper = tw.div`
flex h-screen flex-col
`
