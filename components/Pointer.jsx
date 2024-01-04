'use client';

/* eslint-disable */

import { useEffect } from 'react';


const Pointer = () => {
  useEffect(() => {
    const trailer = document.getElementById("trailer");
    if (trailer) {
      const animateTrailer = (e, interacting) => {
        const x = e.clientX - trailer.offsetWidth / 2,
              y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
          transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
        }

        trailer.animate(keyframes, { 
          duration: 300, 
          fill: "forwards" 
        });
      }

      document.addEventListener("mousemove", (e) => animateTrailer(e, false));
      document.addEventListener("mousedown", (e) => animateTrailer(e, true));
      document.addEventListener("mouseup", (e) => animateTrailer(e, false));
    }
  }, []);

  return (
    <div id="trailer"></div>
  );
}

export default Pointer;
