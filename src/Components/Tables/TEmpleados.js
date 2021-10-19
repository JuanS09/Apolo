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

function createData(Cédula, Nombre, Apellidos, Dirección, Ciudad, Teléfono) {
  return { Cédula, Nombre, Apellidos, Dirección, Ciudad, Teléfono };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TEmpleados() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Cédula</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellidos</StyledTableCell>
            <StyledTableCell align="right">Dirección</StyledTableCell>
            <StyledTableCell align="right">Ciudad</StyledTableCell>
            <StyledTableCell align="right">Teléfono</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Cédula}>
              <StyledTableCell component="th" scope="row">
                {row.Cédula}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Cédula}</StyledTableCell>
              <StyledTableCell align="right">{row.Nombre}</StyledTableCell>
              <StyledTableCell align="right">{row.Apellidos}</StyledTableCell>
              <StyledTableCell align="right">{row.Dirección}</StyledTableCell>
              <StyledTableCell align="right">{row.Ciudad}</StyledTableCell>
              <StyledTableCell align="right">{row.Télefono}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 
