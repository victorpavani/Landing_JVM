import React, { ReactNode } from 'react'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HtmlIcon from '@mui/icons-material/Html';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LanguageIcon from '@mui/icons-material/Language';

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'UI/UX DESIGN',
    description: 'Melhore a experiência dos seus usuários com um design de interface intuitivo e atraente.',
    icon: <DesignServicesIcon/>,
  },
  {
    title: 'Desenvolvimento Web e Mobile',
    description: 'Crie uma presença online impactante com um web design elegante e responsivo.',
    icon: <HtmlIcon/>,
  },
  {
    title: 'Suporte',
    description: 'Fique tranquilo e deixe o nosso serviço de suporte cuidar de todas as suas necessidades',
    icon: <SupportAgentIcon/>,
  },
  {
    title: 'Serviço personalizado',
    description: 'Oferecemos um serviço personalizado porque acreditamos que cada necessidade é única',
    icon: <ManageAccountsIcon/>,
  },
  {
    title: 'Web Strategy',
    description: 'Alcance o sucesso online com nossa estratégia web sob medida',
    icon: <LanguageIcon/>,
  },
]
