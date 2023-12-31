import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Link as RouterLink } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import { red } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const StyledRouterLink = styled(RouterLink)({
  textDecoration: 'none', 
  color: 'black', 
});

function createData(name, calories, fat, carbs, protein, op,mad) {
  return { name, calories, fat, carbs, protein, op,mad};
}

const rows = [
    createData('Pradeep', 28, 'M', 'Fever', 1200, "17/12/2023", '09:15:30 AM'),
    createData('Dinesh', 45, 'M', 'Headache', 1800, "17/12/2023", '11:30:45 AM'),
    createData('Archana', 22, 'F', 'Sore Throat', 900, "17/12/2023", '08:45:15 AM'),
    createData('Suresh', 38, 'M', 'Cough', 1600, "17/12/2023", '10:45:30 AM'),
    createData('Poornima', 31, 'F', 'Fatigue', 1400, "17/12/2023", '10:00:00 AM'),
    createData('Nixen', 50, 'M', 'Body Ache', 2000, "17/12/2023", '12:15:45 PM'),
    createData('Aishu', 29, 'F', 'Nausea', 1000, "17/12/2023", '08:30:15 AM'),
    createData('Dhaya', 42, 'M', 'Shortness of Breath', 2200, "17/12/2023", '01:00:30 PM'),
    createData('Maya', 35, 'F', 'Dizziness', 1100, "17/12/2023", '09:45:00 AM'),
    createData('Gugan', 48, 'M', 'Stomach Pain', 1900, "17/12/2023", '11:15:15 AM'),

createData('Gayle', 34, 'M', 'Cold', 1500, "17/12/2023", '10:01:56 AM'),
createData('Suriya', 28, 'M', 'Fever', 1200, "17/12/2023", '09:15:30 AM'),
createData('Siraj', 45, 'M', 'Headache', 1800, "17/12/2023", '11:30:45 AM'),
createData('Shalini', 22, 'F', 'Sore Throat', 900, "17/12/2023", '08:45:15 AM'),
createData('Chawla', 38, 'M', 'Cough', 1600, "17/12/2023", '10:45:30 AM'),
createData('Swetha', 31, 'F', 'Fatigue', 1400, "17/12/2023", '10:00:00 AM'),
createData('Sunil', 50, 'M', 'Body Ache', 2000, "17/12/2023", '12:15:45 PM'),
createData('Ansul', 29, 'M', 'Nausea', 1000, "17/12/2023", '08:30:15 AM'),
createData('Pawan', 42, 'M', 'Shortness of Breath', 2200, "17/12/2023", '01:00:30 PM'),
createData('Samantha', 35, 'F', 'Dizziness', 1100, "17/12/2023", '09:45:00 AM'),
createData('Ajith', 48, 'M', 'Stomach Pain', 1900, "17/12/2023", '11:15:15 AM'),
createData('Paveena', 40, 'F', 'Allergy', 1300, "17/12/2023", '10:30:00 AM'),


];


export default function HospitalAnalysis() {
  return (
    <div
    style={{
      margin:100,
    }}>
    <TableContainer>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">AffectedBy</StyledTableCell>
            <StyledTableCell align="right">Total Charge</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.op}</StyledTableCell>
              <StyledTableCell align="right">{row.mad}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}