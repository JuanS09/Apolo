import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ImageLogo from './../../Assets/images/Logo Apolo 11.png'
import './Navbar.css';
import { Button } from './Button';

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
            </nav>
        </>
    )
}

export default Navbar;