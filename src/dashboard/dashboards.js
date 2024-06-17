import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function Component() {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Uploaded file:', file);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom> Dashboards </Typography>
      &nbsp;
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, border: '1px dashed', borderRadius: '12px', width: '223px', height: '185px', cursor: 'pointer' }} onClick={handleFileUpload} >
        <input type="file" accept=".csv, .xlsx, .xls" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', bgcolor: 'white', borderRadius: '50%' }} >
            <AddCircleRoundedIcon sx={{ color: '#2f80ed',height: '40px', width: '40px'}} />
          </Box>
        <Typography variant="subtitle1" sx={{ mt: 1, color: '#2f80ed' }}>Add Dashboard</Typography>
      </Box>
    </>
  );
}
