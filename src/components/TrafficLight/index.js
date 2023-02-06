import React, { useEffect, useState } from 'react'
import './index.css'

export default function TrafficLight() {

    const [currLightIndex, setCurrentListIndex] = useState(0);
    // const [lightState, setLightState] = useState(false);
    useEffect(() => {
        // console.log("useEffect")
        // if (lightState) {
        const startLightsInterval = setInterval(() => {
            setCurrentListIndex(prev => ((prev + 1) % 3))
        }, 2000)
        return () => {
            clearInterval(startLightsInterval)
        }
        // }
    }, [])

    // function startTrafficLights() {
    //     setCurrentListIndex(0);
    //     setLightState(true)
    // }

    return (
        <div className='traffic-light-page'>
            <div className="trafic-lights-container">
                {/* <button onClick={startTrafficLights} >Start Light</button> */}
                <div className="redLight" style={{ backgroundColor: currLightIndex === 0 ? "red" : "transparent" }}>

                </div>
                <div className="orangeLight" style={{ backgroundColor: currLightIndex === 1 ? "orange" : "transparent" }}>

                </div>
                <div className="greenLight" style={{ backgroundColor: currLightIndex === 2 ? "green" : "transparent" }}>

                </div>
            </div>
        </div>
    )
}
