'use client';

import { Button } from '@mui/material';
import React from 'react';
import theme from '@/app/theme/theme';

const ProjectsPage = () => {

  return (
    <div>
      <h1>Projects</h1>
      <p>This is the Projects page.</p>

      <Button variant='contained'>Primary color</Button>
      <Button variant='contained' sx={{ backgroundColor: theme.palette.secondary.main }}>Secondary color</Button>
      <Button variant='contained' sx={{ backgroundColor: theme.palette.error.main }}>Red color</Button>
      <Button variant='contained' sx={{ backgroundColor: theme.palette.grey[500] }}>Gray color</Button>

    </div>
  );
};

export default ProjectsPage;