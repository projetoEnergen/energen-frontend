import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './ListaCategorias.css'
import { Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import { Categoria } from '../../../models/Categoria';
import { getAll } from '../../../service/Service';
import Produtos from '../../produtos/paginaProdutos/Produtos';
import { Produto } from '../../../models/Produto';

function ListaCategoria() {
  
  const [categorias, setCategorias]= useState <Categoria[]>([])
  
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
  <div>
    
  </div>
 );
}
export default ListaCategoria;