import { TabContext, TabPanel } from "@material-ui/lab";
import { AppBar, Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./TabCategorias.css";
import useLocalStorage from "react-use-localstorage";
import { getAll } from "../../../service/Service";
import { Categoria } from "../../../models/Categoria";
import ListaCategorias from "../listaCategorias/ListaCategorias";

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
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            {categorias.map((categoria) => (
                <Tab label={categoria.nome} value={categoria.nome} />
            ))}
          </Tabs>
        </AppBar>
        <TabPanel value="1">
        <ListaCategorias />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default TabCategorias;
