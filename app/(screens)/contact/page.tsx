import { CustomDivider } from '@/app/components/CustomDivider/CustomDivider'
import { CustomTitle } from '@/app/components/Titles/CustomTitle/CustomTitle'
import { Grid2 } from '@mui/material'
import React from 'react'
import CustomForm from './CustomForm'

const ContactPage = () => {
  return (
    <Grid2 container spacing={2} sx={{ paddingInline: 5, paddingBlock: 3 }}>
      <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
        <CustomTitle label={"Contacto"} />
        <CustomDivider />
      </Grid2>
      <CustomForm />
    </Grid2>
  )
}

export default ContactPage