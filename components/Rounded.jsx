import React, { useState } from 'react';

const RoundedPicture = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          zIndex: 1,
          opacity: hovered ? 0.8 : 0.5,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      <img
        src={src}
        alt={alt}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default RoundedPicture;