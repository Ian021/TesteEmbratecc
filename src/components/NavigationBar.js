import { GitHub } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'

export default function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit">
          <Typography variant="h6" sx={{ textTransform: 'none' }}>
            EvoMouse
          </Typography>
        </Button>

        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Typography>Olá, </Typography>
          <Typography
            sx={{
              textDecoration: 'underline',
              marginLeft: '3px',
              cursor: 'pointer',
            }}
          >
            fulano
          </Typography>

          <IconButton
            size="large"
            edge="start"
            sx={{ marginLeft: 1 }}
            color="inherit"
          >
            <GitHub />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
