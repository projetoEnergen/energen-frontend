import { TabContext, TabPanel } from "@material-ui/lab";
import { AppBar, Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TabCategorias.css";
import useLocalStorage from "react-use-localstorage";
import { getAll, post } from '../../../service/Service';
import { Categoria } from "../../../models/Categoria";
import ListaProdutos from "../../produtos/listaProdutos/ListaProdutos";
import { Link } from "react-router-dom";

function TabCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [token, setToken] = useLocalStorage("token");

  async function getAllCategorias() {
    await getAll("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllCategorias();
  }, [categorias.length]);

  const [value, setValue] = useState("1");

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className="barra">
          <Tabs centered indicatorColor="secondary" onChange={handleChange} >
            {categorias.map((categoria) => (
              <Link style={{padding:'0 1%', color:'white', fontWeight:'bold'}} to={`/categorias/${categoria.id}`}>
                <Tab  label={categoria.nome} value={categoria.id} />
              </Link>
            ))}
          </Tabs>
        </AppBar>
       
      </TabContext>
    </>
  );
}

export default TabCategorias;
