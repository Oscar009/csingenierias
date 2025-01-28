// components/EmblaCarousel.tsx
import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Box, IconButton, Typography, Paper } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';

interface EmblaCarouselProps {
  photos: any[];
}

const CustomEmblaCarousel = ({ photos }: EmblaCarouselProps) => {
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

  return (
    <Box position="relative" width="100%" maxWidth="1800px" margin="auto" overflow="hidden">
      <Box ref={emblaRef} overflow="hidden">
        <Box display="flex">
          {photos.map((item, index) => (
            <Box
              key={index}
              flex="0 0 100%"
              position="relative"
              width="100%"
              height={{ xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh' }}
            >
              <Box
                position="relative"
                width="100%"
                height="100%"
                sx={{
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
                  priority={index === 0} // Prioriza la carga de la primera imagen
                  placeholder="blur"
                  blurDataURL={item.src}
                />
              </Box>
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