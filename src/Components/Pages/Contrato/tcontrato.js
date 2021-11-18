import React, {useEffect} from 'react'
import { styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, ButtonGroup} from '@material-ui/core';
import { getDocs, collection } from '@firebase/firestore';
import { fs } from '../../../firebase';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { doc, deleteDoc } from "firebase/firestore";


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

export default function TContrato() {
  const [lista, setlista] = React.useState([]);
  const arrays = []
  let obj;

  
  const listardatos = async () =>{
    const querySnapshot = await getDocs(collection(fs, "Contrato"));
    querySnapshot.forEach((doc) => {
      obj = doc.data()
      obj.id = doc.id
      arrays.push(obj)
      setlista(arrays)
// doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});
}
useEffect(() => {
    listardatos()
    }, [])

    const borrar =async(id)=>{
      await deleteDoc(doc(fs, "Contrato", id));
    }

  return (
    
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 200}} aria-label="Contrato">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Número de contrato</StyledTableCell>
            <StyledTableCell align="center">Cédula</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Apellidos</StyledTableCell>
            <StyledTableCell align="center">Dirección</StyledTableCell>
            <StyledTableCell align="center">Teléfono</StyledTableCell>
            <StyledTableCell align="center">Descripción</StyledTableCell>
            <StyledTableCell align="center">Costo</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
        {lista?<>
          {lista.map((listardatos) => 
            <StyledTableRow key={listardatos.cedula}>
              {console.log(listardatos)}
              
              <StyledTableCell align="justify">{listardatos.id}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Cedula}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Nombres}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Apellidos}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Dirección}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.Teléfono}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.DescripciónServicio}</StyledTableCell>
              <StyledTableCell align="justify">{listardatos.CostoServicio}</StyledTableCell>
              <ButtonGroup>
                <Button color="primary" align="justify"><CreateOutlinedIcon/></Button>
                <Button onClick={()=>{borrar(listardatos.id)}} color="warning" align="justify"><DeleteOutlinedIcon/></Button>
                <Button color="success" align="justify"><PictureAsPdfOutlinedIcon/></Button>
              </ButtonGroup>    
            </StyledTableRow>
            
          )}
          
          </>:'no hay datos'}
          
        </TableBody>
       
      </Table>
     
    </TableContainer>
    
  );
} 
