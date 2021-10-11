import React, {useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc } from "firebase/firestore";
import './styles/Empleados.css';

const Empleados = (props) => {
    const [Cédula, setCedula] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Dirección, setDirección] = useState("");
    const [Ciudad, setCiudad] = useState("");
    const [Teléfono, setTeléfono] = useState("");

    let EmpleadoId = '';
    if (props.match) EmpleadoId = props.match.params.EmpleadoId;

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!EmpleadoId) {
        try {
            const docRef =  addDoc(collection(fs, "Empleados"), {
                Cédula,
                Nombre,
                Apellidos,
                Dirección,
                Ciudad,
                Teléfono
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          } 
          }
        }
        const Validar = e => {
            e.preventDefault();
        }

        return(
           <div className="Contenedor">
            <form className = "Formulario"
            onSubmit = {
                Validar
            } >

            <div className="form-header">
                <h1 className="form-titulo"> Registro Nuevo Empleado </h1>
            </div>

            < label className="form-label"> Cédula </label> 
            <input className="form-input" placeholder = "Cédula Empleado"
            value = {
                Cédula
            }
            onChange = {
                (e) => setCedula(e.target.value)
            }
            />

            <label className="form-label"> Nombre </label> 
            <input className="form-input" placeholder = "Nombre Empleado"
            value = {
                Nombre
            }
            onChange = {
                (e) => setNombre(e.target.value)
            }
            />

            <label className="form-label"> Apellidos </label> 
            <input className="form-input" placeholder = "Apellidos Empleado"
            value = {
                Apellidos
            }
            onChange = {
                (e) => setApellidos(e.target.value)
            }
            />

            <label className="form-label"> Dirección </label> 
            <input className="form-input" placeholder = "Dirección Empleado"
            value = {
                Dirección
            }
            onChange = {
                (e) => setDirección(e.target.value)
            }
            />

            <label className="form-label"> Ciudad </label> 
            <input className="form-input" placeholder = "Ciudad Empleado"
            value = {
                Ciudad
            }
            onChange = {
                (e) => setCiudad(e.target.value)
            }
            />

            <label className="form-label"> Teléfono </label> 
            <input className="form-input" placeholder = "Teléfono Empleado"
            value = {
                Teléfono
            }
            onChange = {
                (e) => setTeléfono(e.target.value)
            }
            />

            <Button className="boton" 
            variant = "contained"
            color = "primary"
            component = "span"
            onClick = {handleAgregarClick}>
            Agregar 
            </Button> 
            </form>
            </div> 
        )
    
}

export default Empleados