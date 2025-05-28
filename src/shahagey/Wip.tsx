import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConstructionIcon from '@mui/icons-material/Construction';

const Wip = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="sm">
        <Box sx={{ 
          textAlign: 'center',
          backgroundColor: 'white',
          borderRadius: 3,
          p: 6,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}>
          <ConstructionIcon sx={{ 
            fontSize: 80, 
            color: '#f59e0b',
            mb: 3
          }} />
          
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              color: '#1f2937',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Page in Progress
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#6b7280',
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            This page is currently under development. Please check back later!
          </Typography>
          
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#2563eb',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#1d4ed8'
              }
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Wip;