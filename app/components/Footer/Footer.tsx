import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import theme from '@/app/theme/theme';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const FooterComponent = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.main, color: "white", padding: 2.5 }}>
      <Grid2 container spacing={2} sx={{ width: "90%", margin: "0 auto" }}>
        {/* Primera columna: Información de contacto */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom>Contacto</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Correo electrónico */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon />
              <Typography sx={{ marginInline: 1 }}>csingenierias.ventas00@gmail.com</Typography>
            </Box>
            {/* Teléfono */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocalPhoneIcon />
              <Typography sx={{ marginInline: 1 }}>33 3118 9341</Typography>
            </Box>
            {/* Localización */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon />
              <Typography sx={{ marginInline: 1 }}>Ignacio Calderón No. 1442, Paseos del Sol, Zapopan, Jal.</Typography>
            </Box>
          </Box>
        </Grid2>


        {/* Segunda columna: Redes sociales */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" gutterBottom>
              ¡Síguenos en nuestras redes sociales!
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                }}
                href="https://www.instagram.com/cs_asc_ixtlahuacan"
                passHref
                target='_blank'
              >
                <InstagramIcon fontSize='large' />
                <Typography>{"@cs_asc_ixtlahuacan"}</Typography>
              </Link>
            </Box>
          </Box>
        </Grid2>

      </Grid2>

      {/* Footer copyright */}
      <Box width={"100%"} marginTop={5}>
        <Typography fontSize={15} align="center">
          Todos los derechos reservados © 2024
        </Typography>
      </Box>
    </Box>
  );
}
