import AnimatedText from '@/app/components/Animated/AnimatedText'
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle'
import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TeamCard from '@/app/components/TeamCard/TeamCard';

const teamMembers = [
  {
    name: 'ING. JUAN CARLOS CONTRERAS',
    position: 'Director General CEO',
    image: undefined,
  },
  {
    name: 'MERY ELEN CAMACHO',
    position: 'Gerente en Finanzas',
    image: undefined,
  },
  {
    name: 'Ing. Jose Luis Pelayo Pelayo',
    position: 'Jefe Técnico',
    image: undefined,
  },
  {
    name: 'Arq. Arturo Zavala',
    position: 'Proyectos',
    image: undefined,
  },
  {
    name: 'Elizabeth Vazquez Jauregui',
    position: 'Gerente en Marketing Digital',
    image: undefined,
  },
];

const TeamWork = () => {
  return (
    <>
      <Grid2 container size={{ xs: 12 }} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box display={"flex"} alignItems="center" gap={1}>
              <CustomTitle label={"Equipo"} />
              <AnimatedText direction="right">
                <Diversity3Icon sx={{ fontSize: 50 }} />
              </AnimatedText>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} sx={{ marginTop: 2, width: "100%" }}>
        {teamMembers.map((member, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
            <TeamCard name={member.name} position={member.position} image={member.image} />
          </Grid2>
        ))}
      </Grid2>
    </>
  )
}

export default TeamWork