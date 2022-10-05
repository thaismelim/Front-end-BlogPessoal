import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() { 
  return (
    <> 
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem-vinde!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo2'>Fique à vontade para expressar seus pensamentos e opiniões</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" className='botao'>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
        <img src="https://i1.wp.com/seguroviagempro.com.br/wp-content/uploads/2019/02/seguro-viagem-volta-ao-mundo-1.jpg?fit=1360%2C907&ssl=1" alt="Imagem Tela Inicial" className='img'width="500px" height="500px"/>
        </Grid>
        <Grid xs={12} className='postagens'>
        </Grid>
      </Grid>
    </>
  )
}

export default Home;