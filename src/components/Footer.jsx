import React from 'react';

const Footer = ({ cartCount, onCartClick }) => {
  return (
    <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center">
      <button 
        type="button"
        className="flex items-center gap-2 text-white font-bold cursor-pointer"
        onClick={onCartClick}
      >
        ({cartCount}) Aulas agendadas
      </button>
    </footer>
  );
};

export default Footer;