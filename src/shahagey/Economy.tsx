import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Economy = () => {
    const [selectedCar, setSelectedCar] = useState(null);
    const navigate = useNavigate();
    
    const cars = [
      {
        id: 1,
        title: 'Honda fit',
        price: 'Договорная',
        location: 'г.Бишкек',
        image: 'https://www.carjunction.com/car_images2/14941_26851/26851k.jpg',
        description: 'Fitaras'
      },
      {
        id: 2,
        title: 'Lada priora',
        price: '20 $',
        location: 'г.Бишкек',
        image: 'https://cdn3.focus.bg/autodata/i/vaz/priora/priora-sedan/large/70bf304d1d0846eb8542166ed3e99898.jpg',
        description: 'Lada'
      },
      {
        id: 3,
        title: 'Kia morning ',
        price: '30$',
        location: 'г.Бишкек',
        image: 'data:image/jpeg;base64,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',
        description: 'Small car'
      }
    ];
  
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
            Available Economy class
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {cars.map((car) => (
              <Grid item xs={12} sm={6} md={3} key={car.id}>
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
                  onClick={() => setSelectedCar(car)}
                >
                  <CardMedia component="img" height="180" image={car.image} />
                  <CardContent sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{car.price}</Typography>
                    <Typography variant="body2" color="text.secondary">{car.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{car.location}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
  
        {/* Modal for selected car */}
        {selectedCar && (
          <Box 
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1300,
              p: 2
            }}
            onClick={() => setSelectedCar(null)}
          >
            <Card 
              sx={{ 
                maxWidth: 500,
                width: '100%',
                borderRadius: 3,
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={selectedCar.image}
                  alt={selectedCar.title}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f3f4f6'
                    }
                  }}
                  onClick={() => setSelectedCar(null)}
                >
                  <Typography sx={{ color: '#6b7280', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    ×
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#1f2937',
                    mb: 2
                  }}
                >
                  {selectedCar.title} - {selectedCar.price}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#6b7280',
                    mb: 2,
                    lineHeight: 1.6
                  }}
                >
                  {selectedCar.location}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#6b7280',
                    mb: 4,
                    lineHeight: 1.6
                  }}
                >
                  {selectedCar.description}
                </Typography>
                <Box
                  sx={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    py: 2,
                    px: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#1d4ed8'
                    }
                  }}
                  onClick={() => navigate('/seller')}
                >
                  Contact Owner
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
      </Container>
    );
  };


  export default Economy;