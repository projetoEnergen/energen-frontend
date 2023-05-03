import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'

function Carousel() {
  const items = [
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/ImagensDessa/2.png?updatedAt=1682032003889"/>,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Home/homeazul.png?updatedAt=1681947191278" />,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Promo%C3%A7%C3%A3o/50_.png?updatedAt=1683036825129" />,
    <img className="imagem-carrosel back-imagem" src="https://ik.imagekit.io/energen/Promo%C3%A7%C3%A3o/At%C3%A9_50__de_desconto_na_troca_do_seu_usado.png?updatedAt=1683036335122" />,
  ];

  const responsivo = {
    1024: {
      items: 1,
    },
    300: {
      items: 2,
      itemsFit: "contain",
    },
  };

  return (
    <AliceCarousel
      items={items}
      mouseTracking
      autoPlay
      infinite
      responsive={responsivo}
      disableDotsControls={false}
      disableButtonsControls={true}
      autoPlayInterval={2500}
    />
  );
}

export default Carousel;