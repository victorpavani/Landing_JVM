import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Business Growth',
    description: 'Impulsione o crescimento do seu negócio com estratégias eficientes e inovadoras',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'User Research',
    description: 'Descubra o que seus usuários realmente desejam com o user research',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Big Data Solution',
    description: 'Desbloqueie insights valiosos e tome decisões baseadas em dados com a nossa solução de Big Data',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Product Design',
    description: 'Transforme suas ideias em produtos de sucesso com o product design',
    icon: <ContactSupportIcon />,
  },
]
