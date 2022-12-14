import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Home.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box } from "@mui/material";

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
          navigate("/login")
  
      }
  }, [token])
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>compartilhe conosco suas experiências!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem/>
            </Box>
            <Link to= "/posts" className="text-decorator-none">
            <Button variant="outlined" className='botao'>Ver Postagens</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/06/Viagem-Mundo-PNG.png" alt="" width="650px" height="440px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' alignItems='center'>
        <TabPostagem />
      </Grid>
        </>
    );
}

export default Home;

