import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function ListaProduto() {
  return (
    <>
{
  

<Box m={2} >
<Card variant="outlined">
<CardContent>
<Typography color="textSecondary" gutterBottom>
Postagem
</Typography>
<Typography variant="h5" component="h2">
titulo
</Typography>
<Typography variant="body2" component="p">

texto

</Typography>
<Typography variant="body2" component="p">
 tema

</Typography>
</CardContent>
<CardActions>
<Box display="flex" justifyContent="center" mb={1.5}>
<Link to='' className="text-decorator-none" >
<Box mx={1}>
<Button variant="contained" className="marginLeft" size='small' >
atualizar
</Button>
</Box>
</Link>
<Link to=''className="text-decorator-none">
<Box mx={1}>
<Button variant="contained" size='small' className='botãoVermelho' color="secondary">
deletar
</Button>
</Box>
</Link>
</Box>

</CardActions>
</Card>
</Box>
}

</>)
}

export default ListaProduto