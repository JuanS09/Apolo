import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import Empleadospagina from '../Pages/paginaEmpleados'

export const RutasComponentes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/Empleados" component={Empleadospagina} />

            </Switch>
        </Router>
    )
}