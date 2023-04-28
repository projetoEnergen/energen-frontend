import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Usuario } from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  const history = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    senha: "",
    cpf: "",
    telefone: "",
    usuario: "",
    foto: "",
  });

  const [usuarioResult, setUsuarioResult] = useState<Usuario>({
    id: 0,
    nome: "",
    senha: "",
    cpf: "",
    telefone: "",
    usuario: "",
    foto: "",
  });

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === usuario.senha) {
      try {
        await cadastrarUsuario(
          "/usuarios/cadastrar",
          usuario,
          setUsuarioResult
        );
        alert("Usuário cadastrado com sucesso");
      } catch (error) {
        alert("Por favor, verifique os campos");
      }
    } else {
      alert("As senhas não coincidem");
      setConfirmarSenha("");
      setUsuario({
        ...usuario,
        senha: "",
      });
    }
  }

  useEffect(() => {
    if (usuarioResult.id !== 0) {
      history("/login");
    }
  }, [usuarioResult]);

  function back() {
    history("/login");
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      className="fundo-cadastro"
    >
      <Grid item xs={6} className="imagem-cadastro"></Grid>
      <Grid item xs={6} alignItems={"center"}>
        <Box paddingX={10}>
          <form className="form-cadastro" onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="texto-cadastro"
            >
              Cadastrar
            </Typography>
            <TextField
              variant="outlined"
              name="nome"
              value={usuario.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Nome Completo"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              variant="outlined"
              name="usuario"
              value={usuario.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Usuário (endereço de e-mail)"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              variant="outlined"
              name="cpf"
              value={usuario.cpf}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="CPF"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              variant="outlined"
              name="telefone"
              value={usuario.telefone}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Telefone"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              variant="outlined"
              name="foto"
              value={usuario.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Foto (URL)"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              name="senha"
              value={usuario.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              label="Senha"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              name="confirmarSenha"
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              variant="outlined"
              label="Confirmar Senha"
              margin="normal"
              fullWidth
            ></TextField>
            <Box marginTop={2} textAlign={"center"}>
              <Button
                onClick={back}
                variant="contained"
                className="button-cadastro texto-cadastro"
              >
                Cancelar
              </Button>
              <Button type="submit" className="button-cadastro" variant="contained">
                Cadastar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
