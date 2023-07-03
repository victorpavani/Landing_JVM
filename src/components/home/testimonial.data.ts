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
    title: 'UI/UX DESIGN',
    description: 'Melhore a experiência dos seus usuários com um design de interface intuitivo e atraente.',
  },
  {
    title: 'Desenvolvimento Web e Mobile',
    description: 'Crie uma presença online impactante com um web design elegante e responsivo.',
  },
  {
    title: 'Suporte',
    description: 'Fique tranquilo e deixe o nosso serviço de suporte cuidar de todas as suas necessidades',
  },
  {
    title: 'Serviço personalizado',
    description: 'Oferecemos um serviço personalizado porque acreditamos que cada necessidade é única',
  },
  {
    title: 'Web Strategy',
    description: 'Alcance o sucesso online com nossa estratégia web sob medida',
  },
]
