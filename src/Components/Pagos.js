import React, {useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc } from "firebase/firestore";
import './styles/Pagos.css';

const Pagos = (props) => {
    const [NumeroContrato, setNumeroContrato] = useState("");
    const [NombreCliente, setNombreCliente] = useState("");
    const [ApellidoCliente, setApellidoCliente] = useState("");
    const [DirecciónCliente, setDirecciónCliente] = useState("");
    const [Subtotal, setSubtotal] = useState("");
    const [Total, setTotal] = useState("");

    let PagosId = '';
    if (props.match) PagosId = props.match.params.PagosId;

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!PagosId) {
        try {
            const docRef =  addDoc(collection(fs, "Pagos"), {
                NumeroContrato,
                NombreCliente,
                ApellidoCliente,
                DirecciónCliente,
                Subtotal,
                Total
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
           <div className="Contenedo">
            <form className = "Formulari"
            onSubmit = {
                Validar
            } >
            
            <div className="form-heade">
                <h1 className="form-titul"> Registro de Pagos </h1>
            </div>
            < label className="form-labe"> Número </label> 
            <input className="form-inpu" placeholder = "Número de Contrato"
            value = {
                NumeroContrato
            }
            onChange = {
                (e) => setNumeroContrato(e.target.value)
            }
            />

            <label className="form-labe"> Nombre </label> 
            <input className="form-inpu" placeholder = "Nombre Cliente"
            value = {
                NombreCliente
            }
            onChange = {
                (e) => setNombreCliente(e.target.value)
            }
            />

            <label className="form-labe"> Apellidos </label> 
            <input className="form-inpu" placeholder = "Apellidos Cliente"
            value = {
                ApellidoCliente
            }
            onChange = {
                (e) => setApellidoCliente(e.target.value)
            }
            />

            <label className="form-labe"> Dirección </label> 
            <input className="form-inpu" placeholder = "Dirección Cliente"
            value = {
                DirecciónCliente
            }
            onChange = {
                (e) => setDirecciónCliente(e.target.value)
            }
            />

            <label className="form-labe"> Subtotal </label> 
            <input className="form-inpu" placeholder = "Subtotal"
            value = {
                Subtotal
            }
            onChange = {
                (e) => setSubtotal(e.target.value)
            }
            />

            <label className="form-labe"> Total </label> 
            <input className="form-inpu" placeholder = "Total"
            value = {
                Total
            }
            onChange = {
                (e) => setTotal(e.target.value)
            }
            />

            <Button className="boto" variant = "contained"
            color = "primary"
            component = "span"
            onClick = {handleAgregarClick}>
            Agregar 
            </Button> 
            </form>
            </div> 
        )
    
}

export default Pagos