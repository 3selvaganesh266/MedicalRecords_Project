import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #37474f;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} MedTrack - Medical Record Management System | Developed by{' '}
        <FooterLink href="http://localhost:3000/Home" target="_blank" rel="noopener noreferrer">
          MediTrackPro
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
