// components/EmblaCarousel.tsx
import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Box, IconButton, Typography, Paper } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';

interface ResponsiveHeight {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
}

interface EmblaCarouselProps {
  photos: any[];
  adjustSize?: boolean; // Prop para activar/desactivar el ajuste de tamaño
  containerWidth?: string | number; // Prop para personalizar el ancho del contenedor
  containerHeight?: string | number | ResponsiveHeight; // Prop para personalizar el alto del contenedor
}

const CustomEmblaCarousel = ({
  photos,
  adjustSize = false, // Valor por defecto: false
  containerWidth = '100%', // Valor por defecto: 100%
  containerHeight = { xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh' }, // Valor por defecto: responsive
}: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        // Aquí puedes agregar lógica adicional si es necesario
      });
    }
  }, [emblaApi]);

  // Función para obtener el valor de altura según el tipo
  const getHeightValue = (height: string | number | ResponsiveHeight) => {
    if (typeof height === 'string' || typeof height === 'number') {
      return { height: height }; // Devuelve un objeto con la altura
    } else {
      // Si es un objeto responsivo, aplica los valores según el breakpoint
      return {
        sx: {
          height: {
            xs: height.xs || '50vh',
            sm: height.sm || '60vh',
            md: height.md || '70vh',
            lg: height.lg || '80vh',
          },
        },
      };
    }
  };

  return (
    <Box position="relative" width={containerWidth} maxWidth="1800px" margin="auto" overflow="hidden">
      <Box ref={emblaRef} overflow="hidden">
        <Box display="flex">
          {photos.map((item, index) => (
            <Box
              key={index}
              flex="0 0 100%"
              position="relative"
              width="100%"
              {...getHeightValue(containerHeight)} // Aplica el valor de altura
            >
              <Box
                position="relative"
                width="100%"
                height="100%"
                sx={{
                  '& img': {
                    objectFit: adjustSize ? 'cover' : 'contain', // Ajusta el tamaño si adjustSize es true
                    width: '100%',
                    height: '100%',
                  },
                }}
              >
                <Image
                  src={item.src}
                  alt={item.altText}
                  fill
                  objectFit={adjustSize ? 'cover' : 'contain'} // Ajusta el tamaño si adjustSize es true
                  priority={index === 0} // Prioriza la carga de la primera imagen
                  placeholder="blur"
                  blurDataURL={item.src}
                />
              </Box>
              {item.caption && ( // Solo muestra el caption si existe
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
                    {item.caption}
                  </Typography>
                </Paper>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <IconButton
        onClick={scrollPrev}
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
        onClick={scrollNext}
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
    </Box>
  );
};

export default CustomEmblaCarousel;