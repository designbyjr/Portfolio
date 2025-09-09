import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

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
          <p className="text-lg md:text-xl text-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" >
            I create stellar web experiences with PHP & Laravel for a variety of clients . . .
            </p>
            {/** Greyed out client logos */}
            <div className="grid grid-cols-2 md:flex md:flex-row flex gap-4 md:gap-0 place-items-center justify-center items-center space-x-1 md:space-x-6 opacity-0 animate-fade-in-delay-4">
                <img src="/assets/images/University_College_London_logo.svg.png" 
                className="bg-white w-33 rounded z-10"
                alt="UCLlogo" />
                <img src="/assets/images/OnBuycom.svg" 
                className="w-30 bg-black p-1 rounded pt-2 z-10"
                alt="OnBuy.com" />
                <img src="/assets/images/AND-logo.png" 
                className="w-32 mt-1"
                alt="And Digital" />
                <img src="/assets/images/Wunderman.svg" 
                className="w-26 bg-black p-2 rounded z-10"
                alt="Wunderman Thompson" />
            </div>
                    <div className="flex flex-row space-x-4 justify-center items-center">
                      {/* <button className="bg-gray-200 hover:bg-gray-300 transition-colors text-gray-900 border border-gray-400 px-5 py-2 mt-0 rounded-md opacity-0 animate-fade-in-delay-4" href="#projects">View My Work</button> */}
                      <button className="bg-blue-800 text-white hover:bg-blue-900 border border-blue-900 transition-colors px-5 py-2 mt-0 rounded-md opacity-0 animate-fade-in-delay-4" href="#contact">Contact Me</button>
                    </div>
            
        </div>
      </div>
      {/** bouncing arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm mt-2">Scroll down</p>
        <ArrowDown className="h-10 w-5"/>
      </div>
    </section>
  );
}