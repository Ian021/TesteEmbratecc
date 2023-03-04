import { Container, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ProductPhoto from '../components/ProductPhoto'
import ProductPhotoPicker from '../components/ProductPhotoPicker'
import ProductMenu from '../components/ProductMenu'
import products from '../data/products.json'

export default function ProductPage() {
  const small = useMediaQuery('(max-width: 800px)')
  const big = useMediaQuery('(max-width: 1200px)')
  const photos = products.mouse.photos

  const [productPhoto, setProductPhoto] = useState(photos[0])

  return (
    <Container
      sx={{
        display: 'flex',
        paddingTop: '40px',
        flexDirection: big ? 'column' : 'row',
        paddingX: small ? 0 : undefined,
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          flexDirection: small ? 'column-reverse' : 'row',
          alignItems: 'center',
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
      <Box sx={{ flex: 1, maxWidth: '600px', marginTop: 5 }}>
        <ProductMenu product={products.mouse} />
      </Box>
    </Container>
  )
}
