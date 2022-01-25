import { useEffect,useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates,dropoffCorordinates}) => {
    const [rideDuration, setRideDuration] = useState(0)

    // get ride duration from MAPBOX API
    // 1. pickupCoordination
    // 2. dropoffCoordination

    // useEffect(()=>{
    //     rideDuration = fetch(
    //         `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCorordinates[0]},${dropoffCorordinates[1]}?pk.eyJ1IjoibG91ZGVybG9raSIsImEiOiJja3l0cjE1c2kwNTZwMnRxa3ZoZHBpN2ZmIn0.3AozMmunJmldCkyebSGk-w"`
    //     )
    //     .then(res => res.json())
    //     .then(data => {
    //         setRideDuration(data.routes[0].duration / 100)
    //     })
    // },[pickupCoordinates, dropoffCorordinates])

    const getRideDuration = (pickupCoordinates,dropoffCorordinates) => {
        // const dropoff = "Los Angeles"
        // use API function
        rideDuration = fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCorordinates[0]},${dropoffCorordinates[1]}.json?` +
            new URLSearchParameter({
                access_token: "pk.eyJ1IjoibG91ZGVybG9raSIsImEiOiJja3l0cjE1c2kwNTZwMnRxa3ZoZHBpN2ZmIn0.3AozMmunJmldCkyebSGk-w",
            })
        )
        console.log(getRideDuration)
        .then(response => response.json())
        .then(data => {
            // find center
            console.log(data)
            // console.log(data.features[0].center)
            setRideDuration(data.routes[0].duration / 100)
            // setDropoffCorrdinates(data.features[0].center)
        })

    }
  return (
      <Wrapper>
          <Title>Choose a ride, or swipe up for more.</Title>
          <CarList>
              { carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetail>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetail>
                        <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                    )
                )
            }

          </CarList>
      </Wrapper>

  )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-4 items-center
`

const CarImage = tw.img`
h-14 mr-2
`
const CarDetail = tw.div`
flex-1
`
const Service = tw.div`
font-medium 
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

