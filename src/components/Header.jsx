import React from 'react';

const Header = ({ isOpen }) => {
  return (
    <header className="w-full h-[420px] bg-[zinc-900] bg-[url('/assets/song-7058726_1280.jpg')] bg-cover bg-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img 
          src="/assets/piano-362251_1280.jpg" 
          alt="logo da empresa"
          className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
        />
        
        <h1 className="text-3xl mt-4 mb-2 font-bold text-white">Música para todos</h1>
        <span className="font-medium text-white">Rua dev 10, Sao Jose dos Campos - SP</span>
        <div className={`px-4 py-1 rounded-lg mt-5 ${isOpen ? 'bg-green-600' : 'bg-red-500'}`}>
          <span className="text-white font-medium">Seg a Sex - 09:00 as 17:00</span>
        </div>
      </div>
    </header>
  );
};

export default Header;