import React, {useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc } from "firebase/firestore";

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
           <div>
            <form className = "Formulario"
            onSubmit = {
                Validar
            } >
            <h1> Reportar Avería </h1>
            
            < label > IdContrato </label> 
            <input placeholder = "Id Contrato"
            value = {
                IdContrato
            }
            onChange = {
                (e) => setIdContrato(e.target.value)
            }
            />

            <label > Observacion </label> 
            <input placeholder = "Observación"
            value = {
                Observacion
            }
            onChange = {
                (e) => setObservacion  (e.target.value)
            }
            />

            <label > Averia </label> 
            <input placeholder = "Avería"
            value = {
                Averia
            }
            onChange = {
                (e) => setAveria(e.target.value)
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

export default RepAverias
