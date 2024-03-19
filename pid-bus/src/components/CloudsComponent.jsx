import React, { useEffect } from 'react'
import WAVES from 'vanta/src/vanta.waves'
import './CloudsComponent.css';

export const CloudsComponent = () => {

    useEffect(() => {
        WAVES({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x141414,
            shininess: 18.00,
            waveHeight: 18.50,
            waveSpeed: 0.80,
            zoom: 0.96
        })
    }, [])




    return (
        <div className='bg' id='vanta'></div>
    )
}
