import React, { useEffect, useState } from 'react'
import './ListaCategorias.css'
import { Categoria } from '../../../models/Categoria';
import { getAll } from '../../../service/Service';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActions, Box, Button } from '@mui/material';
import TabCategorias from '../tabCategorias/TabCategorias';
import Carousel from '../../../componentes/estaticos/carousel/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Action';
import { toast } from 'react-toastify';

function ListaCategoria() {
  
  const [categorias, setCategorias]= useState <Categoria>()
  
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);
  
  const history =useNavigate();

  const dispatch = useDispatch();

  const {id} = useParams<{id: string}>()

  async function getCategoriaById(){
      await getAll(`/categorias/${id}`, setCategorias, {
        headers:{
          Authorization: token
        }
      })
  }

  useEffect(()=>{
    getCategoriaById()
  },[categorias])


  useEffect(()=>{
    if(token === ''){
      dispatch(addToken(''));
      toast.info('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      history("/login") 
  }
}, [token]);

return (
  <>
  <Carousel />
  <TabCategorias />
  <Grid className='caixa-categoria' xs={12}>
  {categorias?.produto?.map(produto => (
      <Grid xs={4}>
      <Card variant="outlined" className='card-categoria'>
          <img className='imagem-categoria' src={produto.foto} alt="" />
        <CardContent>
          <Typography variant="h5" component="h2">
            {produto.nome}
          </Typography>
          <Typography variant="body2" component="p">
            {produto.marca}
          </Typography>
          <Typography variant="body2" component="p">
            {produto.descricao}
          </Typography>
          <Typography variant="body2" component="p">
            {produto.preco}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="center" mb={1.5}>

            <Link to={`/atualizarProdutos/${produto.id}`}>
              <Box mx={1}>
                <Button variant="contained" size='small' color="primary" >
                  atualizar
                </Button>
              </Box>
            </Link> 
            <Link to={`/deletarProdutos/${produto.id}`}>
              <Box mx={1}>
                <Button variant="contained" size='small' color="secondary">
                  deletar
                </Button>
              </Box>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Grid>
    ))}  
</Grid>
</>
);
}

export default ListaCategoria;