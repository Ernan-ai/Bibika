import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Special = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        mt: 8, 
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700,
            color: '#1f2937',
            mb: 3,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Available special cars
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#6b7280',
            maxWidth: '600px',
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          Page in progress.
        </Typography>
      </Box>
    </Container>
  );
};

export default Special;