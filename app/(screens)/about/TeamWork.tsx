import AnimatedText from '@/app/components/Animated/AnimatedText'
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle'
import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';

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
    </>
  )
}

export default TeamWork