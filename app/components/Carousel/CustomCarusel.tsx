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

const items: CarouselItem[] = [
  {
    src: '/assets/images/projects/image1.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1 Caption',
  },
  {
    src: '/assets/images/projects/image2.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2 Caption',
  },
  {
    src: '/assets/images/projects/image3.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3 Caption',
  },
];

const CustomCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = (): void => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <Box position="relative" width="100%" maxWidth="600px" margin="auto" overflow="hidden">
      {items.map((item, index) => (
        <Box
          key={index}
          display={activeIndex === index ? 'block' : 'none'}
          position="relative"
          width="100%"
          height="400px" // Ajusta la altura como desees
        >
          {activeIndex === index && (
            <Image
              src={item.src}
              alt={item.altText}
              layout="fill" // Hace que la imagen llene el contenedor
              objectFit="cover" // Ajusta cómo se adapta la imagen
              priority={index === activeIndex} // Prioriza la carga de la imagen actual
            />
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
        <ArrowBackIos
          sx={{
            marginLeft: '3px',
            paddingLeft: '3px',
          }}
        />
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
        <ArrowForwardIos
          sx={{
            marginLeft: '1px',
            paddingLeft: '3px',
          }}
        />
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
        <Typography variant="h6">{items[activeIndex].caption}</Typography>
      </Paper>
    </Box>
  );
};

export default CustomCarousel;
