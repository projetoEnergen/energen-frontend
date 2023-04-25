import { Grid } from '@mui/material';
import React from 'react';
import TabProdutos from '../tabProdutos/TabProdutos';
import './Produtos.css'

function Produtos() {
    return (
      <Grid container xs={12} justifyContent={'center'}>
        <Grid  textAlign={'center'} margin={'2vh'}>
          <img src="https://ik.imagekit.io/energen/Home/60_.png?updatedAt=1681932495224" alt=""  height= {'400vh'} background-size={'cover'}/>
        </Grid>
        <TabProdutos />
      </Grid>
    );
}
export default Produtos


