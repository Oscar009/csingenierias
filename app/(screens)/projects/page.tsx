'use client';

import { Grid2, Typography } from '@mui/material';
import React from 'react';

const ProjectsPage = () => {
  return (
    <Grid2 container spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography fontFamily={'inherit'}>
            Nos complace ofrecerle una amplia gama de propiedades exclusivas y servicios
            personalizados para satisfacer todas sus necesidades inmobiliarias. Nuestra misión
            es ayudarle a encontrar la casa de sus sueños o la inversión perfecta, con el respaldo
            de nuestro equipo de expertos comprometidos con la excelencia y la transparencia.
            Descubra cómo podemos hacer realidad sus aspiraciones inmobiliarias.
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          {"FOTO de empresa"}
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography fontFamily={'inherit'}>
            Nos complace ofrecerle una amplia gama de propiedades exclusivas y servicios
            personalizados para satisfacer todas sus necesidades inmobiliarias. Nuestra misión
            es ayudarle a encontrar la casa de sus sueños o la inversión perfecta, con el respaldo
            de nuestro equipo de expertos comprometidos con la excelencia y la transparencia.
            Descubra cómo podemos hacer realidad sus aspiraciones inmobiliarias.
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          {"FOTO de empresa"}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ProjectsPage;
