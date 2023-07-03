import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 2, md: 5 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'primary.contrast',
            borderRadius: 10,
            py: { xs: 0, md: 3 },
            px: { xs: 1, md: 0 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            CONTATO
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column' },
              justifyContent: 'space-around',
              width: { xs: '20%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 3 },
              }}
              placeholder="Nome Completo"
            />
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 3 },
              }}
              placeholder="Email"
            />
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 3 },
              }}
              placeholder="Mensagem"
            />
            <Box>
              <StyledButton disableHoverEffect size="large">
                ENVIAR
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
