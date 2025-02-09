import { Typography } from '@mui/material'
import React from 'react'
import AnimatedText from '../../Animated/AnimatedText';

interface CustomSubTitleProps {
  label: string;
}

export const CustomSubTitle = ({
  label,
}: CustomSubTitleProps) => {
  return (
    <AnimatedText direction='right'>
      <Typography color='primary' variant='h3' fontFamily={'Bebas Neue'}>
        {label}
      </Typography>
    </AnimatedText>
  )
}
