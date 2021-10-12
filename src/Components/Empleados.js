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
           <div className="Contened">
            <form className = "Formular"
            onSubmit = {
                Validar
            } >

            <div className="form-head">
                <h1 className="form-titu"> Registro de Empleado </h1>
            </div>

            < label className="form-lab"> Cédula </label> 
            <input className="form-inp" placeholder = "Cédula Empleado"
            value = {
                Cédula
            }
            onChange = {
                (e) => setCedula(e.target.value)
            }
            />

            <label className="form-lab"> Nombre </label> 
            <input className="form-inp" placeholder = "Nombre Empleado"
            value = {
                Nombre
            }
            onChange = {
                (e) => setNombre(e.target.value)
            }
            />

            <label className="form-lab"> Apellidos </label> 
            <input className="form-inp" placeholder = "Apellidos Empleado"
            value = {
                Apellidos
            }
            onChange = {
                (e) => setApellidos(e.target.value)
            }
            />

            <label className="form-lab"> Dirección </label> 
            <input className="form-inp" placeholder = "Dirección Empleado"
            value = {
                Dirección
            }
            onChange = {
                (e) => setDirección(e.target.value)
            }
            />

            <label className="form-lab"> Ciudad </label> 
            <input className="form-inp" placeholder = "Ciudad Empleado"
            value = {
                Ciudad
            }
            onChange = {
                (e) => setCiudad(e.target.value)
            }
            />

            <label className="form-lab"> Teléfono </label> 
            <input className="form-inp" placeholder = "Teléfono Empleado"
            value = {
                Teléfono
            }
            onChange = {
                (e) => setTeléfono(e.target.value)
            }
            />

            <Button className="bot" 
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