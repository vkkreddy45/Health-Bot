import { Typography, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const columns = [
    { field: 'name', headerName: 'Name', width: 70 },
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'lastUpdated', headerName: 'Last Updated', width: 130 },
    { field: 'datecreated', headerName: 'Date Created', width: 130},
  ];
  
  const rows = [
    { name: 'heart.csv', id: 'H6bX22C4Tu4wRFbhS2EJ', lastUpdated: '01/29/2024', datecreated: '01/29/2024'},
  ];

export default function Datasets(){
    return(
        <>
            <Typography variant="h5" gutterBottom> Datasets </Typography>
            <Search style={{marginLeft: '4px'}}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search connections..." inputProps={{ 'aria-label': 'search' }} />
            </Search>
            &nbsp;
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            </div>

        </>
    );
}