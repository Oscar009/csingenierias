'use client'
import { Box, Button } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsappMessage = () => {
  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent('Hola esto es un mensaje predeterminado!');
    const whatsappUrl = `https://wa.me/523329501713?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
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
          alignSelf:"center"
        }}
      >
        Enviar Mensaje
      </Button>
    </Box>
  );
}
