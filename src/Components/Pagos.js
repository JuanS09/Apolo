import React, {useEffect, useState} from 'react';
import {fs} from '../firebase'
import {Button} from '@material-ui/core';
import { collection, addDoc, getDocs } from "firebase/firestore";
import './styles/Pagos.css';
import 'firebase/firestore';
import TPagos from './Tables/TPagos';

const Pagos = (props) => {
    const [listaPagos, setListaPagos] = useState([]);
    const [NumeroContrato, setNumeroContrato] = useState("");
    const [NombreCliente, setNombreCliente] = useState("");
    const [ApellidoCliente, setApellidoCliente] = useState("");
    const [DirecciónCliente, setDirecciónCliente] = useState("");
    const [Subtotal, setSubtotal] = useState("");
    const [Total, setTotal] = useState("");

    let PagosId = '';
    if (props.match) PagosId = props.match.params.PagosId;

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
    
    const getPagos = async () => {
        let obj;
        let lista = []
        const querySnapshot = await fs.collection("Pagos").get();
        querySnapshot.forEach((doc) => {
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj) 
        });
        setListaPagos(lista)
    }
    
    const addEmpleado = async () => {
        const obj = {NumeroContrato, NombreCliente, ApellidoCliente, DirecciónCliente, Subtotal, Total}
        const fsRef = await fs.collection("Pagos").add(obj)
        console.log(fsRef.id)
        clearInput()
        getPagos()
    }
    
    const clearInput = () => {
        setNumeroContrato('')
        setNombreCliente('')
        setApellidoCliente('')
        setDirecciónCliente('')
        setSubtotal('')
        setTotal('')
    }

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
            <>
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
            <TPagos/>
            </div> 
            { <div>
                {listaPagos.map((Empleados, index) => {
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
            </>
        )
    
}

export default Pagos