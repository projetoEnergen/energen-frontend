import { TabContext, TabPanel } from "@material-ui/lab";
import { AppBar, Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TabCategorias.css";
import useLocalStorage from "react-use-localstorage";
import { getAll } from "../../../service/Service";
import { Categoria } from "../../../models/Categoria";
import ListaProdutos from "../../produtos/listaProdutos/ListaProdutos";

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
                <Tab style={{padding:'1%'}} label={categoria.nome} value={categoria.id} />
            ))}
          </Tabs>
        </AppBar>
        <TabPanel value="1">
         <ListaProdutos />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabCategorias;
