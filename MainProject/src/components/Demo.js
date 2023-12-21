import React, { useState, useEffect } from 'react';

const colors = ['#C0C0C0', '#CC99FF', '#9999FF', 'E5CCFF', '#B266FF','#6666FF','#A0A0A0']; 

export default function Demo() {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  useEffect(() => {
    let currentIndex = 0;

    const changeColor = () => {
      setBackgroundColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
      setTimeout(changeColor, 2000);
    };
    const timeoutId = setTimeout(changeColor, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div style={{ backgroundColor, padding: "190px", border: "1px solid white", borderRadius: "1px" }}>
        <p style={{ color: "white", fontSize: "60px" }}>MEDICAL RECORDS MANAGEMENT</p>
      </div>
    </div>
  );
}
