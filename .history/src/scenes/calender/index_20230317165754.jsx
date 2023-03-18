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
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([])

    function handleDateClick(selected){
        const title = prompt('Please enter a new title for your event')
        const calenedarApi = selected.view.calender;
        cale
    }
  return (
    <div>Calender</div>
  )
}
