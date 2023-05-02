import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";
import ModalCupom from "../modalCupom/ModalCupom";
import ModalPerguntas from "../modalPerguntas/ModalPerguntas";
import Carousel from "../../componentes/estaticos/carousel/Carousel";

function Home() {
  return (
    <>
      <Grid container>
        <Grid alignItems="center" item xs={12}>
          <Box > 
            {/* className="imagemBanner" */}
            <Carousel /> 
          </Box>
        </Grid>
        <Grid  className="teste-back">
          <Box>
            
          </Box>
          <Grid xs={12} className="caixa-troca">
            <Grid item xs={12} className="texto-sobre">
              <Typography variant="h6" component={"h6"} className="borda-texto">
              <h1>Como Funciona a troca?</h1>
              <hr />
                <p>Selecione o produto que você deseja troca, no ato
                disponibilizamos o cupom correspondente a categoria/produto que
                você irá trocar, em seguida direcionamos para nossa pagina de
                produtos, onde você irá escolher o que deseja comprar. Selecione
                o produto desejado, vá para a pagina de pagamento onde o cupom
                será aplicado, a partir do pagamento confirmado,
                disponibilizamos o código de retirada do produto antigo
                fornecido pelo nosso parceiro Eco, fazemos a
                entrega do seu produto novo e mais sustentável.</p>
                <img className="imagem-troca" src="https://ik.imagekit.io/energen/substitui%C3%A7%C3%A3o_apresenta%C3%A7%C3%A3o/fluxograma-11.png?updatedAt=1683062173632" alt="" />
              </Typography>
              
            </Grid>
            {/* <Grid item xs={6}>
              <img  className="imagem-troca" src="https://ik.imagekit.io/energen/ImagensDessa/ezgif.com-webp-to-png.png?updatedAt=1682633452485" alt="" />
            </Grid> */}
          </Grid>
          {/* <Grid xs={12} style={{backgroundColor: '#ffffff'}}> */}
            <Box className="margemButton">
              <ModalCupom />
              <ModalPerguntas />
            </Box>
          {/* </Grid> */}
        </Grid>
        <Grid item xs={12} className="teste-back">
          <Typography
            className="tituloIcone"
            variant="h3"
            component={"h3"}
            align="center"
          >
            <h5>Escolha o produto desejado:</h5>
          </Typography>
          <Grid item xs={12} className="alinha tituloIcone">
            
            <Link to="/categorias/1">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/geladeira.png?updatedAt=1681779909959"
                alt=""
              />
            </Link>

            <Link to="/categorias/2">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/monitor-de-tv.png?updatedAt=1681779910063"
                alt=""
              />
            </Link>

            <Link to="/categorias/3">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/maquina-de-lavar.png?updatedAt=1681779910220"
                alt=""
              />
            </Link>
            
            <Link to="/categorias/4">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/ventilador.png?updatedAt=1681779909886"
                alt=""
              />
            </Link>
            
            <Link to="/categorias/6">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/microondas.png?updatedAt=1681779909856"
                alt=""
              />
            </Link>

            <Link to="/categorias/5">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/ar-condicionado.png?updatedAt=1681779910087"
                alt=""
              />
            </Link>
            
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
