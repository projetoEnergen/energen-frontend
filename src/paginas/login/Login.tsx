import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../service/Service";
import useLocalStorage from "react-use-localstorage";
import "./Login.css";

function Login() {
  const history = useNavigate();

  const [token, setToken] = useLocalStorage("token");

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("/usuarios/logar", userLogin, setToken);
      alert("Usuario logado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Usuário ou senha inválidos");
    }
  }

  useEffect(() => {
    if (token !== "") {
      history("/home");
    }
  }, [token]);

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      className="fundo-login"
    >
      <Grid alignItems={"center"} xs={6}>
        <Box paddingX={20}>
          <form className="form-login" onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="texto-login"
            >
              Entrar
            </Typography>
            <TextField
              variant="outlined"
              name="usuario"
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Usuário"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              name="senha"
              value={userLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              label="Senha"
              margin="normal"
              fullWidth
            ></TextField>
            <Box marginTop={2} textAlign={"center"}>
              <Button className="button-login texto-login" type="submit" variant="contained" fullWidth>
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography marginTop={2} align="center" variant="body1">
                Ainda não tem uma conta?{" "}
                <Link to="/usuarios/cadastrar" className="texto-login">
                  Cadastre-se aqui
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem-login"></Grid>
    </Grid>
  );
}

export default Login;
