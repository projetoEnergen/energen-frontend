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
<Tab label="Ar-Condicionado" value="3" />
<Tab label="Ventiladores" value="4" />
<Tab label="outro que eu esqueci" value="5" />
</Tabs>
</AppBar>
<TabPanel value="1" >
<Box display="flex" flexWrap="wrap" justifyContent="center">
      <ListaProduto />
  </Box>
</TabPanel>
<TabPanel value="2">
  
<Typography variant="h5" gutterBottom color="textPrimary" component="h5" ></Typography>
<Typography variant="body1" gutterBottom color="textPrimary"></Typography>
</TabPanel>
</TabContext>
    </>
 
  )
}

export default TabProdutos