import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Typography} from "@material-ui/core";
import {Grid} from "@mui/material";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Grid className="left" spacing={0} container item xs={12} style={{backgroundColor:'#1FE291', height:'15vh'}}  >
            <Grid style={{backgroundColor:'#1FE291', padding:'3vh'}} item xs={2}><img className="logoFooter" src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/LogoFooter.png?updatedAt=1681508432602" alt="logo texto"/ >
            <Grid>
                          <EmailSharpIcon style={{color:'white'}}></EmailSharpIcon>
                          <TwitterIcon style={{color:'white'}}></TwitterIcon>
                          <LinkedInIcon style={{color:'white'}}></LinkedInIcon>
                          <InstagramIcon style={{color:'white'}}></InstagramIcon>
            </Grid>
            </Grid>

            <Grid item xs={8} display={'flex'} className="center" >
            
            <Grid item xs={4} color={'white'}>
              <Link to={'/cadastroProdutos'}><Typography className="link-footer" variant="subtitle2">Cadastrar Produto</Typography></Link>
              <Link to={'/cadastroCategorias'}><Typography className="link-footer" variant="subtitle2">Cadastar Categoria</Typography></Link>
            </Grid>

            <Grid item xs={4}color={'white'}>
            <Typography variant="subtitle2">Perguntas Frequentes</Typography>
            <Typography variant="subtitle2">Desenvolvedores</Typography>
            <Typography variant="subtitle2">Suporte</Typography>

            </Grid>
            
            </Grid>
            <Grid style={{backgroundColor:'#1FE291', color:'white' }} item xs={2}>
            <Typography  variant="h6">Formas de Pagamento</Typography>

            <Grid display={'flex'} >
                          <img className="logoBoleto" src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/boleto.png?updatedAt=1681505619680" alt="logo texto"/ >
                          <img className="logoPix" src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/pix.png?updatedAt=1681505619581" alt="logo texto"/ >
                          <img className="logoCard" src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/cart%C3%A3o.png?updatedAt=1681505619882" alt="logo texto"/ >
            </Grid>
            </Grid>
        <Grid  item xs={12} className="CopyRight" >
            © 2023, EnerGen.com, LTDA.
        </Grid> 
      </Grid>
    </>
  );
}

export default Footer;
