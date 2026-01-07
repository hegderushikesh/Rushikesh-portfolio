// components/BlurBlob.jsx
import React from 'react';

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left } = position || { top: '50%', left: '50%' };
  const { width, height } = size || { width: '50%', height: '50%' };

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
      ></div>
    </div>
  );
};

export default BlurBlob;
