import { useState } from 'react'
import MouseTrail from './assets/components/MouseTrail';
import './index.css'

const StartPage = () => {
  const text = "Welcome to PokeMatch"
  
  return (
    <div className="grid grid-rows-2 items-center justify-center bg-cover bg-pokemon bg-center bg-fixed 
      md:bg-center sm:bg-top min-h-screen">
      <MouseTrail />
      {/* Bagian Header */}
      <div className="p-6 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pokemon font-bold">
        {text.split('').map((char, index) => (
          <span key={index} className="text-hover-lightning">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold mt-8">
          Mulai Petualanganmu dengan Mengasah Ingatanmu
        </h2>
      </div>

      {/* Bagian Button */}
      <div className="flex items-center justify-center mb-10 sm:mb-20 lg:mb-20 z-10">
        <button
          className="bg-yellow-500 text-black text-sm sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          MULAI SEKARANG
        </button>
      </div>
    </div>
  );
};

export default StartPage;
