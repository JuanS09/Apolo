import React, {useState, useContext} from "react";
import './estilo_LoginReg.css';
import {AuthContext} from './../../../Auth/Contexts/auth.context';

import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  Redirect
} from 'react-router-dom';


const Register=()=> {
  
  const {user} = useContext(AuthContext);

  const [numero, setNumero] = useState('');
  const handleChangeNumero = (e) => setNumero(e.target.value);
  
  const [nombre, setNombre] = useState('');
  const handleChangeNombre = (e) => setNombre(e.target.value);

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => setPassword(e.target.value);

  if(user) return (
    <Redirect to='/' />
  );

  const handleClickLogin = () => {
    // añadir validaciones si quieren
    console.log("Iniciando...");

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, numero, nombre, email, password)
    .then((userCredential) => {
      // hacer cosas luego de iniciar sesion
      console.log("Ya me registre", userCredential);
      /*const user = userCredential.user;
      const uid = user.uid;*/

      // llamar al registro de documento para este usuario
    })
    .catch((error) => {
      console.log("Error al registrarse >>> ", error);
    });
  };

  return (
      <div className="base-container">
        <div className="header">REGISTRO DE USUARIO</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="numerocontrato">Número de Contrato</label>
              <input type="number" name="numerocontrato" placeholder="número de contrato" onChange={handleChangeNumero}/>
            </div>
            <div className="form-group">
              <label htmlFor="nombrecompleto">Nombre Completo</label>
              <input type="text" name="nombrecompleto" placeholder="nombre completo" onChange={handleChangeNombre}/>
            </div>
            <div className="form-group">
              <label htmlFor="correoelectronico">Correo Electrónico</label>
              <input type="email" name="correoelectronico" placeholder="correo electrónico" onChange={handleChangeEmail}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="contraseña" onChange={handleChangePassword}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleClickLogin}>
            REGISTRATE
          </button>
        </div>
      </div>
    );

}

export default Register;