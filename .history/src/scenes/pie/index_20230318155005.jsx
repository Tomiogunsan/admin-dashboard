import React from 'react'
import {Box} from '@mui/material'
import Header from '../../components/Header'
import { PieChart } from '@mui/icons-material'

export default function Pie() {
  return (
    <Box m='20px'>
    <Header title='Bar Chart' subtitle='Simple Bar Chart'/>
    <Box height='75vh'>
        <PieChart />
    </Box>
</Box>
)
  
}
