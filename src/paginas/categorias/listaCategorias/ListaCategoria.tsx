import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ListaTemas.css'
import { Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import { Categoria } from '../../../models/Categoria';
import { getAll } from '../../../service/Service';

function ListaCategoria() {
  
  const [categorias, setCategorias]= useState <Categoria[]>([])
  
  const [token, setToken]= useLocalStorage('token');
  
  
  const history =useNavigate();

  async function getAllCategorias(){
      await getAll('/produtos', setCategorias, {
        headers:{
          Authorization: token
        }
      })
  }

  useEffect(()=>{
    getAllCategorias()
  },[categorias.length])


  useEffect(()=>{
    if(token === ''){
      alert('Você precisa estar logado')
    history("/login") 
  }


  }, [token])

  
return (
  <>

  {
    categorias.map(categoria=>(
    <Box m={2} >
    <Card variant="outlined">
    <CardContent>
    <Typography color="textSecondary" gutterBottom>
      Categorias
    </Typography>
    <Typography variant="h5" component="h2">
      {categoria.nome}
    </Typography>
    </CardContent>
    <CardActions>
    <Box display="flex" justifyContent="center" mb={1.5} >
    <Link to={''}>
    <Box mx={1}>
    <Button variant="contained" color='primary' size='small'>
      atualizar
    </Button>
    </Box>
    </Link>
    <Link to={''}>
    <Box mx={1}>
    <Button variant="contained" size='small' >
    deletar
    </Button>
    </Box>
    </Link>
    </Box>
    </CardActions>
    </Card>
    </Box>
))}
</>
);

}
export default ListaCategoria;