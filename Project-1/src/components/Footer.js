import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Row, Column, Heading, FooterContainer, FooterLink } from "./FooterStyles";

const Footer = () => {
  const navigate = useNavigate();

  const handleFacebookSignIn = () => {
    alert('Visit Our Accounts on Facebook...');
    navigate('/facebook'); 
  };

  const handleTwitterSignIn = () => {
    alert('Visit Our Accounts on Twitter...');
    navigate('/twitter'); 
  };

  const handleInstagramSignIn = () => {
    alert('Visit Our Accounts on Instagram...');
    navigate('/instagram'); 
  };

  const handleYouTubeSignIn = () => {
    alert('Visit Our Accounts on  YouTube...');
    navigate('/youtube'); 
  };
	
	return (
		<Box style={{background: 'linear-gradient(to right, gray, black)'}}>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "8px",
                    marginRight:"10px",
					
				}}
			>
			
			</h1>
			<FooterContainer>
     
 
				<Row>
					<Column>
						<Heading>COMPANY</Heading>
						<FooterLink href="/About">
						ABOUT MTP
						</FooterLink>
						<FooterLink href="#">
							CLIENTS
						</FooterLink>
						<FooterLink href="#">
							OURTEAM
						</FooterLink>
					</Column>
					<Column>
						<Heading>SERVICES</Heading>
						<FooterLink href="#">
						PAYMENT POSTING
						</FooterLink>
						<FooterLink href="#">
            PATIENT AR
						</FooterLink>
						<FooterLink href="#">
						MEDICAL RECORDS MANAGEMENT
						</FooterLink>
						<FooterLink href="#">
            CREDIT BALANCE
						</FooterLink>
					</Column>
					<Column>
						<Heading>CAREERS</Heading>
						<FooterLink href="#">
							TAMILNADU
						</FooterLink>
						<FooterLink href="#">
							AHMEDABAD
						</FooterLink>
						<FooterLink href="#">
							INDORE
						</FooterLink>
						<FooterLink href="#">
							MUMBAI
						</FooterLink>
					</Column>
					<Column>
						<Heading>CONTACTUS</Heading>
						<FooterLink href="/Contact">
								CUSTOMER SUPPORT
            </FooterLink>
						<FooterLink href="#">
									TECHNICAL SUPPORT
						</FooterLink>
						<FooterLink href="#">
								PARTNERSHIPS & SALES
						</FooterLink>
						<FooterLink href="#">
								EMPLOYMENT INQUIRIES
						</FooterLink>
					</Column>
				</Row>
        <footer style={{ backgroundColor: '', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <p style={{ fontSize: '20px', margin: '0' }}>
        &copy; {new Date().getFullYear()} MedTrack - Medical Record Management System | Developed by{' '}
        <a
          href="http://localhost:3000/Home"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}
        >
          MediTrackPro
        </a>
      </p>
	  <div>
		<br/>
		<div style={{marginRight:'170px'}}>
			<b style={{fontSize:'22px'}}> Stay Connected : </b>
			
          <IconButton onClick={handleFacebookSignIn} style={{ color: 'white', height: '50px' }}> 
            <FacebookIcon fontSize="large" />
          </IconButton>
		
          <IconButton onClick={handleTwitterSignIn} style={{ color: 'white' }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
		  <IconButton onClick={handleInstagramSignIn} style={{ color: 'white' }}>
            <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={handleYouTubeSignIn} style={{ color: 'white' }}>
              <YouTubeIcon fontSize="large" />
            </IconButton>
        </div>
        </div>
    </footer>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
