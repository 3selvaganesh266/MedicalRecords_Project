import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './LoginAuth';

const Navbarout = () => {
  const { isLoggedIn, logout, username } = useAuth();

 
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    fontFamily: 'Roboto',
    justifyContent: 'space-between', 
    background: 'linear-gradient(to right, gray, black)',
    fontSize: 'larger',
    color: 'rgb(252, 252, 252)',
    height: '80px',
    position: 'relative',

  };

  const navStyle = {
    flex: '1',
    textAlign: 'right',
  };
 const ulStyle = {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'flex-end', 
    alignItems: 'center', 
  };
  
  const liStyle = {
    marginLeft: '100px',
    fontSize:'lato',
    paddingLeft:'5px',
  };
  

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '25px',
    marginTop: '5px',
    paddingTop: '100',
    marginRight:'20px',
  };
  const logoStyle = {
     maxWidth: '60px', 
  };
  return (
    <div style={navbarStyle} className="navbar">
      <div>
      <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src='Logo12.jpeg' alt='logo' style={{ height: '50px', borderRadius: '50px', marginLeft: '20px' }} />
      </Link>
      </div>
       <a style={{fontSize:'25px',marginLeft:'30px',Padding:"100px",color:"white"}}>MEDI-TRACK-PRO</a>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a style={linkStyle} href="/home">
            Home
            </a>
          </li>
          <li style={liStyle}>
            <a style={linkStyle} href="/About">
            AboutUs
            </a>
          </li>
          <li style={liStyle}>
            <a style={linkStyle} href="/contact">
            ContactUS
            </a>
          </li>
          <li style={liStyle}>
            <a style={linkStyle} href="/help">
            Help
            </a>
          </li>
            <li style={liStyle}>
              <Link to="/login" style={linkStyle} >
               Login
              </Link>
            </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbarout;
