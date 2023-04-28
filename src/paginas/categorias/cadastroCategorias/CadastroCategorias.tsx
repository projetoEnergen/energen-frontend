import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@material-ui/core";
import "./CadastroCategorias.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Categoria } from "../../../models/Categoria";
import { getById, put, post } from "../../../service/Service";

function CadastroCategorias() {
  const history = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [token, setToken] = useLocalStorage("token");

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  useEffect(() => {
    if (token == "") {
      alert("Você precisa efetuar o Login");
      history("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    getById(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("categoria " + JSON.stringify(categoria));

    if (id !== undefined) {
      console.log(categoria);
      put(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria atualizada com sucesso");
    } else {
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria cadastrada com sucesso");
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
      className="fundo-cadastro-categoria"
      sm={12}
    >
      <Grid item xs={6} className="imagem-cadastro-categoria"></Grid>
      <Grid item xs={6} alignItems={"center"}>
        <Box paddingX={10}>
          <form className="form-cadastro-categoria" onSubmit={onSubmit}>
            <Typography
              variant="h3"
              color="textSecondary"
              component="h1"
              align="center"
              className="texto-cadastro-categoria"
            >
              Cadastro de Categoria
            </Typography>
            <TextField
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatedCategoria(e)
              }
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign={"center"}>
              <Button
                className="button-cadastro-categoria texto-cadastro-categoria"
                type="submit"
                variant="contained"
              >
                Finalizar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroCategorias;
