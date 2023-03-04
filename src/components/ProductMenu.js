import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function ProductMenu({ product }) {
  const [qty, setQty] = useState(1)
  const [error, setError] = useState(false)

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
      >
        Comprar agora
      </Button>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6">Informações do Produto</Typography>
        Principais Recursos Conexão sem Fio e Confiável de 2,4 GHZ - Conexão
        estável com alcance de até 10 metros. Praticamente sem demoras ou
        quedas, para você trabalhar com confiança. Testado até 10 metros, o
        alcance pode variar um pouco dependendo das condições do seu computador
        e do ambiente. Até 12 Meses de Vida Útil da Bateria - Utilize por até um
        ano sem precisar trocar a bateria.
      </Box>
    </Box>
  )
}
