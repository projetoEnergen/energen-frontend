import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material'
import './DeletarCategorias.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getById, deleteId } from '../../../service/Service';
import { Categoria } from '../../../models/Categoria';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Action';
import { toast } from 'react-toastify';

function DeletarCategoria() {

  const history = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams<{id: string}>();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);
  
  const [categoria, setCategoria] = useState<Categoria>();

  useEffect(() => {
      if (token == "") {
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
          toast.success('Categoria deletada com sucesso!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
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