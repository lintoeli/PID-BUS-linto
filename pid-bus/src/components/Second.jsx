import React from 'react'
import './Second.css'

export const Second = () => {
    return (
        <div className='second'>
            
            <div className="conjunto">
           
                <div className='texto'>
                <h2 data-aos="fade-right">¿En qué consiste?</h2>
                    <p data-aos="fade-right"> Nuestro proyecto consiste en una IA capaz de detectar personas con movilidad reducida en paradas de autobús, con el objetivo de agilizar el servicio público y mejorar la comodidad y eficiencia para todos sus usuarios.</p>
                </div>
                <div className="imagen" data-aos="fade-left">
                    <img src="https://accesibilidad4all.com/wp-content/uploads/2019/05/soluciones-accesibilidad-personas-silla-de-ruedas.jpg" alt="imagen" />
                </div>
            </div>

        </div>
    )
}
