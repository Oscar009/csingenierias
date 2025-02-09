import { Typography } from '@mui/material';
import React from 'react'
import AnimatedText from '../../Animated/AnimatedText';

interface CustomTitleProps {
  label: string;
}

export const CustomTitle = ({
  label,
}: CustomTitleProps) => {
  return (
    <AnimatedText direction='right'>
      <Typography variant='h2' fontFamily={'Bebas Neue'}>
        {label}
      </Typography>
    </AnimatedText>
  )
}
