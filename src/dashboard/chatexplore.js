import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ChatExplore() {
    const [query, setQuery] = useState('');
    const [responses, setResponses] = useState([]);
    const navigate = useNavigate(); // Getting navigate function

    // Function to handle user query submission
    const handleSubmit = () => {
        // Here you would handle the user query, process it, and fetch responses from the backend
        // For demonstration purposes, I'm just adding a mock response
        const mockResponse = {
            type: 'text',
            content: 'This is a mock response. Replace it with actual response from backend.'
        };

        setResponses([...responses, mockResponse]);
        setQuery(''); // Clear the input field after submission
    };

    const redirectToDashboard = () => {
        navigate('/dashboard'); // Specify the path of your dashboard page
    };

    return (
        <>
            <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
                    <button onClick={redirectToDashboard} style={{ position: 'absolute', top: 15, left: 10 }}>
                        Go to Dashboard
                    </button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Chat Exploration
                </Typography>
                <Box sx={{ width: '80%', maxWidth: 600 }}>
                    <Box sx={{ border: '1px solid #ccc', borderRadius: 4, padding: 2, marginBottom: 2, minHeight: 300, maxHeight: 500, overflowY: 'auto' }}>
                        {responses.map((response, index) => (
                            <div key={index} style={{ marginBottom: 10 }}>
                                {response.type === 'text' && (
                                    <Typography variant="body1" gutterBottom>
                                        {response.content}
                                    </Typography>
                                )}
                                {/* Add other types of responses (e.g., images, charts) here */}
                            </div>
                        ))}
                    </Box>
                    <TextField
                        label="Type your query here"
                        variant="outlined"
                        fullWidth
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ marginBottom: 10 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    );
}
