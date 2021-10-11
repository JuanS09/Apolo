import React, {useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc } from "firebase/firestore";
import './styles/RepAverias.css';

const RepAverias = (props) => {
    const [IdContrato, setIdContrato] = useState("");
    const [Observacion, setObservacion] = useState("");
    const [Averia, setAveria] = useState("");

    let RepAveriasId = '';
    if (props.match) RepAveriasId = props.match.params.RepAveriasId;

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!RepAveriasId) {
        try {
            const docRef =  addDoc(collection(fs, "Reporte Averías"), {
                IdContrato,
                Observacion,
                Averia,
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
            <div className= "form-header">
                <h1 className= "form-titulo"> Reportar Avería </h1>
            </div>
            < label className="form-label"> IdContrato </label> 
            <input className="form-input" placeholder = "Id Contrato"
            value = {
                IdContrato
            }
            onChange = {
                (e) => setIdContrato(e.target.value)
            }
            />

            <label className="form-label"> Observacion </label> 
            <input className="form-input" placeholder = "Observación"
            value = {
                Observacion
            }
            onChange = {
                (e) => setObservacion  (e.target.value)
            }
            />

            <label className="form-label"> Averia </label> 
            <input className="form-input" placeholder = "Avería"
            value = {
                Averia
            }
            onChange = {
                (e) => setAveria(e.target.value)
            }
            />

            <Button className="boton" variant = "contained"
            color = "primary"
            component = "span"
            onClick = {handleAgregarClick}>
            Agregar 
            </Button> 
            </form>
            </div> 
        )
    
}

export default RepAverias
