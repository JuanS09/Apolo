import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './Auth/Contexts/auth.context';

import Navbar from './Components/Menu/Navbar'

import { Home } from "./Components/Pages/Inicio/Home";
import { Ubicacion } from "./Components/Pages/Ubicacion/Ubicación";
import { Nosotros } from "./Components/Pages/Nosotros/Nosotros";
import { Sesion } from "./Components/Pages/Inicio_Sesion/InicioSesion";
import { Contrato } from "./Components/Pages/Contrato/contrato";
import { Empleado } from "./Components/Pages/Empleado/empleado";
import { Pagos } from "./Components/Pages/Pago/pago";
import { Averia_Listado } from "./Components/Pages/Lista_Averia/averia_listado";
import { RepAverias } from "./Components/Pages/Reporte_Averia/Reporte_averias";
import { Lista_Pago } from "./Components/Pages/Lista_Pago/Lista_pago";


function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Ubicacion' exact component={Ubicacion} />
        <Route path='/Nosotros' exact component={Nosotros} />
        <Route path='/Sesion' exact component={Sesion} />
        <Route path='/Contrato' exact component={Contrato} />
        <Route path='/Empleado' exact component={Empleado} />
        <Route path='/Pago' exact component={Pagos} />
        <Route path='/Averia_Listado' exact component={Averia_Listado} />
        <Route path='/Reporte_Averia' exact component={RepAverias} />
        <Route path='/Lista_Pago' exact component={Lista_Pago} />
      </Switch>
    </Router>
  )
}

export default App;
