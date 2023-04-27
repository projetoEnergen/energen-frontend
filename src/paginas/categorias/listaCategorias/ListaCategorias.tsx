import React, { useEffect, useState } from 'react'
import './ListaCategorias.css'
import useLocalStorage from 'react-use-localstorage';
import { Categoria } from '../../../models/Categoria';
import { getAll } from '../../../service/Service';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActions, Box, Button } from '@mui/material';

function ListaCategoria() {
  
  const [categorias, setCategorias]= useState <Categoria>()
  
  const [token, setToken]= useLocalStorage('token');
  
  const history =useNavigate();

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
      alert('Você precisa estar logado')
    history("/login") 
  }
}, [token]);

return (
  <Grid  xs={12}>
  {categorias.map(categoria => (
    <Grid xs={4}>
    <Card variant="outlined">
      <CardContent>
        <h2>Categorias</h2>
        <Typography variant="h5" component="h2">
          {categoria.nome}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" mb={1.5}>

          <Link to={`/atualizarCategorias/${categoria.id}`} className="text-decorator-none" >
            <Box mx={1}>
              <Button variant="contained" className="marginLeft" size='small' color="primary" >
                atualizar
              </Button>
            </Box>
          </Link> 
          <Link to={`/deletarCategorias/${categoria.id}`} className="text-decorator-none">
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
 );
}

export default ListaCategoria;