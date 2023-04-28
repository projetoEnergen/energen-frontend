import { Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button, Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Usuario } from '../../../models/Usuario';
import { getAll, getById, put, post } from '../../../service/Service';
import { Categoria } from '../../../models/Categoria';
import { Produto } from '../../../models/Produto';
import "./CadastroProdutos.css"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Action';
import { toast } from 'react-toastify';

function Cadastroprodutos() {
  
  const history = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);

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
      history("/login");
    }
  }, [token]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    marca: "",
    descricao: "",
    preco: 0,
    qtd_estoque: 0,
    foto: "",
  });

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    senha: "",
    cpf: "",
    telefone: "",
    usuario: "",
    foto: "",
  });

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria
    });
  }, [categoria]);

  useEffect(() => {
    getCategorias();
    if (id !== undefined) {
      findByIdProduto(id);
    }
  }, [id]);

  async function getCategorias() {
    await getAll("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdProduto(id: string) {
    await getById(`produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put('/produtos', produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Produto atualizado com sucesso!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      post('/produtos', produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Produto cadastrado com sucesso!', {
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
    back();
  }

  function back() {
    history("/produtos");
  }

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      className='fundo-cadastro-produto'
      sm={12}
    >
      <Grid item xs={6} className="imagem-cadastro-produto"></Grid>
      <Grid item xs={6} alignItems={"center"}>
      <Box paddingX={10}>
        <form className='form-cadastro-produto' onSubmit={onSubmit}>
          <Typography variant="h3" className='texto-cadastro-produto' component="h1" align="center">
          {produto.id === 0 ? 'Cadastrar Produto' : 'Atualizar Produto'}
          </Typography>
          <TextField
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
            id="nome"
            label="Nome"
            variant="outlined"
            name="nome"
            margin="normal"
            fullWidth
            style={{marginTop:'2vw'}}
          />
          <TextField
            value={produto.marca}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
            id="marca"
            label="Marca"
            name="marca"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
            id="descricao"
            label="Descrição"
            name="descricao"
            variant="outlined"
            margin="normal"
            fullWidth
            minRows={4}
            multiline
          />
           <TextField
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
            id="preco"
            label="Preço em R$"
            variant="outlined"
            name="preco"
            margin="normal"
            fullWidth
          />
           <TextField
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
            id="foto"
            label="Foto"
            variant="outlined"
            name="foto"
            margin="normal"
            fullWidth
          />
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
            <Select
              className='select-categoria'
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) =>
                getById(`/categorias/${e.target.value}`, setCategoria, {
                  headers: {
                    Authorization: token,
                  },
                })
              }
            >
              {categorias.map((categoria) => (
                <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>
              ))}
            </Select>
            <Button
              className='button-cadastro-produto texto-cadastro-produto'
              type="submit"
              variant="contained"
              color="primary"
              disabled= {categoria.id === 0}
            >
              {categoria.id === 0 ? 'Selecione uma categoria' : 'Atualizar'}
            </Button>
          </FormControl>
        </form>
       </Box>
      </Grid>
    </Grid>
  );
}

export default Cadastroprodutos