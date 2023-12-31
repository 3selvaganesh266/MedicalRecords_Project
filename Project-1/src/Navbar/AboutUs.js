import React, { useState, useEffect } from 'react';

const AboutUs = ({ backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <div style={{ backgroundColor: backgroundColor, padding: "210px", paddingLeft: "60px", paddingRight: "100px", fontSize: '18px' }}>
        <h1>About MediTrackPro</h1>
        <p />
        Welcome to MediTrackPro, your go-to solution for efficient and secure medical record management. Our system is designed
        <p /> to streamline the process of handling patient data, providing healthcare professionals with a comprehensive tool to
        <p /> manage and access medical records seamlessly.
        <h1>Key Features</h1>
        <p />User-friendly interface
        <p />Secure and compliant data storage
        <p />Efficient inpatient and outpatient record management
        <p />History tracking for hospitals and patients
        {/* <h1>Combined Hospitals : 1</h1>  */}
      </div>
     
    </div>
  );
};

export default function AboutUsContainer() {
  const [iteration, setIteration] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("#E0E0E0");

  useEffect(() => {
    const colors = ['#CCCCFF', '#CC99FF', '#9999FF', 'E5CCFF', '#B266FF','#6666FF']; 
    if (iteration <= 5) {
      const timeoutId = setTimeout(() => {
        setBackgroundColor(colors[iteration - 1]);
        setIteration(iteration + 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [iteration, setBackgroundColor, setIteration]);

  return <AboutUs backgroundColor={backgroundColor} />;
}
