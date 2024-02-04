import { useState, useCallback } from 'react'
import Particles from 'react-tsparticles'
import {loadFull } from "tsparticles"


const SnowFallEffect = () => {
    const init = useCallback(async (engine) => {
        await loadFull(engine)
    })
    return (
        <Particles options={{
            particles: {
            color: {
            value: "#fff"
            },
            number: {
            value: 150
            },
            opacity: {
            value: {min: 0.3, max: 1}
            },
            shape: {
            type: "circle"
            },
            size: {
            value: {min:1, max:5}
            },
            move: {
            direction: "bottom",
            enable: true,
            speed: {min: 3, max: 5},
            straight: false
            }
        }
        }} init={init}/>
    )
}

export default SnowFallEffect