// import React from 'react';
// import { Typography, Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function DataPreprocessing() {
//     const location = useLocation();
//     const navigate = useNavigate(); // Getting navigate function
//     const queryParams = new URLSearchParams(location.search);
//     const data = JSON.parse(queryParams.get('data'));

//     // Function to navigate to the dashboard page
//     const redirectToDashboard = () => {
//         navigate('/dashboard'); // Specify the path of your dashboard page
//     };

//     return (
//         <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
//             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
//                 <button onClick={redirectToDashboard} style={{ position: 'absolute', top: 15, left: 10 }}>
//                     Go to Dashboard
//                 </button>
//                 <Typography variant="h6" gutterBottom>
//                     Data Preprocessing
//                 </Typography>
//                 <button onClick={redirectToDashboard} style={{ position: 'absolute', top: 15, right: 10 }}>
//                     Chat Explore
//                 </button>
//             </Box>
//             <Table sx={{ minWidth: 650 }}>
//                 <TableHead>
//                     <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
//                         {Object.keys(data[0]).map((column, index) => (
//                             <TableCell key={index} sx={{ fontWeight: 'bold', color: '#333', borderBottom: '2px solid #ddd', borderRight: '1px solid #ddd' }}>
//                                 {column}
//                             </TableCell>
//                         ))}
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {data.map((row, rowIndex) => (
//                         <TableRow key={rowIndex} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
//                             {Object.values(row).map((cell, cellIndex) => (
//                                 <TableCell key={cellIndex} sx={{ borderBottom: '1px solid #ddd', padding: '10px', borderRight: '1px solid #ddd' }}>{cell}</TableCell>
//                             ))}
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </Box>
//     );
// }



import React from 'react';
import { Typography, Box, Table, TableHead, TableBody, TableRow, TableCell, Divider, Select, MenuItem } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DataPreprocessing() {
    const location = useLocation();
    const navigate = useNavigate(); // Getting navigate function
    const queryParams = new URLSearchParams(location.search);
    const data = JSON.parse(queryParams.get('data'));
    const data_types = JSON.parse(queryParams.get('data_types'));

    // Function to navigate to the dashboard page
    const redirectToDashboard = () => {
        navigate('/dashboard'); // Specify the path of your dashboard page
    };

    // Function to navigate to the chat explore page
    const redirectToChatExplore = () => {
        navigate('/chatexplore'); // Specify the path of your chat explore page
    };

    return (
        <Box sx={{ maxWidth: '100%', overflowX: 'auto'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
                <button onClick={redirectToDashboard} style={{ position: 'absolute', top: 15, left: 10 }}>
                    Go to Dashboard
                </button>
                <Typography variant="h6" gutterBottom>
                    Data Preprocessing
                </Typography>
                <Divider sx={{ width: '100%'}}/>
                &nbsp;
                <button onClick={redirectToChatExplore} style={{ position: 'absolute', top: 15, right: 10 }}>
                    Chat Explore
                </button>
            </Box>
            <div style={{ maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', overflowX: 'auto', marginLeft: '2%' }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead style={{ position: 'sticky', top: 0, backgroundColor: '#f5f5f5', zIndex: 1 }}>
                        <TableRow>
                            {Object.keys(data[0]).map((column, index) => (
                                <TableCell key={index} sx={{ fontWeight: 'bold', color: '#333', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            {Object.keys(data_types).map((column, index) => (
                                <TableCell key={index} sx={{ fontWeight: 'bold', color: '#333', borderBottom: '0px solid #ddd', borderRight: '1px solid #ddd' }}>
                                    <Select value={data_types[column]}>
                                        <MenuItem value={data_types[column]}> {data_types[column]} </MenuItem>
                                    </Select>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <TableCell key={cellIndex} sx={{ borderBottom: '1px solid #ddd', padding: '10px', borderRight: '1px solid #ddd' }}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Box>
    );
}
