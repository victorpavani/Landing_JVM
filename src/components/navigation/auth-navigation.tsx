import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import { Link as ScrollLink } from 'react-scroll'
import type { Navigation } from '@/interfaces/navigation'

const contato: Navigation[] = [
  {
    label: 'Solicitar orçamento',
    path: 'newsletter', // '/',
  },
]

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {contato.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: '#091843',
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
           <StyledButton disableHoverEffect={false}>
            {label}
            </StyledButton>
        </Box>
      ))}
    </Box>
  )
}

export default AuthNavigation