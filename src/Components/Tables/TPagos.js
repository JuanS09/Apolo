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

function createData(Nº_Contrato, NombreCliente, ApellidoCliente, DirecciónCliente, Subtotal, Total) {
  return { Nº_Contrato, NombreCliente, ApellidoCliente, DirecciónCliente, Subtotal, Total };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TPagos() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nº Contrato</StyledTableCell>
            <StyledTableCell align="right">Nombre Cliente</StyledTableCell>
            <StyledTableCell align="right">Apellido Cliente</StyledTableCell>
            <StyledTableCell align="right">Dirección Cliente</StyledTableCell>
            <StyledTableCell align="right">Subtotal</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Nº_Contrato}>
              <StyledTableCell component="th" scope="row">
                {row.Nº_Contrato}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Nº_Contrato}</StyledTableCell>
              <StyledTableCell align="right">{row.NombreCliente}</StyledTableCell>
              <StyledTableCell align="right">{row.ApellidoCliente}</StyledTableCell>
              <StyledTableCell align="right">{row.DirecciónCliente}</StyledTableCell>
              <StyledTableCell align="right">{row.Subtotal}</StyledTableCell>
              <StyledTableCell align="right">{row.Total}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} 
