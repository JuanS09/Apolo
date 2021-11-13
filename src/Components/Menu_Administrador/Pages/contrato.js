import React, {useEffect, useState} from 'react';
import {fs} from '../../../firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";
import 'firebase/firestore';
import './Contrato/estilo.css'
import Busqueda from './Contrato/busqueda';
import TContrato from './Contrato/tcontrato';

const Contrato = (props) => {
    const [listaContrato, setListaContrato] = useState([]);
    const [Cedula, setCedula] = useState("");
    const [Nombres, setNombres] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Dirección, setDirección] = useState("");
    const [Teléfono, setTeléfono] = useState("");
    const [DescripciónServicio, setDescripcionServicio] = useState("");
    const [CostoServicio, setCostoServicio] = useState("");

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
    
    const addContrato = async () => {
        const obj = {Cedula, Nombres, Apellidos, Dirección, Teléfono, DescripcionServicio, CostoServicio}
        const fsRef = await fs.collection("Contrato").add(obj)
        console.log(fsRef.id)
        clearInput()
        getContrato()
    }
    
    const clearInput = () => {
        setCedula('')
        setNombres('')
        setApellidos('')
        setDirección('')
        setTeléfono('')
        setDescripcionServicio('')
        setCostoServicio('')
    }

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!ContratoId) {
        try {
            const docRef =  addDoc(collection(fs, "Contrato"), {
                Cedula,
                Nombres,
                Apellidos,
                Dirección,
                Teléfono,
                DescripciónServicio,
                CostoServicio
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
        <br/>
        <h2 className='encabezado'>REGISTRO DE CLIENTES</h2>
        <br/>
        <div className='Contenedor'>  
            <form className = "formula" onSubmit = { Validar } >
                    <div className='formulario-cedula'>
                        < label className="form-lab"> CÉDULA </label> 
                        <div className="form-grupo-inp">
                            <input className="form-inp" placeholder = "Cédula"
                            value = {
                                Cedula
                            }
                            onChange = {
                                (e) => setCedula(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-nombre'>
                        <label className="form-lab"> NOMBRES</label> 
                        <div className="form-grupo-inp">
                            <input className="form-inp" placeholder = "Nombres"
                            value = {
                                Nombres
                            }
                            onChange = {
                                (e) => setNombres(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-apellido'>
                        <label className="form-lab"> APELLIDOS</label> 
                        <div className="form-grupo-inp">
                            <input className="form-inp" placeholder = "Apellidos"
                            value = {
                                Apellidos
                            }
                            onChange = {
                                (e) => setApellidos(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-direccion'>
                        <label className="form-lab"> DIRECCIÓN</label> 
                        <div className="form-grupo-inp">
                            <input className="form-inp" placeholder = "Dirección"
                            value = {
                                Dirección
                            }
                            onChange = {
                                (e) => setDirección(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-telefono'>
                        <label className="form-lab"> TELÉFONO</label> 
                        <div className="form-grupo-inp">
                            <input className="form-inp" placeholder = "Teléfono"
                            value = {
                                Teléfono
                            }
                            onChange = {
                                (e) => setTeléfono(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-descripción'>
                        <label className="form-lab"> DESCRIPCIÓN DEL SERVICIO </label> 
                        <div className="form-grupo-inp">
                            <input className="form-inp" placeholder = "Descripción del servicio"
                            value = {
                                DescripciónServicio
                            }
                            onChange = {
                                (e) => setDescripcionServicio(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-costo'>
                        <label className="form-lab"> COSTO DEL SERVICIO</label>
                        <div className="form-grupo-inp"> 
                            <input className="form-inp" placeholder = "Costo del servicio"
                            value = {
                                CostoServicio
                            }
                            onChange = {
                                (e) => setCostoServicio(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className="form-grupo-form-btn-enviar">
                        <button className="bt"
                        onClick = {handleAgregarClick}>
                        GUARDAR 
                        </button>
                    </div>
                </form>
                
            </div>
            <br/>
            <Busqueda/>
            <br/>
            <TContrato/>
            { <div>
                {listaContrato.map((Contrato, index) => {
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{Contrato.Cedula}</td>
                        <td>{Contrato.Nombres}</td>
                        <td>{Contrato.Apellidos}</td>
                        <td>{Contrato.Dirección}</td>
                        <td>{Contrato.Teléfono}</td>
                        <td>{Contrato.DescripciónServicio}</td>
                        <td>{Contrato.CostoServicio}</td>
                    </tr>
                })}
            </div>}
            
            </>
        )
    
}

export default Contrato;   