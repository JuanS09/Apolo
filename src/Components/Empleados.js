/* eslint-disable no-undef */
import React, {Component} from 'react';
import './styles/Empleados.css';
import {firestore} from '../firebase'
import {Button, Paper} from '@material-ui/core';


class Empleados extends Component{
    constructor(props){
        super(props);
        this.state={
            cedula: '',
            nombre: '',
            apellido: '',
            direccion: '',
            ciudad: '',
            telefono: ''
        }
    }

    syncCedulaChanges(cedula){
        console.log(cedula);
        this.setState({
            cedula: cedula
        })
    }

    syncNombreChanges(nombre){
        console.log(nombre);
        this.setState({
            nombre: nombre
        })
    }

    syncApellidoChanges(apellido){
        console.log(apellido);
        this.setState({
            apellido: apellido
        })
    }

    syncDireccionChanges(direccion){
        console.log(direccion);
        this.setState({
            direccion: direccion
        })
    }

    syncCiudadChanges(ciudad){
        console.log(ciudad);
        this.setState({
            ciudad: ciudad
        })
    }

    syncTelefonoChanges(telefono){
        console.log(telefono);
        this.setState({
            telefono: telefono
        })
    }

    submitForm = () =>{
        firestore.collection('Empleado').add({
            cedula,
            nombre,
            apellido,
            direccion,
            ciudad,
            telefono
        }).then(() => {
            console.log("Guardado!!!!");
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }

    render(){
        return(
            <Paper>
                <form>
                    <input 
                    onChange={(e)=>{ this.syncCedulaChanges(e.target.value) }}
                    type="text" 
                    value={this.state.cedula} 
                    placeholder="Cedula"/>
                    <input 
                    onChange={(e)=>{ this.syncNombreChanges(e.target.value) }}
                    type="text" 
                    value={this.state.nombre} 
                    placeholder="Nombre"/>
                    <input 
                    onChange={(e)=>{ this.syncApellidoChanges(e.target.value) }}
                    type="text" 
                    value={this.state.apellido} 
                    placeholder="Apellido"/>
                    <input 
                    onChange={(e)=>{ this.syncDireccionChanges(e.target.value) }}
                    type="text" 
                    value={this.state.direccion} 
                    placeholder="Direccion"/>
                    <input 
                    onChange={(e)=>{ this.syncCiudadChanges(e.target.value) }}
                    type="text" 
                    value={this.state.ciudad} 
                    placeholder="Ciudad"/>
                    <input 
                    onChange={(e)=>{ this.syncTelefonoChanges(e.target.value) }}
                    type="text" 
                    value={this.state.telefono} 
                    placeholder="Telefono"/>
                    <div>
                        <Button>
                            <input
                            onClick={ this.submitForm } 
                            type="submit" 
                            value="Enviar"/>
                        </Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

export default Empleados

// const Empleados = (props) => {
//     const [Cédula, setCedula] = useState("");
//     const [Nombre, setNombre] = useState("");
//     const [Apellidos, setApellidos] = useState("");
//     const [Dirección, setDirección] = useState("");
//     const [Ciudad, setCiudad] = useState("");
//     const [Teléfono, setTeléfono] = useState("");

//     let EmpleadoId = '';
//     if (props.match) EmpleadoId = props.match.params.EmpleadoId;

//     const handleAgregarClick = (e) => {
//         e.preventDefault();
//         //aquí irían las validaciones
//         if (!EmpleadoId) {
//             firestore.collection('Empleado').add({
//                 Cédula,
//                 Nombre,
//                 Apellidos,
//                 Dirección,
//                 Ciudad,
//                 Teléfono
//             }).then(() => {
//                 console.log("Guardado!!!!");
//             }).catch((error) => {
//                 console.log("Error: ", error);
//             });
//         }
//         const Validar = e => {
//             e.preventDefault();
//         }

//         return(
//             <div>
//             <form className = "Formulario"
//             onSubmit = {
//                 Validar
//             } >
//             <h1> Registro Nuevo Empleado </h1>
            
//             < label > Cédula </label> 
//             <input placeholder = "Cédula Empleado"
//             value = {
//                 Cédula
//             }
//             onChange = {
//                 (e) => setCedula(e.target.value)
//             }
//             />

//             <label > Nombre </label> 
//             <input placeholder = "Nombre Empleado"
//             value = {
//                 Nombre
//             }
//             onChange = {
//                 (e) => setNombre(e.target.value)
//             }
//             />

//             <label > Apellidos </label> 
//             <input placeholder = "Apellidos Empleado"
//             value = {
//                 Apellidos
//             }
//             onChange = {
//                 (e) => setApellidos(e.target.value)
//             }
//             />

//             <label > Dirección </label> 
//             <input placeholder = "Dirección Empleado"
//             value = {
//                 Dirección
//             }
//             onChange = {
//                 (e) => setDirección(e.target.value)
//             }
//             />

//             <label > Ciudad </label> 
//             <input placeholder = "Ciudad Empleado"
//             value = {
//                 Ciudad
//             }
//             onChange = {
//                 (e) => setCiudad(e.target.value)
//             }
//             />

//             <label> Teléfono </label> 
//             <input placeholder = "Teléfono Empleado"
//             value = {
//                 Teléfono
//             }
//             onChange = {
//                 (e) => setTeléfono(e.target.value)
//             }
//             />

//             <Button variant = "contained"
//             color = "primary"
//             component = "span"
//             onClick = {handleAgregarClick}>
//             Agregar 
//             </Button> 
//             </form>
//             </div>
//         )
//     }
// }

