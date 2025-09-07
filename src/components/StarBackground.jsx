import React, { useEffect, useState } from 'react';



export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  //id for star, x, y, opacity, duration
  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 1,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  }

  //id for meteor, x, y, delay, animationDuration
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  }


  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div key={star.id} className="star animate-pluse-subtle" style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          left: `${star.x}%`,
          top: `${star.y}%`,
          animationDuration: `${star.animationDuration}s`,
          opacity: star.opacity,
        }}/>
      ))}

      {meteors.map((meteor) => (
        <div key={meteor.id} className="meteor animate-meteor" style={{
          width: `${meteor.size * 50}px`,
          height: `${meteor.size * 2}px`,
          left: `${meteor.x}%`,
          top: `${meteor.y}%`,
          animationDuration: `${meteor.animationDuration}s`,
          delay: `${meteor.delay}s`,
        }}/>
      ))}    
    </div>
  );
};