import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getAll, getById } from '../../../service/Service';
import { Produto } from '../../../models/Produto'
import './ListaProdutos.css'
import { TokenState } from '../../../store/tokens/TokensReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/Action';


function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([])
  
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);

  const { id } = useParams<{ id: string }>();

  const history = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if(token === '') {
      dispatch(addToken(''));
      history('/login')
    }
  }, [])

  async function getProduto(){
    await getAll('/produtos', setProdutos, {
      headers:{
        Authorization: token
      }
    })
  }

  useEffect(()=>{
  getProduto()
  },[produtos])

  return ( 
  <Grid className='caixa' xs={12}>
    {produtos.map(produto => (
      <Grid xs={4}>
      <Card variant="outlined" className='card-produto'>
          <img className='imagem-produto' src={produto.foto} alt="" />
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

            <Link to={`/atualizarProdutos/${produto.id}`} className="text-decorator-none" >
              <Box mx={1}>
                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                  atualizar
                </Button>
              </Box>
            </Link> 
            <Link to={`/deletarProdutos/${produto.id}`} className="text-decorator-none">
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
  )
}

export default ListaProdutos;