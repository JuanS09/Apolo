import React from "react";
import loginImg from "./images/login.svg";
import './estilo_LoginReg.css';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">REGISTRO DE USUARIO</div>
        <div className="content">
          {/* <div className="image">
            <img src={loginImg} />
          </div> */}
          <div className="form">
            <div className="form-group">
              <label htmlFor="numerocontrato">Número de Contrato</label>
              <input type="text" name="numerocontrato" placeholder="número de contrato" />
            </div>
            <div className="form-group">
              <label htmlFor="nombrecompleto">Nombre Completo</label>
              <input type="text" name="nombrecompleto" placeholder="nombre completo" />
            </div>
            <div className="form-group">
              <label htmlFor="correoelectronico">Correo Electrónico</label>
              <input type="text" name="correoelectronico" placeholder="correo electrónico" />
            </div>
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input type="text" name="contraseña" placeholder="contraseña" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            REGISTRATE
          </button>
        </div>
      </div>
    );
  }
}