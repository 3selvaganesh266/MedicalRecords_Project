import React, { useState, useEffect } from 'react';

const images = ['home5.jpeg','home2.jpeg','home7.jpeg','home8.jpeg','home9.jpeg'];

export default function ImageRotated() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const rotateImages = () => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        };

        const intervalId = setInterval(rotateImages, 2000); 
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
