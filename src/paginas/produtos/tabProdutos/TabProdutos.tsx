import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabProdutos.css'
import Produtos from '../listaProdutos/Produtos';


function TabProdutos() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label= 'geladeira' value="1"/>
            <Tab label='microondas' value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Produtos />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom component="h5" align="center">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="center">
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProdutos;