import React, { useEffect } from 'react';
import Navbar from './Navbars';
import Navbarout from './Navbarout';

const backgroundImageUrls = ['url(home11.jpeg)']; 

export default function Demoout() {
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const changeImage = () => {
      currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
      const backgroundElement = document.getElementById('background');
      backgroundElement?.style && (backgroundElement.style.backgroundImage = backgroundImageUrls[currentIndex]);

      timeoutId = setTimeout(changeImage, 5000);
    };

    changeImage();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
       <Navbarout/>
      <div id="background" style={{ backgroundImage: backgroundImageUrls[0], backgroundSize: 'cover', padding: '220px', border: '1px solid white', borderRadius: '1px'}}>
        <p style={{ fontSize: '87px', marginRight: 500, fontFamily: 'Lato', marginTop: 10, display: 'flex', justifyContent: 'flex-end',color:'black',marginLeft:'0px' }}>MEDI-TRACK-PRO <br/> </p>
      </div>
    </div>
  );
}
