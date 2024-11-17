import { CustomDivider } from '@/app/components/CustomDivider/CustomDivider'
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle'
import { Box, Grid2 } from '@mui/material'
import React from 'react'
import CustomForm from './CustomForm'
import { WhatsappMessage } from './WhatsappMessage'
import TelegramIcon from '@mui/icons-material/Telegram';

const ContactPage = () => {
  return (
    <Grid2 container spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <Box display={"flex"} alignItems={"center"}>
          <CustomTitle label={"Contacto"} />
          <TelegramIcon sx={{ fontSize: 50 }} />
        </Box>
        <CustomDivider />
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
        <CustomForm />
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
        <WhatsappMessage />
      </Grid2>
    </Grid2>
  )
}

export default ContactPage