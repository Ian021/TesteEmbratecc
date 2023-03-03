import { Container, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ProductPhoto from '../components/ProductPhoto'
import ProductPhotoPicker from '../components/ProductPhotoPicker'
import ProductMenu from '../components/ProductMenu'
import products from '../data/products.json'

export default function ProductPage() {
  const small = useMediaQuery('(max-width: 800px)')
  const photos = products.mouse.photos

  const [productPhoto, setProductPhoto] = useState(photos[0])

  return (
    <Container
      sx={{
        display: 'flex',
        paddingTop: '40px',
        flexDirection: small ? 'column' : 'row',
        paddingX: small ? 0 : undefined,
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          flexDirection: small ? 'column-reverse' : 'row',
        }}
      >
        {!small && (
          <ProductPhotoPicker
            photos={photos}
            productPhoto={productPhoto}
            setProductPhoto={setProductPhoto}
          />
        )}
        <ProductPhoto
          photos={photos}
          productPhoto={productPhoto}
          setProductPhoto={setProductPhoto}
        />
      </Box>
      <Box sx={{ flex: 1, bgcolor: 'lightblue' }}>
        <ProductMenu />
      </Box>
    </Container>
  )
}
