import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ProductPhoto from '../components/ProductPhoto'
import ProductPhotoPicker from '../components/ProductPhotoPicker'
import ProductRightMenu from '../components/ProductRightMenu'
// import products from '../data/products.json'

export default function Product() {
  return (
    <Container sx={{ display: 'flex' }}>
      <Box sx={{ flex: 2, bgcolor: 'lightcyan', display: 'flex' }}>
        <ProductPhotoPicker />
        <ProductPhoto />
      </Box>
      <Box sx={{ flex: 1, bgcolor: 'lightblue' }}>
        <ProductRightMenu />
      </Box>
    </Container>
  )
}
