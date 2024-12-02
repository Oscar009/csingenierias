import { Typography } from '@mui/material'
import React from 'react'

interface CustomSubTitleProps {
  label: string;
}

export const CustomSubTitle = ({
  label,
}: CustomSubTitleProps) => {
  return (
    <Typography color='primary' variant='h3' fontFamily={'Bebas Neue'}>
      {label}
    </Typography>
  )
}
