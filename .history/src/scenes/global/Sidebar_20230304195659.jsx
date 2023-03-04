import React, {useState} from 'react'
import {ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import 'react-pro-sidebar/dist/css/style.css';
import { Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from 'react-router-dom'
import {tokens} from '../../theme'
import  HomeOutlinedIcon  from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon  from '@mui/icons-material/PeopleOutlined'
import  ContactOutlinedIcon  from '@mui/icons-material/ContactOutlined'
import  ReceiptOutlinedIcon  from '@mui/icons-material/ReceiptOutlined'
import  PersonOutlinedIcon  from '@mui/icons-material/LPersonOutlined'
import  CalenderTodayOutlinedIcon  from '@mui/icons-material/CalenderTodayOutlined'
import  HelpOutlinedIcon  from '@mui/icons-material/HelpOutlined'
import  BarChartOutlinedIcon  from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon  from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon  from '@mui/icons-material/TimelineOutlined'
import  MenuOutlinedIcon  from '@mui/icons-material/MenuOutlined'
import  MapOutlinedIcon  from '@mui/icons-material/MapOutlined'



export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard')
  return (
    <Box sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor:
      }
    }}>

    </Box>
  )
}

