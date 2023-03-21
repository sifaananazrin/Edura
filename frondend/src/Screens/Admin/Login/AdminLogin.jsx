import React from 'react';
import { Button, FormControl, FormGroup, FormLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Link} from 'react-router-dom'

const labelStyle = { mt: 1, mb: 1 };

function AdminLogin() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <FormControl>
        <FormGroup>
          <Box
            padding={6}
            display={"flex"}
            justifyContent={"center"}
            flexDirection="column"
            width={400}
            margin="auto"
            alignContent={"center"}
            sx={{
              border: '1px solid #ccc',
              borderRadius: 10,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              bgcolor: '#fff',
            }}
          >
            <Typography variant="h4" textAlign={"center"} sx={{ mb: 4 }}>
              Login
            </Typography>
            <FormLabel sx={labelStyle}>Email</FormLabel>
            <TextField
              margin="normal"
              variant="standard"
              type="email"
              name="email"
              sx={{ bgcolor: '#f9f9f9' }}
            />
            <FormLabel sx={labelStyle}>Password</FormLabel>
            <TextField
              margin="normal"
              variant="standard"
              type="password"
              name="password"
              sx={{ bgcolor: '#f9f9f9' }}
            />

<Link to="/admin/home">
  <Button
    sx={{
      mt: 4,
      borderRadius: 10,
      bgcolor: "#2b2d42",
      color: '#fff',
      '&:hover': {
        bgcolor: "#1d1f33",
      },
    }}
    type='submit'
    fullWidth
    variant='contained'
  >
    Login
  </Button>
</Link>
          </Box>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default AdminLogin;
