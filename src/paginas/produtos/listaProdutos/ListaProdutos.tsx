import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAll, getById } from "../../../service/Service";
import { Produto } from "../../../models/Produto";
import "./ListaProdutos.css";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/Action";
import Price from "./../../../componentes/estaticos/precoProdutos/Price";
import SearchIcon from '@mui/icons-material/Search';

function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const[search, setSearch] = useState('');

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  const { id } = useParams<{ id: string }>();

  const history = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token === "") {
      dispatch(addToken(""));
      history("/login");
    }
  }, []);

  async function getProduto() {
    await getAll("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProduto();
  }, [produtos]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filterProdutos = produtos.filter((produto) =>
  `${produto.nome} ${produto.marca} ${produto.descricao} ${produto.preco}`
  .toLowerCase()
  .includes(search.toLowerCase()));

  return (
    <Grid textAlign={'center'} style={{backgroundColor:'#99ffb941'}}>
      <Grid xs={12} className="input-pesquisa">
        <input type="search" placeholder="Busca na EnerGen"  value={search} onChange={handleSearchChange} />
        <SearchIcon className="search" />
      </Grid>
      <Grid className="caixa-produto" xs={12}>
      {filterProdutos.map((produto) => (
          <Grid xs={4}>
            <Card variant="outlined" className="card-produto">
              <img className="imagem-produto" src={produto.foto} alt="" />
              <CardContent>
                <Typography variant="h5" component="h5">
                  {produto.nome}
                </Typography>
                <Typography variant="h6" component="h6">
                  {produto.marca}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className="padding-listaProdutos"
                >
                  {produto.descricao}
                </Typography>
                <Typography variant="h6" component="h6">
                  R$ <Price value={produto.preco} />
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center">
                  <Link to={`/atualizarProdutos/${produto.id}`}>
                    <Box>
                      <Button variant="contained" size="small" color="primary">
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProdutos/${produto.id}`}>
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
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
    </Grid>
  );
}

export default ListaProdutos;
