import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import {Typography} from "@material-ui/core";
import {Grid} from "@mui/material";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Grid container item xs={12} style={{backgroundColor:'#1FE291'}}  >
            <Grid style={{backgroundColor:'#1FE291', padding:'3vh'}} item xs={2}><img className="logoFooter" src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/LogoFooter.png?updatedAt=1681508432602" alt="logo texto"/ >
            <Grid>
                          <Link to={'mailto:projetoenergen@gmail.com'}> 
                              <EmailSharpIcon className="link-footer"></EmailSharpIcon>
                          </Link>
                          <Link to={'https://twitter.com/EnergenPro?t=1XFGbu4OzybBqgb5ckXoug&s=08'}>
                              <TwitterIcon className="link-footer"></TwitterIcon>
                          </Link>
                          <Link to={'https://www.instagram.com/projeto_energen/'}>
                              <InstagramIcon className="link-footer"></InstagramIcon>
                          </Link>         
            </Grid>
            </Grid>

            <Grid item xs={8} display={'flex'} className="center" >
            
            <Grid item xs={4} color={'white'}>
              <Link to={'/cadastroProdutos'}><Typography className="link-footer" variant="subtitle2">Cadastrar Produto</Typography></Link>
              <Link to={'/cadastroCategorias'}><Typography className="link-footer" variant="subtitle2">Cadastar Categoria</Typography></Link>
            </Grid>

            <Grid item xs={4}color={'white'}>
            <Link to={'/sobre'} className="link-footer">
                <Typography variant="subtitle2">Sobre</Typography>  
            </Link>
            <Link to={'mailto:projetoenergen@gmail.com'} className="link-footer">
              <Typography variant="subtitle2">Suporte</Typography>
            </Link>
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
