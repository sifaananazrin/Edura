import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          404 
        </Typography>
        <Typography variant="h4" gutterBottom>
          Oops! Page not found!
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for might have been removed or is temporarily unavailable.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Go back to home page
        </Button>
      </Container>
    </div>
  );
};


export default NotFound;
