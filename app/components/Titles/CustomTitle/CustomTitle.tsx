import { Typography } from '@mui/material';
import React from 'react'

interface CustomTitleProps {
  label: string;
}

export const CustomTitle = ({
  label,
}: CustomTitleProps) => {
  return (
    <Typography variant='h2' fontFamily={'Bebas Neue'}>
      {label}
    </Typography>
  )
}
