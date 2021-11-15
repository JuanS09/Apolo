import React from 'react'
import Footer from './footer';
import MapView from'./mapView';

export const Ubicacion = () =>{
    return (
        <>
            <div className= 'Pn'>
                <h1 className='Ubicacion'>UBICANOS</h1>
                <MapView/>
            </div>
            <Footer/>
            
        </>
    );
}

