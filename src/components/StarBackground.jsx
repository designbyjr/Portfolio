import React, { useEffect, useState } from 'react';
import { Meteors } from './Meteors';

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  //id for star, x, y, opacity, duration
  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 8900);
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

  // Meteors are now handled by the Meteors component

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    generateStars();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div 
          key={star.id} 
          className="animate-pluse-subtle" 
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.animationDuration}s`,
            opacity: star.opacity,
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: isDarkMode ? 'white' : 'black',
            boxShadow: isDarkMode 
              ? '0 0 20px 5px rgba(255, 255, 255, 0.3)' 
              : '0 0 15px 3px rgba(128, 128, 128, 0.6)'
          }}/>
      ))}

      {/* New Aceternity UI Meteors component */}
      <Meteors number={15} />
    </div>
  );
};