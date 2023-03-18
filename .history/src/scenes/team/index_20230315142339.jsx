import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid';
import {tokens} from '../../theme'
import { mockDataTeam } from '../../data/mockData';
import { AdminPanelSettingsOutlinedIcon } from '@mui/icons-material/AdminPanelSettingsOutlined';
import { LocOpenOutlinedIcon } from '@mui/icons-material/LockOpenOutlined';
import { SecurityOutlinedIcon } from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header';

export default function Team() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'name', 
        headerName:'Name', 
        flex: 1,
         cellClassName: 'name-column--cell',
        },
        {field: 'age', 
        headerName:'Age', 
        type: 'number',
        headerAlign: 'left',
         align: 'left',
        },
        {field: 'phone', 
        headerName:'Phone Number', 
       flex: 1,
        },
        {field: 'email', 
        headerName:'Email', 
       flex: 1,
        },
        {field: 'access', 
        headerName:'Access Level', 
       flex: 1,
       renderCell: ({row: { access}}) => {
            return (
                <Box width='60%' m='0 auto' p='5px' display='flex'
                justifyContent='center' backgroundColor={access === 'admin' ? colors.greenAccent[600]:
                colors.greenAccent[700]}
                borderRadius='4px' >
                        {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
                        {access === 'manager' && <SecurityOutlinedIcon />}
                        {}
                </Box>
            )
       }
        },
        
    ]
  return (
    <Box>
        <Header title='TEAM'
         subtitle='Managing the Team Members' />
         <Box>
            <DataGrid rows={mockDataTeam} columns={columns}/>
         </Box>
    </Box>
  )
}

