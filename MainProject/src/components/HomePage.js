import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Demo from './Demo';
import Footer from './Footer';
import ImageRotated from './ImageRotated';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
   backgroundColor: '#E0E0E0',
   color: theme.palette.common.black,
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
  '& .box': {
    border: '4px solid #ddd',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
}));

const StyledRouterLink = styled(RouterLink)({
  textDecoration: 'none', 
  color: 'black', 
});

function createData(name, calories, fat,carbs,protein,op,med) {
  return { name, calories, fat, carbs,protein,op,med };
}

const rows = [
  createData(
    <Link to="/login">
      <Button variant="text" color="primary" startIcon={<img src="Logo12.jpeg" alt="Your Alt Text" style={{ width: '35px', height: '35px', borderRadius: '75px' }} />}>
      </Button>
    </Link>,
    <StyledRouterLink to="/Home" style={{ fontFamily: 'Roboto', textDecoration: 'none', color: 'inherit' }}>
      Home
    </StyledRouterLink>,
    <StyledRouterLink to="/login" style={{ fontFamily: 'YourDesiredFont', textDecoration: 'none', color: 'inherit' }}>
     Login
    </StyledRouterLink>,
    <StyledRouterLink to="/signup" style={{ fontFamily: 'YourDesiredFont', textDecoration: 'none', color: 'inherit' }}>
      SignUp
    </StyledRouterLink>,
    <StyledRouterLink to="/About" style={{ fontFamily: 'Lato', textDecoration: 'none', color: 'inherit' }}>
      AboutUs
    </StyledRouterLink>,
    <StyledRouterLink to="/contact" style={{ fontFamily: 'YourDesiredFont', textDecoration: 'none', color: 'inherit' }}>
      ContactUS
    </StyledRouterLink>,
    <StyledRouterLink to="/more" style={{ fontFamily: 'YourDesiredFont', textDecoration: 'none', color: 'inherit' }}>
      More
    </StyledRouterLink>,
  ),
];


export default function HomePage() {

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (

<div>
    <TableContainer>
      <Table sx={{ minWidth: 7 }}>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell> {row.name}</StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell >{row.fat}</StyledTableCell>
              <StyledTableCell >{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.op}</StyledTableCell>
              <StyledTableCell>{row.med}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        <Demo/>
           
    <div style={{backgroundColor:"#0000",padding:"20px",border:"1px solid white",borderRadius:"1px",paddingLeft:"400px",fontSize:'30px'}}>
      <td>
       <th>
       <Link component={RouterLink} to="/InPatient" color="primary" style={{textDecoration: 'none',color: '#B266FF',}}>
        InPatient  / 
        </Link>
        </th>
       <th>
       <Link component={RouterLink} to="/OutPatient" color="primary" style={{textDecoration: 'none',color: '#B266FF',}}>
        OutPatient  / 
        </Link>
        </th>
       <th>
       <Link component={RouterLink} to="/HospitalAnalysis" color="primary" style={{textDecoration: 'none',color: '#B266FF',}}>
        Hospital Analystics  / 
        </Link>
        </th>
       <th>
       <Link component={RouterLink} to="" color="primary" style={{textDecoration: 'none',color: '#B266FF',}}>
        Others  
        </Link>
        </th>
      
      </td>
    </div>
    <div style={{backgroundColor:"#0000",padding:"20px",paddingLeft:"50px",paddingRight:"100px",fontSize:'18px'}}>
      <br/>
   <p/> MTP works with each individual client to provide a centralized electronic medical record management system. Using advanced
     <p/>encryption and strict access controls, we ensure data privacy and compliance with regulatory standards. MTP proudly process
     <p/>medical records requests within a 24 hours. This, in turn, improves productivity, patient care and timely claims processing. Our medical 
     <p/>records team effectively increases revenue with precise invoicing and collections per state guidelines regarding payment for records.
    </div>
   <br/>
   {/* <div style={{backgroundSize: 'cover',backgroundRepeat: 'no-repeat',height:'100px',width:"100px"}}>
    <img src='home.jpg' alt='imgage' style={{ marginLeft:"380px",marginRight:"100px",width: '700%',height:'500%' }} />
   </div> */}
   <ImageRotated/>
 
  <div style={{backgroundColor:"#0000",padding:"20px",paddingLeft:"50px",paddingRight:"100px",fontSize:'18px'}}>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

    <h1>Importance Of Medical Records Management System</h1>
    <p/>Patient records and information maintenance is crucial for any healthcare organization. Medical records help in interest of
    <p/> both the patient and the medical service provider. Providing the best health care services  for the patient from the reception to
    <p/> diagnosis and treatment is the primary motive of any healthcare provider.However, documenting the entire information and events
    <p/> pertaining to each patient and maintaining the same for records and future reference is very critical. Record maintenance is the sole 
    <p/> evidence for the doctors to prove their treatments to the patient. It shows the diligence and quality of care delivered by the healthcare 
    <p/>provider. It also plays a key role in the entire revenue cycle management process of the organization.
  </div>

  <div style={{backgroundColor:"#0000",padding:"20px",paddingLeft:"50px",paddingRight:"100px",fontSize:'18px'}}>
    <h1>
    Medical Record Management System At MediTrackPro
    </h1>

    <p/>The Medical Record Management System is a comprehensive platform designed to efficiently organize and manage essential healthcare data.
     <p/>The system encompasses detailed records for both inpatient and outpatient services, ensuring a holistic approach to patient care. <b>InPatient</b>
     <p/>details include pertinent information such as patient demographics, admission and discharge dates, comprehensive medical history, allergies, 
     <p/>prescribed medications, and detailed reports of diagnostic tests and treatments.
     <br/><br/><br/>
     <p/>For <b>OutPatient </b> services, the system captures patient information, appointment details, consultation notes, prescribed medications,and any 
      <p/>recommended follow-up procedures. This ensures a seamless continuum of care and facilitates effective communication between 
      <p/> healthcare and patients.The <b>Hospitals history</b> section provides a repository for key institutional information. It includes details about the hospital,
      <p/> such as its name, location, and contact information, as well as an inventory of medical equipment. The system also documents the 
      <p/>hospital's service offerings, statistics on hospitalizations, and noteworthy medical cases handled.
  </div>
    
    <div style={{backgroundColor:"#0000",padding:"20px",paddingLeft:"50px",paddingRight:"100px",fontSize:'18px'}}>
      <h1>Features Of A MediTrackPro</h1>

        <p/>MediTrackPro,the cutting-edge Medical Records Management System, embodies a user-centric approach with a plethora of features 
        <p/>designed to revolutionize to revolutionize healthcare administration. Users, ranging from healthcare professionals to support staff,
        <p/>experience a secure and personalized environment facilitated by robust authentication and role-based authorization controls.At the core
        <p/>of MediTrackPro's capabilities is its seamless integration with Electronic Health Records, providing a unified platform for storing and
        <p/>retrieving comprehensive patient data. The system prioritizes interoperability, ensuring smooth data exchange with other healthcare
        <p/>systems, fostering collaborative efforts, and maintaining continuity of care.
    </div>
     <div>
      <Footer/>
      </div>
    </div>


   




  );
}