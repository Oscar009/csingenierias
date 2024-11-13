'use client';
import { CustomDivider } from '@/app/components/CustomDivider/CustomDivider';
import { CustomSubTitle } from '@/app/components/Titles/CustomSubTitle/CustomSubTitle';
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle';
import { Grid2, Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
  return (
    <Grid2 container spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <CustomTitle label={"Empresa"} />
          <Typography fontFamily={'unset'}>
            {"CS Y ASOCIADO  INGENIERIAS S.A. DE C.V.  es una empresa basada en la experiencia y capacidad de nuestros asociados así como del personal de la misma, proveedora de servicio de obra civiles en general, creada en una perspectiva social de fomento de empleo, tanto en proyectos propios como en privados, gubernamentales e institucionales gozando de la satisfacción de nuestros clientes, con el más amplio carácter de servicio y entrega."}
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'start' }}>
          <CustomSubTitle label={"Misíon"} />
          <Typography fontFamily={'unset'}>
            {"Proveer y mantener con satisfacción la confianza en nuestros clientes, proporcionarles los servicios en la rama de edificación de obras civiles, con al mayor calidad tanto en materiales y mano de obra civiles; en el mejor tiempo propuesto para que nuestro cliente sea nuestra mejor recomendación; así como conservar una espacio laboral favorable, capaz de incentivar a nuestro personal en su desarrollo profesional."}
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'start' }}>
          <CustomSubTitle label={"Visión"} />
          <Typography fontFamily={'unset'}>
            {"Alcanzar el reconocimiento de nuestros clientes y colegas como una empresa innovadora y responsable; así com un equipo sólido, eficiente en el ramo de la construcción y ser siempre una buena opción de compromiso para nuestros clientes, con la seguridad de que se cumplirá con las tareas y responsabilidades adquiridas."}
          </Typography>
        </Grid2>

      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <CustomDivider />
        </Grid2>
      </Grid2>
      
      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <CustomTitle label={"Equipo"} />
            <Typography fontFamily={'unset'}>

            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default AboutPage;