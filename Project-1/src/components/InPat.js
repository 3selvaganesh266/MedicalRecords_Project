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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const StyledRouterLink = styled(RouterLink)({
  textDecoration: 'none', // Remove underline
  color: 'black', // Set link color
});

function createData(name, calories, fat, carbs, protein, op) {
  return { name, calories, fat, carbs, protein, op };
}

const rows = [
  createData(<StyledRouterLink to="/Khan">Khan</StyledRouterLink>,
   101,
   'M',
   "S.S Nagar,Madurai",
   "Denque",
   '9786567865',
  ),
  createData(<StyledRouterLink to="/Aashish">Aashish Tony</StyledRouterLink>, 125, 'M', '123, ABC Street, Coimbatore', 'Fever', '9876543210'),
createData(<StyledRouterLink to="/Babin">Babin</StyledRouterLink>, 135, 'M', '456, XYZ Street, Madurai', 'Cold', '8765432109'),
createData(<StyledRouterLink to="/Abishek">Abishek</StyledRouterLink>, 142, 'M', '789, PQR Street, Madurai', 'Headache', '7654321098'),
createData(<StyledRouterLink to="/Nehkha">Nehkha</StyledRouterLink>, 128, 'F', '321, LMN Street, Coimbatore', 'Sore Throat', '6543210987'),
createData(<StyledRouterLink to="/Makesh">Makesh</StyledRouterLink>, 310, 'M', '654, DEF Street, Madurai', 'Cough', '5432109876'),
createData(<StyledRouterLink to="/Meena">Meena</StyledRouterLink>, 150, 'F', '987, GHI Street, Coimbatore', 'Fatigue', '4321098765'),
createData(<StyledRouterLink to="/Babu">Babu</StyledRouterLink>, 138, 'M', '159, JKL Street, Coimbatore', 'Body Ache', '3210987654'),
createData(<StyledRouterLink to="/Aradhya">Aradhya</StyledRouterLink>, 322, 'F', '753, MNO Street, Madurai', 'Nausea', '2109876543'),
createData(<StyledRouterLink to="/Arjun">Arjun</StyledRouterLink>, 145, 'M', '852, STU Street, Coimbatore', 'Shortness of Breath', '1098765432'),
createData(<StyledRouterLink to="/Poormila">Poormila</StyledRouterLink>, 232, 'F', '456, VWX Street, Madurai', 'Dizziness', '0987654321'),
createData(<StyledRouterLink to="/Reena">Reena</StyledRouterLink>, 128, 'F', '654, YZA Street, Chennai', 'Allergy', '7654321098'),


];


export default function InPatient() {
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
            <StyledTableCell >WardNumber</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell >Address</StyledTableCell>
            <StyledTableCell >AffectedBy</StyledTableCell>
            <StyledTableCell >Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell >{row.carbs}</StyledTableCell>
              <StyledTableCell >{row.protein}</StyledTableCell>
              <StyledTableCell >{row.op}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}