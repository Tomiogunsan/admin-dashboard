import React, {useState} from 'react'
import FullCalender, {formatDate} from '@fullcalender/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {Box, List, ListItem, ListItemText, Typography, useTheme} from '@mui/material'
import Header from "../../components/Header";
import { tokens } from "../../theme";

export default function Calender() {
    const theme = useTheme();
    
  return (
    <div>Calender</div>
  )
}
