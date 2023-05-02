import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'

function Carousel() {
  const items = [
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Home/homeazul.png?updatedAt=1681947191278" role="presentation" />,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Promo%C3%A7%C3%A3o/50_.png?updatedAt=1683036825129" role="presentation" />,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Home/homeazul.png?updatedAt=1681947191278" role="presentation" />,
    <img className="imagem-carrosel back-imagem" src="https://ik.imagekit.io/energen/Promo%C3%A7%C3%A3o/At%C3%A9_50__de_desconto_na_troca_do_seu_usado.png?updatedAt=1683036335122" role="presentation" />,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Carrossel_/carrossel1-16-16.png?updatedAt=1683060885203" role="presentation" />,
    <img className="imagem-carrosel back-imagem" src="https://ik.imagekit.io/energen/Carrossel_/carrossel2-17-17.png?updatedAt=1683060885203  " role="presentation" />,
  ];

  const responsivo = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
      itemsFit: "contain",
    },
  };

  const carrossel = {
    className:"carrossel",
  }

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