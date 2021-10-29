import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick (!click);

    const closeMobileMenu = () => setClick(false);

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                TV Cable Acoyapa Apolo 11
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
                            UBICANOS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Nosotros' className='nav-links' onClick={closeMobileMenu}>
                            NOSOTROS
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO SESIÓN <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;