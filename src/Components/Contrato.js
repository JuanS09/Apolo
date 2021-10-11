import React, {useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc } from "firebase/firestore";
import './styles/Contrato.css';

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
           <div className="Cont">
            <form className = "Formula"
            onSubmit = {
                Validar
            } >

            <div className="form-head">
                <h1 className="form-tit"> Registro Nuevo Contrato </h1>
            </div>

            < label className="form-lab"> Cédula </label> 
            <input className="form-inp" placeholder = "Cédula Cliente"
            value = {
                Cédula
            }
            onChange = {
                (e) => setCedula(e.target.value)
            }
            />

            <label className="form-lab"> Nombre </label> 
            <input className="form-tit" placeholder = "Nombre Cliente"
            value = {
                Nombre
            }
            onChange = {
                (e) => setNombre(e.target.value)
            }
            />

            <label className="form-lab"> Apellidos </label> 
            <input className="form-inp" placeholder = "Apellidos Cliente"
            value = {
                Apellidos
            }
            onChange = {
                (e) => setApellidos(e.target.value)
            }
            />

            <label className="form-lab"> Dirección </label> 
            <input className="form-inp" placeholder = "Dirección Cliente"
            value = {
                Dirección
            }
            onChange = {
                (e) => setDirección(e.target.value)
            }
            />

            <label className="form-lab"> Ciudad </label> 
            <input className="form-inp" placeholder = "Ciudad Cliente"
            value = {
                Ciudad
            }
            onChange = {
                (e) => setCiudad(e.target.value)
            }
            />

            <label className="form-lab"> Teléfono </label> 
            <input className="form-inp" placeholder = "Teléfono Cliente"
            value = {
                Teléfono
            }
            onChange = {
                (e) => setTeléfono(e.target.value)
            }
            />

            < label className="form-lab"> Servicio </label> 
            <input className="form-inp" placeholder = "Servicio"
            value = {
                Servicio
            }
            onChange = {
                (e) => setServicio(e.target.value)
            }
            />

            <label className="form-lab"> Ciudad </label> 
            <input className="form-inp" placeholder = "Ciudad"
            value = {
                CiudServ
            }
            onChange = {
                (e) => setCiudServ(e.target.value)
            }
            />
            
            <label className="form-lab"> Direccion </label> 
            <input className="form-inp" placeholder = "Dirección"
            value = {
                DirectServ
            }
            onChange = {
                (e) => setDirectServ(e.target.value)
            }
            />

            <label className="form-lab"> Observación </label> 
            <input className="form-inp" placeholder = "Observación"
            value = {
                ObServ
            }
            onChange = {
                (e) => setObServ(e.target.value)
            }
            />

            <label className="form-lab"> Costo </label> 
            <input className="form-inp" placeholder = "Costo"
            value = {
                CostServ
            }
            onChange = {
                (e) => setCostServ(e.target.value)
            }
            />

            <Button className="btn"
            variant = "contained"
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