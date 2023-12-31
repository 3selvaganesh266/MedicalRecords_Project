import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Link as RouterLink } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';


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

function createData(name, calories, fat, carbs, protein, op,med) {
  return { name, calories, fat, carbs, protein, op,med};
}

const rows = [
  createData(<StyledRouterLink to="">Khan</StyledRouterLink>,
   "17/12/2023",
   "29/12/2023",
   '12',
   "17,000",
   "No",
   'Completed',
  ),
  createData(
    <StyledRouterLink to="/Patient1">rashid</StyledRouterLink>,
    "17/12/2023",
    "29/12/2023",
    '12',
    "17,000",
    "No",
    'Completed',
  ),
  
  createData(
    <StyledRouterLink to="/Patient2">Kohli</StyledRouterLink>,
    "18/12/2023",
    "30/12/2023",
    '15',
    "20,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient3">Rohit</StyledRouterLink>,
    "19/12/2023",
    "31/12/2023",
    '10',
    "15,000",
    "No",
    'In Progress',
  ),
  
  createData(
    <StyledRouterLink to="/Patient11">Chahal</StyledRouterLink>,
    "27/12/2023",
    "08/01/2024",
    '18',
    "25,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient12">Mandhana</StyledRouterLink>,
    "28/12/2023",
    "09/01/2024",
    '22',
    "35,000",
    "No",
    'Completed',
  ),
  
  createData(
    <StyledRouterLink to="/Patient13">Rahul</StyledRouterLink>,
    "29/12/2023",
    "10/01/2024",
    '14',
    "20,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient14">Anuskha</StyledRouterLink>,
    "30/12/2023",
    "11/01/2024",
    '16',
    "28,000",
    "No",
    'Completed',
  ),
  
  createData(
    <StyledRouterLink to="/Patient15">Sherya</StyledRouterLink>,
    "01/01/2024",
    "12/01/2024",
    '10',
    "15,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient16">KaniMozhli</StyledRouterLink>,
    "02/01/2024",
    "13/01/2024",
    '20',
    "30,000",
    "No",
    'Completed',
  ),
  
  createData(
    <StyledRouterLink to="/Patient17">Vijay</StyledRouterLink>,
    "03/01/2024",
    "14/01/2024",
    '15',
    "22,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient18">Sharma</StyledRouterLink>,
    "04/01/2024",
    "15/01/2024",
    '25',
    "40,000",
    "No",
    'Completed',
  ),
  
  createData(
    <StyledRouterLink to="/Patient19">Virat</StyledRouterLink>,
    "05/01/2024",
    "16/01/2024",
    '12',
    "17,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient20">Sandhya</StyledRouterLink>,
    "06/01/2024",
    "17/01/2024",
    '18',
    "25,000",
    "No",
    'Completed',
  ),
  createData(
    <StyledRouterLink to="/Patient7">Shanthi</StyledRouterLink>,
    "23/12/2023",
    "04/01/2024",
    '10',
    "15,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient8">Vidthya</StyledRouterLink>,
    "24/12/2023",
    "05/01/2024",
    '20',
    "30,000",
    "No",
    'Completed',
  ),
  
  createData(
    <StyledRouterLink to="/Patient9">Tharshan</StyledRouterLink>,
    "25/12/2023",
    "06/01/2024",
    '15',
    "22,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient4">Mukin</StyledRouterLink>,
    "20/12/2023",
    "01/01/2024",
    '8',
    "12,000",
    "Yes",
    'Pending',
  ),
  
  createData(
    <StyledRouterLink to="/Patient5">Raju</StyledRouterLink>,
    "21/12/2023",
    "02/01/2024",
    '18',
    "25,000",
    "No",
    'Completed',
  ),
  
  createData(
    <StyledRouterLink to="/Patient6">Ravi</StyledRouterLink>,
    "22/12/2023",
    "03/01/2024",
    '14',
    "19,000",
    "Yes",
    'Pending',
  ),
];


export default function OutPatient() {
  return (
    <div
    style={{
      margin:90,
    }}>
    <TableContainer>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">AdmitedDate</StyledTableCell>
            <StyledTableCell align="right">DisChargedDate</StyledTableCell>
            <StyledTableCell align="right">Number of Days Bed Used</StyledTableCell>
            <StyledTableCell align="right">Total Charge</StyledTableCell>
            <StyledTableCell align="right">Discounts(Students only)</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
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
              <StyledTableCell align="right">{row.med}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}