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
        const calendarApi = selected.view.calender;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
        console.log(selected)
    };

    function handleEventClick(selected){
        if(window.confirm('Are you sure you want to delete the event `$`'))
    }
  return (
    <div>Calender</div>
  )
}
