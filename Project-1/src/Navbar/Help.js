import React, { useState, useEffect } from 'react';

const Help = ({ backgroundColor }) => {
  return (
    <div style={{ backgroundColor, padding: "238px", paddingLeft: "50px", paddingRight: "100px", fontSize: '18px' }}>
      <h1>Ask Query?</h1>
      <div style={{ backgroundColor, padding: "0px", paddingLeft: "0px", paddingRight: "10px", fontSize: '18px' }}>
        <p />
        <p>
          Thank you for choosing MediTrackPro for your medical record management needs. If you have any questions, concerns, or feedback, please feel free to contact us.
        </p>
        <p>
          <strong>Address:</strong> 123 Medical Avenue,Coimbatore,TamilNadu
        </p>
        <p>
          <strong>Email:</strong> info@meditrackpro.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9786564534
        </p>
        <p>
          <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
        </p>
        <p>
          For technical support or assistance, please email support@meditrackpro.com or call our support line at +1 (555) 987-6543.
        </p>
        <p>
          We value your feedback and are committed to providing the best service to help you manage your medical records efficiently and securely.
        </p>
      </div>
    </div>
  );
};

export default function AboutUsContainer() {
  const [iteration, setIteration] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("#E0E0E0");

  useEffect(() => {
    const colors = ['#CCCCFF', '#CC99FF', '#9999FF', '#B266FF', '#6666FF','blue'];
    if (iteration <= 5) {
      const timeoutId = setTimeout(() => {
        setBackgroundColor(colors[iteration - 1]);
        setIteration(iteration + 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [iteration, setBackgroundColor, setIteration]);

  return <Help backgroundColor={backgroundColor} />;
}
