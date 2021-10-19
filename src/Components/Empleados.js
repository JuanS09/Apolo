import React, {useEffect, useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc, getDocs } from "firebase/firestore";
import './styles/Empleados.css';
import 'firebase/firestore';
import TEmpleados from './Tables/TEmpleados';


const Empleados = (props) => {
    const [listaEmpleados, setListaEmpleados] = useState([]);
    const [Cédula, setCedula] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Dirección, setDirección] = useState("");
    const [Ciudad, setCiudad] = useState("");
    const [Teléfono, setTeléfono] = useState("");

    let EmpleadoId = '';
    if (props.match) EmpleadoId = props.match.params.EmpleadoId;

    const listardatos = async () =>{
        const querySnapshot = await getDocs(collection(fs, "Empleados"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    }
    useEffect(() => {
        listardatos()
        }, [])
    
    const getEmpleados = async () => {
        let obj;
        let lista = []
        const querySnapshot = await fs.collection("Empleados").get();
        querySnapshot.forEach((doc) => {
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj) 
        });
        setListaEmpleados(lista)
    }
    
    const addEmpleado = async () => {
        const obj = {Cédula, Nombre, Apellidos, Dirección, Ciudad, Teléfono}
        const fsRef = await fs.collection("Empleados").add(obj)
        console.log(fsRef.id)
        clearInput()
        getEmpleados()
    }
    
    const clearInput = () => {
        setCedula('')
        setNombre('')
        setApellidos('')
        setDirección('')
        setCiudad('')
        setTeléfono('')
    }

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
            <>
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
           { <div>
                {listaEmpleados.map((Empleados, index) => {
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

            <TEmpleados/>
                     
            </>
        )
    
}

export default Empleados