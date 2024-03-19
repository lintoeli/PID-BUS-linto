import React from 'react'
import './Third.css'
import Bus from './Bus1.mp4';

export const Third = () => {
    return (
        <div className='third'>
            
            <div className="conjunto2">
           
                
                <div className="imagen2" data-aos="fade-right">
                <video autoPlay loop muted playsInline className="video">
                    <source src={Bus} type="video/mp4" />
                        Tu navegador no admite el elemento de video.
                    </video>
                </div>
                <div className='texto2'>
                <h2 data-aos="fade-left">¿Cómo funciona?</h2>
                    <p data-aos="fade-left"> Para lograr nuestro objetivo, utilizamos librerías como Pytorch y OpenCV, propias de Python y orientadas al desarrollo de aplicaciones con inteligencia artificial. </p> <br></br>
                    <p data-aos="fade-left"> Además, para la propia detección de personas con movilidad reducida utilizaremos el modelo YOLOv8, un modelo de rápida y precisa detección que nos será de gran utilidad para la detección en tiempo real. </p>
                </div>
            </div>

        </div>
    )
}
