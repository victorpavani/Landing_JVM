import React, { ReactNode } from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import StoreIcon from '@mui/icons-material/Store';

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Business Growth',
    description: 'Impulsione o crescimento do seu negócio com estratégias eficientes e inovadoras',
    icon: <BusinessIcon/>,
  },
  {
    title: 'User Research',
    description: 'Descubra o que seus usuários realmente desejam com o user research',
    icon: <SupervisedUserCircleIcon/>,
  },
  {
    title: 'Big Data Solution',
    description: 'Desbloqueie insights valiosos e tome decisões baseadas em dados com a nossa solução de Big Data',
    icon: <BarChartIcon/>,
  },
  {
    title: 'Product Design',
    description: 'Transforme suas ideias em produtos de sucesso com o product design',
    icon: <StoreIcon/>,
  },
]
