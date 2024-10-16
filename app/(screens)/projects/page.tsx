'use client';

import { Divider, Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from "../../assets/img/logo_negro.jpeg";
import theme from "../../theme/theme";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomCarousel, { CarouselItem } from '@/app/components/Carousel/CustomCarusel';

const itemsLosFresnos: CarouselItem[] = [
  {
    src: '/assets/images/projects/image1.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1 Caption',
  },
  {
    src: '/assets/images/projects/image2.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2 Caption',
  },
  {
    src: '/assets/images/projects/image3.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3 Caption',
  },
];

const ProjectsPage = () => {
  return (
    <Grid2 container spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant="h5">Bienvenida</Typography>
          <Divider sx={{ marginBlock: 1, border: 1, color: theme.palette.primary.main }} />
          <Typography fontFamily={'unset'}>
            Nos complace ofrecerle una amplia gama de propiedades exclusivas y servicios
            personalizados para satisfacer todas sus necesidades inmobiliarias. Nuestra misión
            es ayudarle a encontrar la casa de sus sueños o la inversión perfecta, con el respaldo
            de nuestro equipo de expertos comprometidos con la excelencia y la transparencia.
            Descubra cómo podemos hacer realidad sus aspiraciones inmobiliarias.
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src={logo}
            alt="Logo"
            style={{
              width: '300px',
              height: 'auto',
              maxHeight: '200px'
            }}
          />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Typography variant='h3' fontFamily={'inherit'}>
            {"Proyectos"}
          </Typography>
          <Divider sx={{ marginBlock: 1, border: 1, color: theme.palette.primary.main }} />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant='h4' fontFamily={'inherit'}>
            {"Proyectos activos"}
          </Typography>
          <Typography variant='h5'>
            {"Los Fresnos"}
          </Typography>
          <Typography variant='h6'>
            {"Fraccionamiento residencial"}
            <LocationOnIcon fontSize='small' />
            {"Ixtlahuacán Del Río"}
          </Typography>
          <Typography variant='body1'>
            {"El municipio de Ixtlahuacan del Río, denominado también como pueblo mágico se encuentra a 45 min. de Guadalajara, Jal. El cuál se destaca por su tranquilidad, amabilidad de su gente y excelente ubiciación para estar cerca de la ciudad de Guadalajara y el estado de Zacatecas. El fraccionamiento Los Fresnos, se ubica dentro del pueblo a 5 min. del centro, pero justo a las orillas de él, donde puedes disfrutar de una hermosa vista a la naturaleza en un terreno seguro y apto para poder vivir y desarrollar tus proyectos."}
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          {/* <CustomCarousel myItems={itemsLosFresnos} height='600px' width='800px' /> */}
          <CustomCarousel />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ProjectsPage;
