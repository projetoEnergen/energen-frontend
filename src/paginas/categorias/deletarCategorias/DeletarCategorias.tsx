import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarCategorias.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getById, deleteId } from '../../../service/Service';
import useLocalStorage from 'react-use-localstorage';
import { Categoria } from '../../../models/Categoria';

function DeletarCategoria() {

  const history = useNavigate();

  const { id } = useParams<{id: string}>();

  const [token, setToken]= useLocalStorage('token');
  
  const [categoria, setCategoria] = useState<Categoria>();

  useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history("/login")
  
      }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      getById(`/categorias/${id}`, setCategoria, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
        history('/categorias')
          deleteId(`/categorias/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          alert('Categoria deletada com sucesso');
        }
      
        function nao() {
          history('/categorias')
        }
     
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Categoria:
              </Typography>
              <Typography color="textSecondary">
                {categoria?.nome}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default DeletarCategoria;