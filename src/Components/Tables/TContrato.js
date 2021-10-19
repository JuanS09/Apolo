import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Nombre, Apellido, Servicio, Costo, Telefono, Direccion) {
  return { Nombre, Apellido, Servicio, Costo, Telefono, Direccion };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TContrato() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellido</StyledTableCell>
            <StyledTableCell align="right">servicio</StyledTableCell>
            <StyledTableCell align="right">Costo</StyledTableCell>
            <StyledTableCell align="right">Teléfono</StyledTableCell>
            <StyledTableCell align="right">Dirección</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Nombre}>
              <StyledTableCell component="th" scope="row">
                {row.Nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Nombre}</StyledTableCell>
              <StyledTableCell align="right">{row.Apellido}</StyledTableCell>
              <StyledTableCell align="right">{row.Servicio}</StyledTableCell>
              <StyledTableCell align="right">{row.Costo}</StyledTableCell>
              <StyledTableCell align="right">{row.Telefono}</StyledTableCell>
              <StyledTableCell align="right">{row.Direccion
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 