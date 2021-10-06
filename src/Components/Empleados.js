import React, {useState} from 'react';
import './styles/Empleados.css';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc } from "firebase/firestore";

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
           <div>
            <form className = "Formulario"
            onSubmit = {
                Validar
            } >
            <h1> Registro Nuevo Empleado </h1>
            
            < label > Cédula </label> 
            <input placeholder = "Cédula Empleado"
            value = {
                Cédula
            }
            onChange = {
                (e) => setCedula(e.target.value)
            }
            />

            <label > Nombre </label> 
            <input placeholder = "Nombre Empleado"
            value = {
                Nombre
            }
            onChange = {
                (e) => setNombre(e.target.value)
            }
            />

            <label > Apellidos </label> 
            <input placeholder = "Apellidos Empleado"
            value = {
                Apellidos
            }
            onChange = {
                (e) => setApellidos(e.target.value)
            }
            />

            <label > Dirección </label> 
            <input placeholder = "Dirección Empleado"
            value = {
                Dirección
            }
            onChange = {
                (e) => setDirección(e.target.value)
            }
            />

            <label > Ciudad </label> 
            <input placeholder = "Ciudad Empleado"
            value = {
                Ciudad
            }
            onChange = {
                (e) => setCiudad(e.target.value)
            }
            />

            <label> Teléfono </label> 
            <input placeholder = "Teléfono Empleado"
            value = {
                Teléfono
            }
            onChange = {
                (e) => setTeléfono(e.target.value)
            }
            />

            <Button variant = "contained"
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