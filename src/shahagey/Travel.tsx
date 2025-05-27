import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Travel = () => {
    const [selectedCar, setSelectedCar] = useState(null);
    const navigate = useNavigate();
    
    const cars = [
      {
        id: 1,
        title: 'Toyota Land Cruiser 2020',
        price: '180 $',
        location: 'г.Бишкек',
        image: 'data:image/jpeg;base64,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',
        description: 'Rugged SUV perfect for mountain trips and long-distance travel with excellent off-road capabilities'
      },
      {
        id: 2,
        title: 'Ford Explorer 2021',
        price: '150 $',
        location: 'г.Бишкек',
        image: 'https://hips.hearstapps.com/hmg-prod/images/2020-ford-explorer-platinum-101-1560790472.jpg?crop=0.794xw:0.885xh;0.148xw,0.0774xh&resize=980:*',
        description: 'Spacious family SUV ideal for road trips with ample cargo space and comfortable seating for 7'
      },
      {
        id: 3,
        title: 'Subaru Outback 2022',
        price: '130 $',
        location: 'г.Бишкек',
        image: 'https://www.edmunds.com/assets/m/subaru/outback/2022/oem/2022_subaru_outback_4dr-suv_limited_fq_oem_1_815.jpg',
        description: 'Adventure-ready wagon with all-wheel drive, perfect for camping trips and outdoor adventures'
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
            Available travel cars
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


  export default Travel;