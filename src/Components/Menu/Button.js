import React from "react";
import './Button.css'
import {Link} from 'react-router-dom';

export function Button(){
    return(
        <Link to='/Sesion'>
            <button className='btnAd'>INICIO SESIÓN</button>
        </Link>
    );
}