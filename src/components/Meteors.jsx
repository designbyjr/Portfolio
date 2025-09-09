import React from 'react';
import { cn } from '@/lib/utils';

export const Meteors = ({ number = 20, className }) => {
  const meteors = [...Array(number)].map((_, i) => {
    const size = Math.floor(Math.random() * 2) + 2;
    return {
      id: i,
      size,
      left: Math.floor(Math.random() * 100),
      top: Math.floor(Math.random() * 100),
      delay: Math.random() * 3 + 3,
      duration: Math.floor(Math.random() * 8) + 2,
    };
  });

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={`absolute top-${meteor.top} left-${meteor.left} w-${meteor.size} h-${meteor.size} rotate-[215deg] animate-meteor`}
          style={{
            top: `5px`,
            left: `${meteor.left}%`,
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          <span className="absolute w-full h-full bg-gradient-to-r from-white via-white to-transparent rounded-full blur-[3px] transform-gpu" />
        </span>
      ))}
    </div>
  );
};