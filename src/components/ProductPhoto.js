import {
  ArrowBack,
  ArrowBackIos,
  ArrowForwardIos,
  SwipeLeft,
} from '@mui/icons-material'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import React from 'react'
import { productPhotos } from '../data/productPhotos'

export default function ProductPhoto({
  photos,
  productPhoto,
  setProductPhoto,
}) {
  const small = useMediaQuery('(max-width: 800px)')

  function handleNext() {
    const currentIndex = photos.indexOf(productPhoto)
    if (currentIndex + 1 < photos.length) {
      setProductPhoto(photos[currentIndex + 1])
    }
  }

  function handlePrevious() {
    const currentIndex = photos.indexOf(productPhoto)
    if (currentIndex > 0) {
      setProductPhoto(photos[currentIndex - 1])
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        onClick={handlePrevious}
        sx={{ ...(small && { position: 'absolute', left: 0 }) }}
      >
        <ArrowBackIos />
      </IconButton>
      <Box
        sx={{
          height: small ? '320px' : '600px',
          width: small ? '320px' : '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={productPhotos[productPhoto]} className="img-big" />
      </Box>
      <IconButton
        onClick={handleNext}
        sx={{ ...(small && { position: 'absolute', right: 0 }) }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  )
}
