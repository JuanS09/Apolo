import React, {useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc } from "firebase/firestore";

const Contrato = (props) => {
    const [Cédula, setCedula] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Dirección, setDirección] = useState("");
    const [Ciudad, setCiudad] = useState("");
    const [Teléfono, setTeléfono] = useState("");
    const [Servicio, setServicio] = useState("");
    const [CiudServ, setCiudServ] = useState("");
    const [DirectServ, setDirectServ] = useState("");
    const [ObServ, setObServ] = useState("");
    const [CostServ, setCostServ] = useState("");

    let ContratoId = '';
    if (props.match) ContratoId = props.match.params.ContratoId;

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!ContratoId) {
        try {
            const docRef =  addDoc(collection(fs, "Contrato"), {
                Cédula,
                Nombre,
                Apellidos,
                Dirección,
                Ciudad,
                Teléfono,
                Servicio,
                CiudServ,
                DirectServ,
                ObServ,
                CostServ
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

        return( <>
           <div>
            <form className = "Formulario"
            onSubmit = {
                Validar
            } >
            <h1> Registro Nuevo Contrato </h1>
            
            < label > Cédula </label> 
            <input placeholder = "Cédula Cliente"
            value = {
                Cédula
            }
            onChange = {
                (e) => setCedula(e.target.value)
            }
            />

            <label > Nombre </label> 
            <input placeholder = "Nombre Cliente"
            value = {
                Nombre
            }
            onChange = {
                (e) => setNombre(e.target.value)
            }
            />

            <label > Apellidos </label> 
            <input placeholder = "Apellidos Cliente"
            value = {
                Apellidos
            }
            onChange = {
                (e) => setApellidos(e.target.value)
            }
            />

            <label > Dirección </label> 
            <input placeholder = "Dirección Cliente"
            value = {
                Dirección
            }
            onChange = {
                (e) => setDirección(e.target.value)
            }
            />

            <label > Ciudad </label> 
            <input placeholder = "Ciudad Cliente"
            value = {
                Ciudad
            }
            onChange = {
                (e) => setCiudad(e.target.value)
            }
            />

            <label> Teléfono </label> 
            <input placeholder = "Teléfono Cliente"
            value = {
                Teléfono
            }
            onChange = {
                (e) => setTeléfono(e.target.value)
            }
            />
            </form>
            </div>
            
            <div>
            <form className = "Form"
            onSubmit = {
                Validar
            } >
            <h1> Servicio Contratado </h1>
            
            < label > Servicio </label> 
            <input placeholder = "Servicio"
            value = {
                Servicio
            }
            onChange = {
                (e) => setServicio(e.target.value)
            }
            />

            <label > Ciudad </label> 
            <input placeholder = "Ciudad"
            value = {
                CiudServ
            }
            onChange = {
                (e) => setCiudServ(e.target.value)
            }
            />
            
            <label > Direccion </label> 
            <input placeholder = "Dirección"
            value = {
                DirectServ
            }
            onChange = {
                (e) => setDirectServ(e.target.value)
            }
            />

            <label > Observación </label> 
            <input placeholder = "Observación"
            value = {
                ObServ
            }
            onChange = {
                (e) => setObServ(e.target.value)
            }
            />

            <label > Costo </label> 
            <input placeholder = "Costo"
            value = {
                CostServ
            }
            onChange = {
                (e) => setCostServ(e.target.value)
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
            </>
        )
    
}

export default Contrato    