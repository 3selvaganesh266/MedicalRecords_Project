// import React, { useState, useEffect } from 'react';

// const colors = ['gray','#CCCCFF', '#CC99FF', '#9999FF', 'E5CCFF', '#B266FF','#6666FF']; 

// export default function AboutSet() {
//   const [backgroundColor, setBackgroundColor] = useState(colors[0]);

//   useEffect(() => {
//     let currentIndex = 0;

//     const changeColor = () => {
//       setBackgroundColor(colors[currentIndex]);
//       currentIndex = (currentIndex + 1) % colors.length;
//       setTimeout(changeColor, 2000);
//     };
//     const timeoutId = setTimeout(changeColor, 2000);
//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <div>
//       <div style={{backgroundColor:"#E0E0E0"}}>
//     <div style={{backgroundColor:"#E0E0E0",padding:"65px",paddingLeft:"50px",paddingRight:"100px",fontSize:'18px'}}>
//       <h1>About MediTrackPro</h1>
//       <p/>
//         Welcome to MediTrackPro, your go-to solution for efficient and secure medical record management. Our system is designed
//        <p/>  to streamline the process of handling patient data, providing healthcare professionals with a comprehensive tool to 
//        <p/>manage and access medical records seamlessly.
//       <h1>Key Features</h1>
//         <p/>User-friendly interface
//         <p/>Secure and compliant data storage
//         <p/>Efficient inpatient and outpatient record management
//         <p/>History tracking for hospitals and patients
// </div>
//      <div style={{backgroundColor:"#E0E0E0",paddingTop:"0px",padding:"13px",paddingRight:"100px",fontSize:'18px'}}>
//       <h1>Our Mission</h1>
//        <p/>At MediTrackPro, we aim to revolutionize medical record management by providing a reliable and user-friendly platform. 
//        <p/>Our mission is to empower healthcare professionals with the tools they need to deliver the best possible care to their patients.
//       </div>
//     </div>
//     </div>
//   );
// }
