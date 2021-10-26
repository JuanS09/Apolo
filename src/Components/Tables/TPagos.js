import React, {useEffect} from 'react'
import { styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getDocs, collection } from '@firebase/firestore';
import { fs } from '../../firebase';

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



export default function TPagos() {
  const [lista, setlista] = React.useState([]);
  const arrays = []
  let obj;

  
  const listardatos = async () =>{
    const querySnapshot = await getDocs(collection(fs, "Pagos"));
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

  return (
    
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 500 }} aria-label="TPagos">
        <TableHead>
          <TableRow>
            <StyledTableCell aling="center">Cédula</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellidos</StyledTableCell>
            <StyledTableCell align="right">Dirección</StyledTableCell>
            <StyledTableCell align="right">Ciudad</StyledTableCell>
            <StyledTableCell align="right">Teléfono</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
        {lista?<>
          {lista.map((listardatos) => 
            <StyledTableRow key={listardatos.cedula}>
              {console.log(listardatos)}
              <StyledTableCell component="th" >

              </StyledTableCell>
              <StyledTableCell align="right">{listardatos.Cédula}</StyledTableCell>
              <StyledTableCell align="right">{listardatos.Nombre}</StyledTableCell>
              <StyledTableCell align="right">{listardatos.Apellidos}</StyledTableCell>
              <StyledTableCell align="right">{listardatos.Dirección}</StyledTableCell>
              <StyledTableCell align="right">{listardatos.Ciudad}</StyledTableCell>
              <StyledTableCell align="right">{listardatos.Teléfono}</StyledTableCell>              
            </StyledTableRow>
            
          )}
          
          </>:'no hay datos'}
          
        </TableBody>
       
      </Table>
     
    </TableContainer>
    
  );
} 

