import React from "react";
import loginImg from "./images/login.svg";
import './estilo_LoginReg.css';

const Login =()=> {
  

    return (
      <div className="base-container">
        <div className="header">INICIO DE SESIÓN</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="text" name="email" placeholder="correo electrónico" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="contraseña" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            ENTRAR
          </button>
        </div>
      </div>
    );

}

export default Login