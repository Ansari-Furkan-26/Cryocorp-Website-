import React from 'react';

const FullScreenImageWithFilter = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="/about/img1.png" // replace with your own image
                alt="Background"
                className="object-cover w-full h-full absolute inset-0 z-0"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-400 opacity-50 z-10"></div>


        </div>
    );
};

export default FullScreenImageWithFilter;
