import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Typography} from "@material-ui/core";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid container item xs={12} style={{backgroundColor:'#1FE291', height:'15vh'}}>
        <Box>
            <Grid style={{textAlign:'center'}} item xs={2}>
              <img className="logo" src="https://ik.imagekit.io/energen/IDENTIDADE_VISUAL/LogoFooter.png?updatedAt=1681508432602" alt="logo texto"/>
                <Grid>
                  <EmailSharpIcon style={{color:'white'}}></EmailSharpIcon>
                  <TwitterIcon style={{color:'white'}}></TwitterIcon>
                  <LinkedInIcon style={{color:'white'}}></LinkedInIcon>
                  <InstagramIcon style={{color:'white'}}></InstagramIcon>
                </Grid>
            </Grid>
            <Grid style={{textAlign:'center'}} item xs={8}>
              
            </Grid>
            <Grid style={{textAlign:'center'}} item xs={2}>
             
            </Grid>
         </Box>
     </Grid>
          <Grid  style={{textAlign:'center', color:'white', backgroundColor:'#06B566', height:'4vh', padding:'10px'}}>
            © 2023, EnerGen.com, LTDA.
          </Grid>
    </>
  );
}

export default Footer;
