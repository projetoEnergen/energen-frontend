import { Box, Card, CardContent, Typography, CardActions, Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Produto } from "../../../models/Produto";
import { getById, deleteId } from "../../../service/Service";
import "./DeletarProdutos.css"

function deletarProdutos() {

  const history = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [token, setToken] = useLocalStorage("token");

  const [produtos, setProdutos] = useState<Produto>();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      history("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    getById(`/produtos/${id}`, setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    history("/produtos");
    deleteId(`/produtos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    alert("Produto deletado com sucesso");
  }

  function nao() {
    history("/produtos");
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Produto:
              </Typography>
              <Typography color="textSecondary">{produtos?.nome}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
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

export default deletarProdutos;
