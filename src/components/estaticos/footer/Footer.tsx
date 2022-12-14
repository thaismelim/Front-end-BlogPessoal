import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid} from '@material-ui/core';
import './Footer.css';
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";


function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token !== "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>

                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant ="h6" align="center" gutterBottom className='texto1'>Siga-nos nas redes sociais</Typography>
                </Box>

                <Box className='social'>
                    <a href="https://github.com/thaismelim" target="_blank">
                        <GitHubIcon className='github' />
                    </a>
                    <a href="https://www.instagram.com/thacr.melim/"target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/thais-melim/"target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Box>
            </Box>
            <Box className='box1'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='texto1'>© 2022 Copyright</Typography>
                    
                </Box>
               </Box>
        </Grid>
    </Grid>
    }
    

    return(
        <>
           {footerComponent}
        </>
    )
}

export default Footer;
