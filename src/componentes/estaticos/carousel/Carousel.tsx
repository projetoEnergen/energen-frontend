import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Carousel.css'

function Carousel() {
  const items = [
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Home/homeazul.png?updatedAt=1681947191278" role="presentation" />,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Home/60_.png?updatedAt=1681932495224" role="presentation" />,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Home/homeazul__1_.png?updatedAt=1681950308729" role="presentation" />,
    <img className="imagem-carrosel" src="https://ik.imagekit.io/energen/Banner/Design_sem_nome__3_.png?updatedAt=1682632172250" role="presentation" />,
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

  return (
    <AliceCarousel
      mouseTracking
      items={items}
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
