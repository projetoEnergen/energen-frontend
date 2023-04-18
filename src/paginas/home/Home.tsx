import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import "./Home.css";
import { Box } from "@mui/material";

function Home() {
  return (
    <>
      <Grid container>
        <Grid alignItems="center" item xs={12}>
          <div className="imagemBanner"></div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component={"h3"} align="center">
            Sobre a troca: 
          </Typography>

        <Typography variant="h5" component={"h5"} style={{margin: '30px'}} align="center">
        Selecione o produto que você deseja troca, no ato disponibilizamos o cupom correspondente a categoria/produto que você irá trocar, em seguida direcionamos para nossa pagina de produtos, onde você irá escolher o que deseja comprar.  Selecione o produto desejado, vá para a pagina de pagamento onde o cupom será aplicado, a partir do pagamento confirmado, disponibilizamos o código de retirada do produto antigo fornecido pelo nosso parceiro Eco, e em seguida fazemos a entrega do seu produto novo e mais sustentável. 
        </Typography>

        </Grid>

        <Grid item xs={12} alignItems={"center"} >
          <Typography variant="h3" component={"h3"} align="center">
            O que você quer comprar?
          </Typography>
          <Box>
              <img className="iconesProdutos" src="https://ik.imagekit.io/energen/Icones_Visual/maquina-de-lavar.png?updatedAt=1681779910220" alt="" />

              <img className="iconesProdutos" src="https://ik.imagekit.io/energen/Icones_Visual/geladeira.png?updatedAt=1681779909959" alt="" />

              <img className="iconesProdutos" src="https://ik.imagekit.io/energen/Icones_Visual/monitor-de-tv.png?updatedAt=1681779910063" alt="" />

              <img className="iconesProdutos" src="https://ik.imagekit.io/energen/Icones_Visual/microondas.png?updatedAt=1681779909856" alt="" />

              <img className="iconesProdutos" src="https://ik.imagekit.io/energen/Icones_Visual/ar-condicionado.png?updatedAt=1681779910087" alt="" />

              <img className="iconesProdutos" src="https://ik.imagekit.io/energen/Icones_Visual/ventilador.png?updatedAt=1681779909886" alt="" />

          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
