import React, { useState, useEffect } from 'react';

const images = ['home.jpg', 'home5.jpeg','home2.jpeg', 'home3.jpeg', 'home4.jpeg'];

export default function ImageRotated() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const rotateImages = () => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        };

        const intervalId = setInterval(rotateImages, 1000); // Rotate images every 5000 milliseconds (5 seconds)

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100px', width: "100px" }}>
            <img
                src={images[currentImage]}
                alt='imgage'
                style={{ marginLeft: "380px", marginRight: "100px", width: '700%', height: '500%' }}
            />
        </div>
    );
}
