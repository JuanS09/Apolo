import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ImageLogo from './../../Assets/images/Logo Apolo 11.png'
import './Navbar.css';
import { Button } from './Button';
import {
    AuthContext
} from './../../Auth/Contexts/auth.context';

function Navbar(){


    const [click, setClick] = useState(false);

    const handleClick = () => setClick (!click);

    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={ImageLogo}/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                     <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Ubicacion' className='nav-links' onClick={closeMobileMenu}>
                            UBICACIÓN
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Nosotros' className='nav-links' onClick={closeMobileMenu}>
                            NOSOTROS
                        </Link>
                    </li>
                </ul>
                <Button/>
                {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contrato' className='nav-links' onClick={closeMobileMenu}>
                            CONTRATO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Empleado' className='nav-links' onClick={closeMobileMenu}>
                            EMPLEADOS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Pago' className='nav-links' onClick={closeMobileMenu}>
                            PAGOS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Averia_Listado' className='nav-links' onClick={closeMobileMenu}>
                            AVERÍAS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            CERRAR SESIÓN
                        </Link>
                    </li>
                </ul> */}
                {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Reporte_Averia' className='nav-links' onClick={closeMobileMenu}>
                            REPORTE AVERÍA
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Lista_Pago' className='nav-links' onClick={closeMobileMenu}>
                            ESTADO DE PAGO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            CERRAR SESIÓN
                        </Link>
                    </li>
                </ul> */}
            </nav>
        </>
    )
}

export default Navbar;