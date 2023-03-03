import { Box, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { productPhotos } from '../data/productPhotos'

export default function ProductPhotoPicker({
  productPhoto,
  setProductPhoto,
  photos,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {photos.map((photo) => {
        const selected = photo === productPhoto
        return (
          <Button
            key={photo}
            sx={{
              height: '92px',
              width: '92px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '4px',
              padding: 0,
              ...(selected && {
                borderColor: 'yellow',
                borderWidth: '2px',
                borderStyle: 'solid',
              }),
            }}
            onClick={() => {
              setProductPhoto(photo)
            }}
          >
            <img className="img-small" src={productPhotos[photo]} />
          </Button>
        )
      })}
    </Box>
  )
}
