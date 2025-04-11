import React from 'react';

const CartModal = ({ isOpen, onClose, cart, onRemoveItem, address, onAddressChange, addressWarn, onCheckout }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-black/50 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-center font-bold text-2xl mb-2">Meu agendamento</h2>

        <div id="cart-items" className="flex justify-between mb-2 flex-col">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-6">
              <div>
                <p className="font-medium">{item.name}</p>
                {item.time && <p className="font-medium">{item.time}</p>}
              </div>
              <button 
                className="remove-from-cart-btn cursor-pointer text-red-500"
                onClick={() => onRemoveItem(item.name)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        <p className="font-bold mt-4">Digite seu nome completo</p>

        <input 
          type="text"
          placeholder="Digite seu nome completo..."
          value={address}
          onChange={onAddressChange}
          className={`w-full border-2 p-1 rounded my-1 ${addressWarn ? 'border-red-500' : ''}`}
        />

        {addressWarn && <p className="text-red-500">Digite seu nome completo</p>}

        <div className="flex items-center justify-between mt-5 w-full">
          <button 
            type="button" 
            onClick={onClose}
            className="cursor-pointer"
          >
            Fechar
          </button>
          <button 
            type="button" 
            onClick={onCheckout}
            className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
          >
            Finalizar agendamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;