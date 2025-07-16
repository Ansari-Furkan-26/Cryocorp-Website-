import React from 'react';

const FullScreenImageWithFilter = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="/services/img5.png" // replace with your own image
                alt="Background"
                className="object-cover w-full h-full absolute inset-0 z-0"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>


        </div>
    );
};

export default FullScreenImageWithFilter;
