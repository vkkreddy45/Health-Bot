// Shortcut for startup code - rfce

import React, { useRef } from 'react';
import { Typography, Grid, Box, Divider } from '@mui/material';
import axios from 'axios';
import { useUserEmail } from '../userEmailProvider';
import { useNavigate } from 'react-router-dom';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function Projects() {
    const fileInputRef = useRef(null);
    const { userEmail } = useUserEmail();
    const navigate = useNavigate();

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('uploadedBy', userEmail);

        try {
            const response = await axios.post('http://127.0.0.1:5000/upload_and_parse_file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File upload successful:', response.data);
            const jsonData = JSON.parse(response.data.data);
            const data_types = response.data.data_types;
            console.log("Data Types: ",data_types);
            navigate(`/datapreprocessing?data=${encodeURIComponent(JSON.stringify(jsonData))}&data_types=${encodeURIComponent(JSON.stringify(data_types))}`);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <>
         <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h5" gutterBottom> Projects </Typography>
                &nbsp;
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, border: '1px dashed', borderRadius: '12px', width: '223px', height: '185px', cursor: 'pointer' }} onClick={handleFileUpload} >
                    <input type="file" accept=".csv, .xlsx, .xls" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', bgcolor: 'white', borderRadius: '50%' }} >
                        <AddCircleRoundedIcon sx={{ color: '#2f80ed',height: '40px', width: '40px'}} />
                    </Box>
                    <Typography variant="subtitle1" sx={{ mt: 1, color: '#2f80ed' }}>Create New Project</Typography>
                </Box>
            </Grid>
        </Grid>
        </>
    );
}