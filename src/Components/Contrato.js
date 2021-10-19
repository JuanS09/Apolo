import React, {useEffect, useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc, getDocs } from "firebase/firestore";
import './styles/Contrato.css';
import 'firebase/firestore';
import TContrato from './Tables/TContrato';

const Contrato = (props) => {
    const [listaContrato, setListaContrato] = useState([]);
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

    const listardatos = async () =>{
        const querySnapshot = await getDocs(collection(fs, "Contrato"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    }
    useEffect(() => {
        listardatos()
        }, [])
    
    const getContrato = async () => {
        let obj;
        let lista = []
        const querySnapshot = await fs.collection("Contrato").get();
        querySnapshot.forEach((doc) => {
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj) 
        });
        setListaContrato(lista)
    }
    
    const addEmpleado = async () => {
        const obj = {Cédula, Nombre, Apellidos, Dirección, Ciudad, Teléfono, Servicio, CiudServ, 
            DirectServ, ObServ, CostServ}
        const fsRef = await fs.collection("Contrato").add(obj)
        console.log(fsRef.id)
        clearInput()
        getContrato()
    }
    
    const clearInput = () => {
        setCedula('')
        setNombre('')
        setApellidos('')
        setDirección('')
        setCiudad('')
        setTeléfono('')
        setServicio('')
        setCiudServ('')
        setDirectServ('')
        setObServ('')
        setCostServ('')
    }

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
           <div className= "Principal">
             
           <div className="Contened">
            <form className = "Formula"
            onSubmit = {
                Validar
            } >

            <div className="form-head">
                <h1 className="form-tit"> Registro de Cliente </h1>
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
            <input className="form-inp" placeholder = "Nombre Cliente"
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
            </form>
            </div>
            <div className="Contened2">
            <form className = "Form2"
            onSubmit = {
                Validar
            } >      

            <div className="form-head2">
                <h1 className="form-tit2"> Registro de Servicio </h1>
            </div>

            < label className="form-lab2"> Servicio </label> 
            <input className="form-inp2" placeholder = "Servicio"
            value = {
                Servicio
            }
            onChange = {
                (e) => setServicio(e.target.value)
            }
            />

            <label className="form-lab2"> Ciudad </label> 
            <input className="form-inp2" placeholder = "Ciudad"
            value = {
                CiudServ
            }
            onChange = {
                (e) => setCiudServ(e.target.value)
            }
            />
            
            <label className="form-lab2"> Direccion </label> 
            <input className="form-inp2" placeholder = "Dirección"
            value = {
                DirectServ
            }
            onChange = {
                (e) => setDirectServ(e.target.value)
            }
            />

            <label className="form-lab2"> Observación </label> 
            <input className="form-inp2" placeholder = "Observación"
            value = {
                ObServ
            }
            onChange = {
                (e) => setObServ(e.target.value)
            }
            />

            <label className="form-lab2"> Costo </label> 
            <input className="form-inp2" placeholder = "Costo"
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
            { <div>
                {listaContrato.map((Empleados, index) => {
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{Empleados.Cedula}</td>
                        <td>{Empleados.Nombre}</td>
                        <td>{Empleados.Apellidos}</td>
                        <td>{Empleados.Dirección}</td>
                        <td>{Empleados.Ciudad}</td>
                        <td>{Empleados.Teléfono}</td>
                    </tr>
                })}
            </div>}
            </div>
            <TContrato/>
            </>
        )
    
}

export default Contrato   