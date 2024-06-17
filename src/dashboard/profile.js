import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUserEmail } from '../userEmailProvider';

export default function Profile() {

  const { userEmail } = useUserEmail();
  const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: userEmail
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/profile/${userEmail}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    // Fetch user profile when the component mounts
    fetchProfile();
  }, [userEmail]); // Run only once when the component mounts

  // State for form fields
  const [formData, setFormData] = useState({ ...user });

  // Save profile details
  const handleSaveDetails = () => {
    setUser({ ...formData });
    // You can add logic here to save data to backend or perform other actions
    // For now, let's just log the updated user data
    console.log('Updated user data:', formData);
  };

  // Delete account
  const handleDeleteAccount = () => {
    // You can add logic here to delete the account from backend or perform other actions
    // For now, let's just log a message
    console.log('Account deleted');
  };

  return (
    <div>
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 6 }}>
        {/* Back to Dashboard Button */}
        <Button component={Link} to="/dashboard" variant="outlined" sx={{ mb: 2 }}>Back to Dashboard</Button>

        {/* Profile Details */}
        <Box mb={3} >
          <Typography variant="h5" mb={2}>Profile Details</Typography>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={(e) => setUser(prevUser => ({ ...prevUser, firstName: e.target.value }))}
            // disabled
            mb={1}
            style={{marginBottom: '10px'}}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={(e) => setUser(prevUser => ({ ...prevUser, lastName: e.target.value }))}
            // disabled
            mb={1}
            style={{marginBottom: '10px'}}
          />
          <Button variant="contained" color="primary" onClick={handleSaveDetails}>Save Details</Button>
        </Box>

        {/* Email */}
        <Box mb={3}>
          <Typography variant="h5" mb={2}>Email</Typography>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={user.email}
            disabled
            mb={1}
          />
        </Box>

        {/* Delete Account */}
        <Box>
          <Typography variant="h5" mb={2}>Delete Account</Typography>
          <Typography variant="body1" mb={2}>Once you delete your account, there is no going back. Please be certain.</Typography>
          <Button variant="contained" color="error" onClick={handleDeleteAccount}>Delete Account</Button>
        </Box>
      </Box>
    </div>
  );
};
