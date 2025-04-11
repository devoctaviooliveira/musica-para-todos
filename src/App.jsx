import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import MenuItem from './components/MenuItem';
import DonationItem from './components/DonationItem';
import { checkRestaurantOpen } from './utils';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [addressWarn, setAddressWarn] = useState(false);
  const [isOpen, setIsOpen] = useState(checkRestaurantOpen());

  useEffect(() => {
    // Atualiza o status de abertura/fechado periodicamente
    const interval = setInterval(() => {
      setIsOpen(checkRestaurantOpen());
    }, 60000); // Verifica a cada minuto

    return () => clearInterval(interval);
  }, []);

  const addToCart = (name, time) => {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      alert("Você já adicionou essa aula");
      return;
    }

    setCart([...cart, { name, time }]);
  };

  const removeItemCart = (name) => {
    setCart(cart.filter(item => item.name !== name));
  };

  const handleCheckout = () => {
    if (!isOpen) {
      alert("Não estamos em horário de atendimentos");
      return;
    }

    if (cart.length === 0) return;
    if (address === "") {
      setAddressWarn(true);
      return;
    }

    // Enviar o pedido para o WhatsApp
    const cartItems = cart.map((item) => {
      return `${item.name} (${item.time}) | `;
    }).join("");

    const message = encodeURIComponent(cartItems);
    const phone = "12988866084";

    window.open(`https://wa.me/${phone}?text=${message} Nome completo: ${address}`, "_blank");

    setCart([]);
    setAddress('');
    setIsModalOpen(false);
  };

  const menuItems = [
    {
      imgSrc: "/assets/cello-521172_1280.jpg",
      alt: "imagem de um violoncelo",
      title: "Aula de Violoncelo",
      description: "Aprenda a tocar violoncelo com técnica e expressão, desenvolvendo sua musicalidade em aulas personalizadas para todos os níveis!",
      time: "09:00 as 10:00",
    },
    {
      imgSrc: "/assets/acoustic-1851248_1280.jpg",
      alt: "imagem de um violao",
      title: "Aula de Violão",
      description: "Aprenda a tocar violão com técnica e expressão, desenvolvendo sua musicalidade em aulas personalizadas para todos os níveis!",
      time: "10:00 as 11:00",
    },
    {
      imgSrc: "/assets/drum-set-1839383_1280.jpg",
      alt: "imagem de um bateria",
      title: "Aula de Bateria",
      description: "Aprenda a tocar bateria com técnica e expressão, desenvolvendo sua musicalidade em aulas personalizadas para todos os níveis!",
      time: "16:00 as 17:00",
    },
    {
      imgSrc: "/assets/guitar-907654_1280.jpg",
      alt: "imagem de um guitarra",
      title: "Aula de Guitarra",
      description: "Aprenda a tocar guitarra com técnica e expressão, desenvolvendo sua musicalidade em aulas personalizadas para todos os níveis!",
      time: "15:00 as 16:00",
    },
  ];

  const donationItems = [
    {
      imgSrc: "/assets/Stack of money and gold coins 3d cartoon style icon.jpg",
      alt: "Ajude a instituição",
      title: "Ajude a instituição",
      description: "Faça um pix com o valor que deseja colaborar.",
      buttonText: "Ajude-nos",
    },
    {
      imgSrc: "/assets/instrumentos.jpg",
      alt: "Ajude a instituição com instrumentos",
      title: "Doe um instrumento",
      description: "Faça uma doação de um instrumento.",
      buttonText: "Ajude-nos",
    },
  ];

  return (
    <div className="relative pb-16">
      <Header isOpen={isOpen} />
      
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
        Conheça nossa escola de música
      </h2>

      <div id="menu">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index}
              imgSrc={item.imgSrc}
              alt={item.alt}
              title={item.title}
              description={item.description}
              time={item.time}
              onAddToCart={addToCart}
            />
          ))}
        </main>

        <div className="mx-auto max-w-7xl px-2 my-2">
          <h2 className="font-bold text-3xl">
            Ajude com doações
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
          {donationItems.map((item, index) => (
            <DonationItem 
              key={index}
              imgSrc={item.imgSrc}
              alt={item.alt}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <CartModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cart={cart}
        onRemoveItem={removeItemCart}
        address={address}
        onAddressChange={(e) => {
          setAddress(e.target.value);
          setAddressWarn(false);
        }}
        addressWarn={addressWarn}
        onCheckout={handleCheckout}
      />

      <Footer cartCount={cart.length} onCartClick={() => setIsModalOpen(true)} />
    </div>
  );
}

export default App;