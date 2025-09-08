import React, { useEffect, useState } from 'react';

export const HeroSection = () => {

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
            <span className="opacity-0 animate-fade-in"> Hello, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jamie </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                {" "}
                Gordon
                </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" >
            I create stellar web experiences with PHP & Laravel for a variety of clients . . .
            </p>
            {/** Greyed out client logos */}
            <div className="flex justify-center items-center space-x-4 opacity-0 animate-fade-in-delay-4">
                <img src="/assets/images/University_College_London_logo.svg.png" 
                className="bg-white w-25"
                alt="UCLlogo" />
                <img src="/assets/images/OnBuycom.svg" 
                className="w-25 mt-1"
                alt="OnBuy.com" />
                <img src="/assets/images/AND-logo.png" 
                className="w-25 mt-1"
                alt="And Digital" />
                <img src="/assets/images/Wunderman.svg" 
                className="w-25"
                alt="Wunderman Thompson" />
            </div>
            <button className="bg-indigo-800 text-white px-5 py-2 mt-0 rounded-md opacity-0 animate-fade-in-delay-3">Contact Me</button>
        </div>
      </div>
    </section>
  );
}