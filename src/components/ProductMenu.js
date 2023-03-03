import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ProductMenu() {
  return (
    <Box>
      <Typography variant="h5">Nome do produto</Typography>
      <Box>Preço do produto</Box>
      <Box>Escolher quantidade / quantidade em estoque</Box>
      <Box>Descrição do produto</Box>
      <Box>Comprar agora</Box>
    </Box>
  )
}
