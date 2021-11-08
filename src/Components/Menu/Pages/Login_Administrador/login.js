import React from "react";
import loginIma from "./images/login.svg";
import fs from '../../../../firebase'

export class LoginA extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">INICIO DE SESIÓN</div>
        <div className="content">
          <div className="image">
            <img src={loginIma} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="nombreusuario">Nombre de Usuario</label>
              <input type="text" name="nombreusuario" placeholder="nombre de usuario" />
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
}