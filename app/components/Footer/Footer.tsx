import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '@/app/theme/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

export const FooterComponent = () => {
  return (
    <Box sx={{
      height: 250,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <Box sx={{ width: "15%" }}></Box>
      <Box sx={{ width: "70%", display: "flex", flexDirection: "column", alignItems: "center", padding: 2.5 }}>
        <Box width={"100%"}>
          <Typography align='center'>!Síguenos en nuestras redes sociales!</Typography>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around", padding: 2.5 }}>
          <FacebookIcon fontSize='large' /> 
          <InstagramIcon fontSize='large' />
          <LinkedInIcon fontSize='large' />
        </Box>
        <Box width={"100%"} marginTop={5}>
          <Typography fontSize={15} align="center">Todos los derechos reservados <CopyrightIcon fontSize='small'/> 2024</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "15%" }}></Box>
    </Box>
  )
}
