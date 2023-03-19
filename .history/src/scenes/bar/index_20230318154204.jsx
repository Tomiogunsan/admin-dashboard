import React from 'react'
import {Box} from '@mui/material'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'

export default function Bar() {
  return (
    <Box m='20px'>
        <Header title='Bar Chart' subtitle='Simple Bar Chart'/>
        <Box>
            <BarChart
        </Box>
    </Box>
  )
}
