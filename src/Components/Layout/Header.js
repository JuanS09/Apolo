import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'

function Header () {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    
                    <Button color='inherit'>
                        Inicio
                    </Button>
                    <Button color='inherit'>
                        Contrato
                    </Button>
                    <Button color='inherit'>
                        Empleados
                    </Button>
                    <Button color='inherit'>
                        Pagos
                    </Button>
                    <Button color='inherit'>
                        Reportes
                    </Button>
                    <Button color='inherit'>
                        Cerrar Sesión
                    </Button>
                    
                </Toolbar>
            </AppBar>            
        </div>
    )
}

export default Header