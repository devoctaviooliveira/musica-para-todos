import React from 'react';

const MenuItem = ({ imgSrc, alt, title, description, time, onAddToCart }) => {
  return (
    <div className="flex gap-2">
      <img 
        src={imgSrc}
        alt={alt}
        className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
      />

      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{description}</p>

        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="font-bold text-lg">{time}</p>
          <button 
            type="button" 
            className="bg-gray-900 px-5 rounded cursor-pointer"
            onClick={() => onAddToCart(title, time)}
          >
            <i className="fa-solid fa-plus text-lg text-white"></i>
          </button>            
        </div>
      </div>
    </div>
  );
};

export default MenuItem;