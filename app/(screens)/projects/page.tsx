'use client';

import { Box, Button } from '@mui/material';
import React from 'react';
import theme from '@/app/theme/theme';

const ProjectsPage = () => {

  return (
    <Box sx={{ marginBottom: 2 }}>
      <h1>Projects</h1>
      <p>This is the Projects page.</p>

      <Button variant='contained'>Primary color</Button>
      <Button variant='contained' sx={{ backgroundColor: theme.palette.secondary.main }}>Secondary color</Button>
      <Button variant='contained' sx={{ backgroundColor: theme.palette.error.main }}>Red color</Button>
      <Button variant='contained' sx={{ backgroundColor: theme.palette.grey[500] }}>Gray color</Button>

    </Box>
  );
};

export default ProjectsPage;