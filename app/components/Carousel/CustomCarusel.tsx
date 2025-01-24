// components/CustomCarousel.tsx
import React, { useState } from 'react';
import { Box, IconButton, Typography, Paper } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';

// Definición de tipos para los items del carrusel
export interface CarouselItem {
  src: string;
  altText: string;
  caption: string;
}

interface CustomCarouselProps {
  photos: CarouselItem[];
}

const CustomCarousel = ({ photos }: CustomCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = (): void => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  return (
    <Box position="relative" width="100%" maxWidth="1800px" margin="auto" overflow="hidden">
      {photos.map((item, index) => (
        <Box
          key={index}
          display={activeIndex === index ? 'block' : 'none'}
          position="relative"
          width="100%"
          height={{ xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh' }} // Altura flexible según el viewport
        >
          {activeIndex === index && (
            <Box
              position="relative"
              width="100%"
              height="100%"
              sx={{
                // Evita la deformación de imágenes verticales o muy anchas
                '& img': {
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                },
              }}
            >
              <Image
                src={item.src}
                alt={item.altText}
                fill
                objectFit="contain"
                priority={index === activeIndex} // Prioriza la carga de la imagen actual
                placeholder="blur"
                blurDataURL={item.src}
              />
            </Box>
          )}
        </Box>
      ))}

      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <ArrowBackIos sx={{ marginLeft: '3px', paddingLeft: '3px' }} />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <ArrowForwardIos sx={{ marginLeft: '1px', paddingLeft: '3px' }} />
      </IconButton>

      <Paper
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '5px 15px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        <Typography variant="h6" textAlign="center">
          {photos[activeIndex].caption}
        </Typography>
      </Paper>
    </Box>
  );
};

export default CustomCarousel;
