import React from 'react';
import { Grid } from '@mui/material';
import './Produtos.css'
import TabCategorias from '../../categorias/tabCategorias/TabCategorias';

function Produtos() {
    return (
      <Grid container xs={12} justifyContent={'center'} >
        <Grid  textAlign={'center'} margin={'2vh'}>
          <img src="https://ik.imagekit.io/energen/Home/60_.png?updatedAt=1681932495224" alt=""  height= {'400vh'} background-size={'cover'}/>
        </Grid>
        <Grid xs={12} className='container'>
          <TabCategorias />
        </Grid>
      </Grid>
    );
}
export default Produtos