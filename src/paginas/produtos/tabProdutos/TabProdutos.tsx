import { TabContext, TabPanel } from '@material-ui/lab'
import { AppBar, Tabs, Tab, Box, Typography, Grid } from '@mui/material';
import React, { useState } from 'react'
import { Produto } from '../../../models/Produto';
import './TabProdutos.css'
import ListaProduto from '../listaProdutos/ListaProduto';

function TabProdutos() {
  const [value, setValue] = useState('1')
function handleChange(event: React.ChangeEvent<{}>, newValue: string){
setValue(newValue);
}
  return (
    <>
      <TabContext value={value}>


<AppBar position="static" className='barra'>
<Tabs centered indicatorColor="secondary" onChange={handleChange}>
<Tab label= "Refrigeradores" value="1"/>
<Tab label="Televisores" value="2" />
<Tab label="Lavadoras de Roupas" value="3" />
<Tab label="Ventiladores" value="4" />
<Tab label="Ar-Condicionados" value="5" />
<Tab label="Micro-ondas" value="6" />
</Tabs>
</AppBar>
<TabPanel value="1" >
<Box display="flex" flexWrap="wrap" justifyContent="center">
      <ListaProduto />
  </Box>
</TabPanel>
</TabContext>
    </>
 
  )
}

export default TabProdutos