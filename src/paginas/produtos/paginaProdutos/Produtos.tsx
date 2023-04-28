import React from 'react';
import { Grid, Box } from '@mui/material';
import './Produtos.css'
import TabCategorias from '../../categorias/tabCategorias/TabCategorias';
import Carousel from '../../../componentes/estaticos/carousel/Carousel';

function Produtos() {
    return (
      <Grid container xs={12} justifyContent={'center'} >
        <Carousel />
        <Grid xs={12} className='container'>
          <TabCategorias />
        </Grid>
      </Grid>
    );
}
export default Produtos