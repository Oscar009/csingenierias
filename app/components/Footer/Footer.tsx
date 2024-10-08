import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from 'next/link';
import theme from '@/app/theme/theme';

export const FooterComponent = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.main, color: "white", padding: 2.5 }}>
      <Grid2 container spacing={2} sx={{ width: "90%", margin: "0 auto" }}>
        {/* Primera columna: Información de contacto */}
        <Grid2 container size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>Contacto</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <EmailIcon sx={{ marginRight: 1 }} /> */}
              <Typography>info@tuempresa.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <PhoneIcon sx={{ marginRight: 1 }} /> */}
              <Typography>33 3118 9341</Typography>
            </Box>
          </Box>
        </Grid2>

        {/* Segunda columna: Redes sociales */}
        <Grid2 container size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>¡Síguenos en nuestras redes sociales!</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: 1,
              }}
              href="https://www.facebook.com/CsyAsociados"
              passHref
              target='_blank'
            >
              <FacebookIcon fontSize='large' />
              <Typography>{"Cs y Asociados Ingenierias"}</Typography>
            </Link>
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: 1,
              }}
              href="https://www.instagram.com/cs_asc_ixtlahuacan"
              passHref
              target='_blank'
            >
              <InstagramIcon fontSize='large' />
              <Typography>{"@cs_asc_ixtlahuacan"}</Typography>
            </Link>
          </Box>
        </Grid2>
      </Grid2>

      {/* Footer copyright */}
      <Box width={"100%"} marginTop={5}>
        <Typography fontSize={15} align="center">
          Todos los derechos reservados <CopyrightIcon fontSize='small' /> 2024
        </Typography>
      </Box>
    </Box>
  );
}
