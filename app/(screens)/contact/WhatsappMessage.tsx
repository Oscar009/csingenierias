'use client'
import { Box, Button } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AnimatedText from '@/app/components/Animated/AnimatedText';

export const WhatsappMessage = () => {
  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(`¡Hola, buen día! 👋
      Estaba revisando su página web y me interesa obtener más información sobre [mencionar el proyecto o propiedad específica que te interese, por ejemplo: "la casa en venta en el sector X" o "el desarrollo de departamentos en zona Y"].
      
      Mi objetivo es [explicar brevemente el objetivo, por ejemplo: "adquirir una propiedad para inversión" o "encontrar mi primera casa"].
      
      Mi presupuesto aproximado es [indicar un rango o cantidad].
      
      Quedo atento a la información y opciones disponibles. ¡Gracias! 😊`);
    const whatsappUrl = `https://wa.me/523329501713?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatedText direction="right">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '20px',
        }}
      >
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          onClick={handleSendMessage}
          sx={{
            backgroundColor: '#25D366',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#1ebe57',
            },
            fontSize: '16px',
            textTransform: 'none',
            padding: '10px 20px',
            width: "80%",
            alignSelf: "center"
          }}
        >
          Enviar Mensaje
        </Button>
      </Box>
    </AnimatedText>
  );
}
