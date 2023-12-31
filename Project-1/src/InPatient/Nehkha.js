import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { green } from '@mui/material/colors';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   //backgroundColor: 'white',
   
     color: theme.palette.common.black,

    fontSize: 20,
  
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    border:0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  
];

export default function Nehkha() {
  return(
  <div
  style={{
    backgroundImage: 'url("https://img.freepik.com/free-photo/medical-desk-with-stethoscope-mask_23-2148519724.jpg?w=1060&t=st=1702717558~exp=1702718158~hmac=46c282dd292c480de13c22cef799f04665e7ca992b5d7fe998b6e434f548d789")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
   
  }}>

 <TableContainer>
      <Table sx={{ minWidth: 700,marginBottom:40,marginTop:20,marginLeft:70,width:100}}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Nehkha</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>21</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>AdmitedDate</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>17/12/2023</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>FatherName</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>Makesh</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell> Mother Name</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>Vidthya</StyledTableCell>
          
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <StyledTableCell>Blood Group</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>B+</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>Mole</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>RightHand</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>Scar</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>Right Nee</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient Handled By</StyledTableCell>
            <StyledTableCell style={{backgroundColor:green}}>Dr.Selvaganesh</StyledTableCell>
          
          </TableRow>
        </TableHead>
        
      </Table>
    </TableContainer>
    </div>
  )
}