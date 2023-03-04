import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

export default function ProductMenu({ product }) {
  const [qty, setQty] = useState(1)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)

  const totalPrice = Math.round(parseFloat(product.price) * 100 * qty) / 100

  function handleSetQty(newQty) {
    if (isNaN(parseInt(newQty)) && newQty !== '') {
      setError(true)
      setQty(0)
      return
    }

    if (newQty <= parseInt(product.inventory)) {
      setQty(parseInt(newQty) || '')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <Box sx={{ width: '100%', boxShadow: 4, borderRadius: '8px' }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        // message={`Parabéns! Você comprou ${qty} unidades de ${product.name}`}
        autoHideDuration={3000}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {`Parabéns! Você comprou ${qty} unidades de ${product.name}`}
        </Alert>
      </Snackbar>

      <Typography variant="h5" sx={{ padding: '16px' }}>
        {product.name}
      </Typography>

      <Typography variant="h6" sx={{ padding: '16px' }}>
        R$ {product.price}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          paddingX: '16px',
          justifyContent: 'space-between',
          marginTop: '16px',
        }}
      >
        <TextField
          label="Quantidade"
          value={qty}
          onChange={(e) => {
            handleSetQty(e.target.value)
          }}
          helperText={`${product.inventory} unidades no estoque`}
          FormHelperTextProps={{
            sx: {
              ...(error && { color: 'red' }),
            },
          }}
          sx={{ width: '180px' }}
        />
        <Box>
          <Typography variant="h6" sx={{ textAlign: 'end' }}>
            Total
          </Typography>
          <Typography>R$ {totalPrice.toFixed(2)}</Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="success"
        sx={{ margin: '16px', width: 'calc(100% - 32px)' }}
        onClick={() => setOpen(true)}
      >
        Comprar agora
      </Button>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Descrição do Produto</Typography>
        {product.description}
      </Box>
    </Box>
  )
}
