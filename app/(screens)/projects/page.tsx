'use client';

import { Grid2, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from "../../assets/img/logo_negro.jpeg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomCarousel from '@/app/components/Carousel/CustomCarusel';
import { CustomDivider } from '@/app/components/CustomDivider/CustomDivider';
import { itemsLosFresnos } from './photos/losfresnos';
import { CustomSubTitle } from '@/app/components/Titles/CustomSubTitle/CustomSubTitle';
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle';
import { itemsMazamitla } from './photos/mazamitla';

const ProjectsPage = () => {
  return (
    <Grid2 container spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant="h5">Bienvenida</Typography>
          <CustomDivider />
          <Typography fontFamily={'unset'}>
            {"Nos complace ofrecerle una amplia gama de propiedades exclusivas y servicios personalizados para satisfacer todas sus necesidades inmobiliarias. Nuestra misión es ayudarle a encontrar la casa de sus sueños o la inversión perfecta, con el respaldo de nuestro equipo de expertos comprometidos con la excelencia y la transparencia. Descubra cómo podemos hacer realidad sus aspiraciones inmobiliarias."}
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
          <CustomTitle label={"Proyectos"} />
          <CustomDivider />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <CustomSubTitle label={"Proyectos activos"} />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant='h4'>
            {"Los Fresnos"}
          </Typography>
          <Typography variant='body1'>
            {"Fraccionamiento residencial"}
            <LocationOnIcon fontSize='small' color={"error"} />
            {"Ixtlahuacán Del Río"}
          </Typography>
          <Typography variant='h6' marginTop={1}>
            {"Introducción"}
          </Typography>
          <Typography variant='body1'>
            {"El municipio de Ixtlahuacan del Río, denominado también como pueblo mágico se encuentra a 45 min. de Guadalajara, Jal. El cuál se destaca por su tranquilidad, amabilidad de su gente y excelente ubiciación para estar cerca de la ciudad de Guadalajara y el estado de Zacatecas. El fraccionamiento Los Fresnos, se ubica dentro del pueblo a 5 min. del centro, pero justo a las orillas de él, donde puedes disfrutar de una hermosa vista a la naturaleza en un terreno seguro y apto para poder vivir y desarrollar tus proyectos."}
          </Typography>
          <Typography variant='h6' marginTop={1}>
            {"Etapas de construcción"}
          </Typography>
          <Typography variant='body1'>
            {"El proyecto urbanístico general donde se incluyen: planos topográficos, de rasantes, de instalaciones, de solución vial y sembrado de vivienda tipo , están ya integrados en el expediente que ya está ingresado en el ayuntamiento. También están todos los planos constructivos de la casa tipo que a continuación de enumeran: planos arquitectónicos, de secciones y acabados, estructurales, de instalaciones como la sanitaria, hidráulica, eléctrica y de gas están integrados en expediente mencionado, así como la documentación complementaria correspondiente."}
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <CustomCarousel photos={itemsLosFresnos} />
        </Grid2>

      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <CustomDivider />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant='h4'>
            {"Mazamitla"}
          </Typography>
          <Typography variant='body1'>
            {"Casas e inversiones / Epenche "}
            <LocationOnIcon fontSize='small' color={"error"} />
            {"Mazamitla, Pueblo Mágico"}
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <CustomCarousel photos={itemsMazamitla} />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant='h6'>
            {"Introducción"}
          </Typography>
          <Typography variant='body1'>
            {"Mazamitla, conocido como el 'Pueblo Mágico' de Jalisco, es un lugar donde la belleza natural y la tranquilidad se entrelazan para ofrecer un estilo de vida excepcional. Rodeado de majestuosos bosques de pinos y montañas, este encantador destino destaca por su arquitectura tradicional, su vibrante cultura y una amplia oferta de actividades al aire libre. Invertir en Mazamitla no solo significa adquirir una propiedad, sino también formar parte de una comunidad que valora la sostenibilidad y la convivencia. Con un clima templado y un ambiente acogedor, Mazamitla se ha convertido en el refugio perfecto para quienes buscan escapar del bullicio urbano. Desde paseos por la naturaleza hasta eventos culturales, cada rincón de este pueblo ofrece una experiencia única. Únete a nosotros en esta emocionante aventura y descubre cómo Mazamitla puede ser el lugar ideal para tu próximo hogar o inversión. La oportunidad de vivir en un entorno privilegiado te espera."}
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12 }}>
          <CustomDivider />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <Typography variant='h4'>
            {"Condominios 'Los Venados'"}
          </Typography>
          <Typography variant='body1'>
            {"Conjunto departamental"}
            <LocationOnIcon fontSize='small' color={"error"} />
            {"Cabo San Lucas"}
          </Typography>
          <Typography variant='h6'>
            {"Introducción"}
          </Typography>
          <Typography variant='body1'>
            {"Cabo San Lucas, famoso por su icónico Arco y playas de arena blanca, es el destino ideal para quienes buscan un estilo de vida elegante y relajado. Invertir en un condominio seguro en esta vibrante ciudad te brinda acceso a una rica cultura local, que incluye festivales como el Festival del Taco y el Festival de Música de Cabo, donde la gastronomía y el arte se celebran con entusiasmo. Aquí, puedes disfrutar de emocionantes actividades como el avistamiento de ballenas y la pesca deportiva, todo en un ambiente cálido y acogedor. Cabo San Lucas no solo es un lugar para vivir, sino una inversión en calidad de vida. No pierdas la oportunidad de ser parte de este paraíso costero. ¡Tu nuevo hogar te espera!"}
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          FOTOS CABO SAN LUCAS
        </Grid2>
      </Grid2>

    </Grid2>
  );
};

export default ProjectsPage;
