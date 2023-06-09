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
import { Categoria } from "../../../models/Categoria";
import { getById, put, post } from "../../../service/Service";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Action";
import { toast } from "react-toastify";

function CadastroCategorias() {
  
  const history = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
  });

  useEffect(() => {
    if (token == "") {
      dispatch(addToken(''));
      toast.info('Você precisa efetuar o Login!', {
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
      toast.success('Categoria atualizada com sucesso!', {
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
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Categoria cadastrada com sucesso!', {
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
