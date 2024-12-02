import { Divider } from '@mui/material'
import React from 'react'
import theme from "../../theme/theme";

export const CustomDivider = () => {
  return (
    <Divider sx={{ marginBlock: 1, border: 1, color: theme.palette.error.main }} />
  )
}
