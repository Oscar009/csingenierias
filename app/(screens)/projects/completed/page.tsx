import AnimatedText from '@/app/components/Animated/AnimatedText'
import { CustomSubTitle } from '@/app/components/Titles/CustomSubTitle/CustomSubTitle'
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle'
import { Grid2, Typography } from '@mui/material'
import React from 'react'

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
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Fraccionamiento Lomas del Ocote, Ixtlahuacán Del Río, 2020"}
            </Typography>
          </AnimatedText>
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Coto Bamboo, Guadalajara, 2023"}
            </Typography>
          </AnimatedText>
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
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Cabañas Lupita, Mazamitla"}
            </Typography>
          </AnimatedText>
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Casa de lujo Santa Elena"}
            </Typography>
          </AnimatedText>
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
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
        <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Fraccionamiento Santa Elena, Mazamitla"}
            </Typography>
          </AnimatedText>
        </Grid2>
      </Grid2>

      <Grid2 container size={{ xs: 12 }} spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
          <AnimatedText direction="right">
            <Typography variant='h4' fontFamily={'Bebas Neue'}>
              {"Oficinas CS Ingenierías, Valle de Juárez, Mazamitla"}
            </Typography>
          </AnimatedText>
        </Grid2>
      </Grid2>

    </Grid2>
  )
}

export default ProjectsCompleted