'use client';
import AnimatedText from '@/app/components/Animated/AnimatedText'
import { CustomSubTitle } from '@/app/components/Titles/CustomSubTitle/CustomSubTitle'
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle'
import { Grid2, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomEmblaCarousel from '@/app/components/Carousel/CustomCarusel';
import { itemsLomasDelOcote } from './photos/FraccionamientoLocasDelOcote';
import { itemsCotoBamboo } from './photos/CotoBamboo';
import { itemsCabaniasLupita1 } from './photos/CabaniasLupita1';
import { itemsCabaniasLupita2 } from './photos/CabaniasLupita2';
import { itemsCasaDeLujoSantaElena } from './photos/CasaDeLujoSantaElena';
import { itemsFraccionamientoSantaElena } from './photos/FraccionamientoSantaElena';
import { itemsOficinasCS } from './photos/OficinasCS';
import { itemsCanchaSantaMariaDelOro } from './photos/CanchasSantaMariaDelOro';

const ProjectsCompleted = () => {
  return (
    <Grid2 container spacing={2}
      sx={{
        width: "100%",
        margin: "0 auto",
        marginTop: 2
      }}
    >

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5 }}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <CustomTitle label={"Proyectos"} />
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5 }}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <CustomSubTitle label={"Proyectos ejecutados"} />
        </Grid2>
      </Grid2>

      <Grid2
        container
        size={{ xs: 12 }}
        spacing={2}
        sx={{
          backgroundColor: "#f1f1f1",
          paddingInline: 5,
          paddingBlock: 3
        }}
      >
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }} paddingBlock={1}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Fraccionamiento Lomas del Ocote"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Ixtlahuacán Del Río"}
              <LocationOnIcon fontSize='small' />
              {"2020"}
            </Typography>
          </AnimatedText>
        </Grid2>
        <CustomEmblaCarousel photos={itemsLomasDelOcote} />
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Coto Bamboo"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Guadalajara"}
              <LocationOnIcon fontSize='small' />
              {"2023"}
            </Typography>
          </AnimatedText>
        </Grid2>
        <CustomEmblaCarousel photos={itemsCotoBamboo} />
      </Grid2>

      <Grid2
        container
        size={{ xs: 12 }}
        spacing={2}
        sx={{
          backgroundColor: "#f1f1f1",
          paddingInline: 5,
          paddingBlock: 3
        }}
      >
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Cabañas Lupita"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Mazamitla"}
              <LocationOnIcon fontSize='small' />
              {"2024"}
            </Typography>
          </AnimatedText>
        </Grid2>
        <CustomEmblaCarousel photos={itemsCabaniasLupita1} />
        <CustomEmblaCarousel photos={itemsCabaniasLupita2} />
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Casa de lujo Santa Elena"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Mazamitla"}
              <LocationOnIcon fontSize='small' />
              {"2024"}
            </Typography>
          </AnimatedText>
        </Grid2>
        <CustomEmblaCarousel photos={itemsCasaDeLujoSantaElena} />
      </Grid2>

      <Grid2
        container
        size={{ xs: 12 }}
        spacing={2}
        sx={{
          backgroundColor: "#f1f1f1",
          paddingInline: 5,
          paddingBlock: 3
        }}
      >
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Fraccionamiento Santa Elena"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Mazamitla"}
              <LocationOnIcon fontSize='small' />
              {"2024"}
            </Typography>
          </AnimatedText>
        </Grid2>
        <CustomEmblaCarousel photos={itemsFraccionamientoSantaElena} />
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Oficinas CS Ingenierías"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Valle de Juárez y Mazamitla"}
              <LocationOnIcon fontSize='small' />
              {"2024"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"(Antes y después)"}
            </Typography>
          </AnimatedText>
        </Grid2>
        <CustomEmblaCarousel photos={itemsOficinasCS} />
      </Grid2>
      
      <Grid2
        container
        size={{ xs: 12 }}
        spacing={2}
        sx={{
          backgroundColor: "#f1f1f1",
          paddingInline: 5,
          paddingBlock: 3
        }}
      >
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Cancha multiusos"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Santa María del Oro"}
              <LocationOnIcon fontSize='small' />
            </Typography>
          </AnimatedText>
        </Grid2>
        <CustomEmblaCarousel photos={itemsCanchaSantaMariaDelOro} />
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Banco"}
            </Typography>
          </AnimatedText>
          <AnimatedText direction="right">
            <Typography
              variant='body1'
              fontFamily={'Bebas Neue'}
              sx={{ display: 'flex' }}
            >
              {"Localización"}
              <LocationOnIcon fontSize='small' />
              {"Año"}
            </Typography>
          </AnimatedText>
        </Grid2>
        {/* <CustomEmblaCarousel photos={itemsOficinasCS} /> */}
      </Grid2>

    </Grid2>
  )
}

export default ProjectsCompleted