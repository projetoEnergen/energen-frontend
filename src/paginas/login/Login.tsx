import React from 'react'
import {Grid, Box, Typography, TextField, Button} from '@mui/material'
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <Grid container direction= "row" justifyContent={'center'} alignItems={'center'} className='fundo'>
      <Grid alignItems={'center'} xs={6} paddingTop={20}>
        <Box paddingX={20}>
            <form>
                <Typography variant="h3" gutterBottom component="h3" align="center" style={{fontWeight:'bold'}} className='textos1'>Entrar</Typography>
                <TextField id={'usuario'} label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth ></TextField>
                <TextField id={'senha'} label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth ></TextField>
                <Box marginTop={2} textAlign={'center'}>
                    <Link to='/home' className='text-decorator-none'>
                        <Button type='submit' variant='contained' fullWidth>
                        </Button>
                    </Link>
                </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                    <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                </Box>
                    <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
            </Box>
         </Box>
      </Grid>
    </Grid>
)
}

export default Login