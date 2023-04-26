import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../App.css'

const PageWithMUI = () => {

    const rows = [
        { id: 1, col1: '1', col2: '456521', col3: '12.04.2023', col4: 'Generating invoice', col5: '100', col6: '10', col7: '1000', col8: 'Shevchenko T. G.', col9: 'Altronica Systems OÜ'},
        { id: 2, col1: '2', col2: '203245', col3: '05.05.2023', col4: 'Web page creation', col5: '200', col6: '10', col7: '2000', col8: 'Lesya Ukrainka', col9: 'Altronica Systems OÜ' },
        { id: 3, col1: '3', col2: '809546', col3: '26.01.2023', col4: 'Pet the cat', col5: '500', col6: '10', col7: '5000', col8: 'Omar Khayyam', col9: 'Altronica Systems OÜ' },
        { id: 4, col1: '4', col2: '102222', col3: '24.04.2023', col4: 'Testing invoice', col5: '100', col6: '5', col7: '500', col8: 'Shevchenko T. G.', col9: 'Altronica Systems OÜ' },
        { id: 5, col1: '5', col2: '099999', col3: '30.03.2023', col4: 'Create page with bootstrap and mui', col5: '100', col6: '10', col7: '1000', col8: 'Raffaello Giovagnoli', col9: 'Altronica Systems OÜ' }
    ];

    const columns = [
        {field: 'col1', headerName: 'Id', flex:1, headerClassName: 'AppBar-header'},
        {field: 'col2', headerName: 'Number', flex: 1, headerClassName: 'AppBar-header'},
        {field: 'col3', headerName: 'Date', flex: 1, headerClassName: 'AppBar-header'},
        {field: 'col4', headerName: 'Description', flex: 3, headerClassName: 'AppBar-header'},
        {field: 'col5', headerName: 'Price', flex: 1, headerClassName: 'AppBar-header'},
        {field: 'col6', headerName: 'Quantity', flex: 1, headerClassName: 'AppBar-header'},
        {field: 'col7', headerName: 'Amount', flex: 1, headerClassName: 'AppBar-header'},
        {field: 'col8', headerName: 'Supplier', flex: 2, headerClassName: 'AppBar-header'},
        {field: 'col9', headerName: 'Customer', flex: 2, headerClassName: 'AppBar-header'},
        {
            field: 'col10',
            headerName: '',
            sortable: false,
            filterable: false,
            width : 50,
            renderCell: row =>
                <IconButton>
                    <EditIcon color="primary" />
                </IconButton>
        },
        {
            field: 'col11',
            headerName: '',
            sortable: false,
            filterable: false,
            width : 50,
            renderCell: row =>
                <IconButton>
                    <PictureAsPdfIcon  />
                </IconButton>
        },
        {
            field: 'col12',
            headerName: '',
            sortable: false,
            filterable: false,
            width : 50,
            renderCell: row =>
                <IconButton>
                    <DeleteIcon color="error" />
                </IconButton>
        }
    ];

    return (
        <>
                <AppBar position="static" style={{ background: '#2962FF' }}>
                    <Toolbar>
                        <ArticleIcon fontSize="large" edge="start" sx={{ mr: 2 }}/>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Invoice
                        </Typography>
                        <Button color="inherit" sx={{ mr: 2 }}>  <HomeIcon sx={{ mr: 1}}/> Home</Button>
                        <Button color="inherit" sx={{ mr: 2 }}> <ListAltIcon sx={{ mr: 1}}/> Entities</Button>
                        <Button color="inherit" sx={{ mr: 2 }}> <AdminPanelSettingsIcon sx={{ mr: 1}}/> Administration</Button>
                        <Button color="inherit" sx={{ mr: 2 }}> <AccountCircleIcon sx={{ mr: 1}}/> Account</Button>
                    </Toolbar>
                </AppBar>
            <Stack alignItems="end" mt={2} mb={2} mr={2}>
                <Button variant="contained">
                    <AddIcon/>
                    New invoice
                </Button>
            </Stack>
            <Stack mt={2} ml={2} mr={2}>
                <DataGrid columns={columns} rows={rows} />
            </Stack>
        </>
    );
}

export default PageWithMUI;