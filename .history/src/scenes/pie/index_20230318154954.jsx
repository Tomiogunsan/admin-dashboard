import React from 'react'
import {Box} from '@mui/material'
import Header from '../../components/Header'

export default function Pie() {
  return (
    <Box m='20px'>
    <Header title='Bar Chart' subtitle='Simple Bar Chart'/>
    <Box height='75vh'>
        <Chart />
    </Box>
</Box>
)
  
}
