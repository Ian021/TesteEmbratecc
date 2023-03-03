import { Box, Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { productPhotos } from '../data/productPhotos'

export default function ProductPhotoPicker({
  productPhoto,
  setProductPhoto,
  photos,
}) {
  const small = useMediaQuery('(max-width: 800px)')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: small ? 'row' : 'column',
      }}
    >
      {photos.map((photo) => {
        const selected = photo === productPhoto
        return (
          <Button
            key={photo}
            sx={{
              height: small ? '52px' : '92px',
              width: small ? '52px' : '92px',
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
