import React, { Component } from 'react'
import LPagos from "./tpago";
import BusquedaL from './busqueda'

export const Lista_Pago = () =>{
    return (
        <div>
            <br/>
            <BusquedaL/>
            <br/>
            <LPagos/>
        </div>
    )
}
