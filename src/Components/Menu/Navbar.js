import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import ImageLogo from './../../Assets/images/Logo Apolo 11.png'
import './Navbar.css';
import {
    AuthContext
} from './../../Auth/Contexts/auth.context';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar(){


    const [click, setClick] = useState(false);

    const handleClick = () => setClick (!click);

    const closeMobileMenu = () => setClick(false);

    const auth = getAuth();

    const [userdata, setuserdata] = useState();

    const [user, setuser] = useState(false);

    const cerrarsesion=()=> {

    signOut(auth).then(() => {
        setuser(false)
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });

    }

    

console.log(user)
    useEffect(() => {
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Iniciado ")
                const email= user.email;
                setuserdata(email)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log (uid)
                setuser(true)
    // ...
            } else {
                console.log("No iniciado sesion")
                setuser(false)
    // User is signed out
    // ...
            }
});
    }, [])

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
                    {
                        user? <>
                        {
                            userdata==="tvcableapolo11@gmail.com"?<>
                            <li className='nav-item'>
                                <Link to='/Contrato' className='nav-links' >
                                    CONTRATO
                                </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/Empleado' className='nav-links' >
                                EMPLEADO
                            </Link>
                            </li>
                            <li className='nav-item'>
                            <Link to='/Pago' className='nav-links' >
                                PAGOS
                            </Link>
                            </li>
                            </>: userdata!=="tvcableapolo11@gmail.com"?
                            <>
                            <Link to='/Lista_Pago' className='nav-links' >
                            LISTA PAGOS
                            </Link>
                            <Link to='/Reporte_Averia' className='nav-links' >
                            REPORTE AVERIAS
                            </Link>
                            </>:null
                        }
                       </> :null
                    }
                   
                    { user?
                    <li>
                    <button className='btnout' onClick={cerrarsesion}>CERRAR SESIÓN</button>
                     </li>
                    :
                    <li>
                    <Link to='/inicioSesion'>
                    <button className='btnAd'>INICIO SESIÓN</button>
                    </Link>
                </li>
                }

                </ul>
            </nav>
        </>
    )
}

export default Navbar;

