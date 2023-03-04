import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export default function Footer() {
  const small = useMediaQuery('(max-width: 800px)')

  return (
    <Box
      sx={{
        display: 'flex',
        padding: small ? '8px' : '40px',
        margin: '40px',
        borderTopColor: 'darkgray',
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        justifyContent: 'space-between',
        flexDirection: small ? 'column' : 'row',
      }}
    >
      <Typography>EvoMouse ltda®</Typography>
      <Typography>Contato: (21) 99999-9999</Typography>
      <Typography>CNPJ: 00.000.000/0000-99</Typography>
    </Box>
  )
}
