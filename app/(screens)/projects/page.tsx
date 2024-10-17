'use client';

import { Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from "../../assets/img/logo_negro.jpeg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomCarousel from '@/app/components/Carousel/CustomCarusel';
import { CustomDivider } from '@/app/components/CustomDivider/CustomDivider';
import { itemsLosFresnos } from './photos/losfresnos';

const ProjectsPage = () => {
  return (
    <Grid2 container spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant="h5">Bienvenida</Typography>
          <CustomDivider />
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

      <Grid2 container size={{ xs: 12 }} spacing={2} marginTop={5}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Typography variant='h3' fontFamily={'inherit'}>
            {"Proyectos"}
          </Typography>
          <CustomDivider />
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
            <LocationOnIcon fontSize='small' color={"error"} />
            {"Ixtlahuacán Del Río"}
          </Typography>
          <Typography variant='body1'>
            {"El municipio de Ixtlahuacan del Río, denominado también como pueblo mágico se encuentra a 45 min. de Guadalajara, Jal. El cuál se destaca por su tranquilidad, amabilidad de su gente y excelente ubiciación para estar cerca de la ciudad de Guadalajara y el estado de Zacatecas. El fraccionamiento Los Fresnos, se ubica dentro del pueblo a 5 min. del centro, pero justo a las orillas de él, donde puedes disfrutar de una hermosa vista a la naturaleza en un terreno seguro y apto para poder vivir y desarrollar tus proyectos."}
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <CustomCarousel photos={itemsLosFresnos} />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant='h5'>
            {"Introducción"}
          </Typography>
          <Typography variant='body1'>
            {"El municipio de ixtlahuacan del Rio, denoominado tambien como pueblo magico se encuentra a 45 min de Guadalajara, JAL. El cual se destaca por su tranquilidad, amabilidad de su gente y excelente ubiciacion para estar cerca de la ciudad de Guadalajara y el estado de Zacatecas. El fraccionamiento Los Fresnos, se ubica dentro del pueblo a 5 min. Del centro, pero justo a las orillas de el, donde puedes disfrutar de una hermosa vista a la naturaleza en un terreno seguro y apto para poder vivir y desarrollar tus proyectos."}
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
        <Typography variant='h5'>
            {"Etapas de construcción"}
          </Typography>
          <Typography variant='body1'>
            {"El proyecto urbanístico general donde se incluyen: planos topográficos, de rasantes, de instalaciones, de solución vial y sembrado de vivienda tipo , están ya integrados en el expediente que ya está ingresado en el ayuntamiento. También están todos los planos constructivos de la casa tipo que a continuación de enumeran: planos arquitectónicos, de secciones y acabados, estructurales, de instalaciones como la sanitaria, hidráulica, eléctrica y de gas están integrados en expediente mencionado, así como la documentación complementaria correspondiente."}
          </Typography>
        </Grid2>
      </Grid2>

    </Grid2>
  );
};

export default ProjectsPage;
