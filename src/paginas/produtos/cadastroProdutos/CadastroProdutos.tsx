import { Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Usuario } from '../../../models/Usuario';
import { getAll, getById, put, post } from '../../../service/Service';
import useLocalStorage from 'react-use-localstorage';
import { Categoria } from '../../../models/Categoria';
import { Produto } from '../../../models/Produto';
import "./CadastroProdutos.css"

function Cadastroprodutos() {
  
  const history = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  
  const [token, setToken] = useLocalStorage("token");

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
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
    foto: ""
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
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await getAll("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await getById(`produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
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
      alert("Produto atualizado com sucesso");
    } else {
      post('/produtos', produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      alert("Produto cadastrado com sucesso");
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
      style={{padding:'2vw'}}
      sm={12}
    >
        <form onSubmit={onSubmit}>
          <Typography variant="h3" component="h1" align="center">
            Formulário de cadastro postagem
          </Typography>
          <TextField
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="marca"
            label="Marca"
            name="marca"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="preco"
            label="Preço em R$"
            variant="outlined"
            name="preco"
            margin="normal"
            fullWidth
          />
           <TextField
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
            id="foto"
            label="Foto"
            variant="outlined"
            name="foto"
            margin="normal"
            fullWidth
          />
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) =>
                getById(`/temas/${e.target.value}`, setCategoria, {
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
              className="button-finalizar"
              type="submit"
              variant="contained"
              color="primary"
              disabled= {categoria.id === 0}
            >
              {categoria.id === 0 ? 'Selecione uma categoria' : 'Cadastrar'}
            </Button>
          </FormControl>
        </form>
    </Grid>
  );
}

export default Cadastroprodutos