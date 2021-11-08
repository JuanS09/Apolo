import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Appadmin.css';

import Navbar from './Navbar';

import Contrato from './Pages/contrato';
import Empleados from './Pages/empleados';
import Pagos from './Pages/pagos'
import Averias_listado from './Pages/averias_listado';

function AppAdmin () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/contrato' exact component={Contrato} />
        <Route path='/empleados' exact component={Empleados} />
        <Route path='/pagos' exact component={Pagos}/>
        <Route path='/averias_listados' exact component={Averias_listado}/>
      </Switch>
    </Router>
    
  )
}

export default AppAdmin;
