import { GitHub } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'

export default function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: 'black',
        }}
      >
        <Button color="inherit">
          <img src={'/logo192.png'} alt="logo" height="50px" />
          <Typography
            variant="h6"
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
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

          <Link href="https://github.com/Ian021/TesteEmbratecc" color="inherit">
            <IconButton
              size="large"
              edge="start"
              sx={{ marginLeft: 1 }}
              color="inherit"
            >
              <GitHub />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
