import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid';
import {tokens} from '../../theme'
import { mockDataInvoices } from '../../data/mockData';

import Header from '../../components/Header';
import {useTheme} from '@mui/material';

export default function Invoices() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'registrarId', headerName: 'Registrar ID'},
        {field: 'name', 
        headerName:'Name', 
        flex: 1,
         cellClassName: 'name-column--cell',
        },
        
        {field: 'phone', 
        headerName:'Phone Number', 
       flex: 1,
        },
        {field: 'email', 
        headerName:'Email', 
       flex: 1,
        },
        {field: 'cost', 
        headerName:'C', 
       flex: 1,
        },
        {
            field: 'address', 
        headerName:'Address', 
       flex: 1,
        },
        {
            field: 'city', 
        headerName:'City', 
       flex: 1,
        },
        {
            field: 'zipCode', 
        headerName:'ZipCode', 
       flex: 1,
        },
        
        
        
    ]
  return (
    <Box m='20px'>
        <Header title='CONTACTS'
         subtitle='List of Contacts for Future Reference' />
         <Box
         m='40px 0 0 0'
         height='75vh' 
         sx={{'& .MuiDataGrid-root': {
          border: 'none'
         },
         "& .muiDataGrid-cell": {
          borderBottom: 'none'
         },
         "& .name-column--cell": {
          color: colors.greenAccent[300]
         },
         "& .MuiDataGrid-columnHeaders":{
           backgroundColor: colors.blueAccent[700],
           borderBottom: 'none'
         },
         "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
         },
         "& .MuiDataGrid-footerContainer": {
          borderTop: 'none',
          backgroundColor: colors.blueAccent[700]
         },
         "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
         },
        
        }}
         >
            <DataGrid rows={mockDataContacts} columns={columns}
            components={{Toolbar: GridToolbar}}
            />
         </Box>
    </Box>
  )
}

