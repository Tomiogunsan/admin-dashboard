import React from 'react'
import {Box, IconButton, useTheme} from '@mui/material'
import {ColorModeContext, tokens} from '../../theme'
import InputBase from '@mui/material'
import  LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined'
import  DarkModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined'
import  NotificationsOutlinedIcon  from '@mui/icons-material/LightModeOutlined'
import  SettingsOutlinedIcon  from '@mui/icons-material/LightModeOutlined'
import  PersonOutlinedIcon  from '@mui/icons-material/LightModeOutlined'
import  SearchIcon  from '@mui/icons-material/LightModeOutlined'

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <div>Topbar</div>
  )
}
