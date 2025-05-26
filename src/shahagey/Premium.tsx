import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';


const Premium = () => {
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
          Available premium class
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 4 }}>
  <Grid item xs={12} sm={6} md={3}>
    <Card 
      sx={{ 
        borderRadius: 3, 
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
        }
      }}
      onClick={() => console.log('Toyota 2016 clicked')}
    >
      <CardMedia component="img" height="180" image="https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&h=180&fit=crop" />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Договорная</Typography>
        <Typography variant="body2" color="text.secondary">Toyota 2016</Typography>
        <Typography variant="body2" color="text.secondary">г.Бишкек</Typography>
      </CardContent>
    </Card>
  </Grid>
  
        <Grid item xs={12} sm={6} md={3}>
            <Card 
            sx={{ 
                borderRadius: 3, 
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
                }
            }}
            onClick={() => console.log('Lexus 2021 clicked')}
            >
            <CardMedia component="img" height="180" image="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=180&fit=crop" />
            <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>130 $</Typography>
                <Typography variant="body2" color="text.secondary">Lexus 2021</Typography>
                <Typography variant="body2" color="text.secondary">г.Бишкек</Typography>
            </CardContent>
            </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
            <Card 
            sx={{ 
                borderRadius: 3, 
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
                }
            }}
            onClick={() => console.log('Toyota 2020 clicked')}
            >
            <CardMedia component="img" height="180" image="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=180&fit=crop" />
            <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>150$</Typography>
                <Typography variant="body2" color="text.secondary">Toyota 2020</Typography>
                <Typography variant="body2" color="text.secondary">г.Бишкек</Typography>
            </CardContent>
            </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
            <Card 
            sx={{ 
                borderRadius: 3, 
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
                }
            }}
            onClick={() => console.log('Toyota 2016 clicked')}
            >
            
            </Card>
        </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Premium;