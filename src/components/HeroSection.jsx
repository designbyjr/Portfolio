import React, { useEffect, useState } from 'react';

export const HeroSection = () => {

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-4">
            <span>Hello, I'm</span>
            <span>Jamie</span>
            <span>Gordon</span>
          </h1>
          <p className="text-lg">I'm a passionate developer</p>
        </div>
      </div>
    </section>
  );
}