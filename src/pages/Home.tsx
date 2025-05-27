import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const CarRentalLanding = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'Family SUVs',
      image: 'https://hips.hearstapps.com/hmg-prod/images/2020-lexus-gx460-101-1586193666.jpg?crop=1xw:1xh;center,top&resize=980:*',
      description: 'Spacious and comfortable cars for family trips'
    },
    {
      id: 2,
      title: 'Travel cars',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&h=200&fit=crop',
      description: 'Reliable cars for adventures'
    },
    {
      id: 3,
      title: 'Economy',
      image: 'https://images.hgmsites.net/med/2018-honda-fit_100612258_m.jpg',
      description: 'Cheap and easy access cars'
    },
    {
      id: 4,
      title: 'Premium and business class',
      image: 'https://car-images.bauersecure.com/wp-images/164826/1056x594/best_electric_luxury_car_bmw_i7.jpg',
      description: 'Beautiful cars for your special occasions'
    },
    {
      id: 5,
      title: 'OffRoad',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Jeep/Wrangler/11675/1714043545186/front-left-side-47.jpg?tr=w-664',
      description: 'Powerful Offroads for your trips'
    },
    {
      id: 6,
      title: 'Special occasions ',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop',
      description: 'Exclusive cars for your artistic needs '
    }
  ];

  const handleViewCars = (categoryId) => {
    const routes = {
      1: '/family',
      2: '/travel', 
      3: '/economy',
      4: '/premium',
      5: '/offroad',
      6: '/special'
    };
    navigate(routes[categoryId] || '/cars');
  };

  return (
    <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      
      <Box sx={{ 
        backgroundColor: 'white',
        py: 8,
        textAlign: 'center',
        position: 'relative'
      }}>
        
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.05,
          zIndex: 0
        }}>
          <DirectionsCarIcon sx={{ fontSize: 400, color: '#2563eb' }} />
        </Box>
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          
          <Box sx={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mb: 4
          }}>
            <Box sx={{ 
              width: 3,
              height: 1,
              backgroundColor: '#374151',
              borderRadius: 1
            }} />
            <Box sx={{ 
              width: 3,
              height: 1,
              backgroundColor: '#374151',
              borderRadius: 1
            }} />
            <Box sx={{
              border: '2px solid #2563eb',
              borderRadius: 2,
              p: 1,
              backgroundColor: 'white'
            }}>
              <DirectionsCarIcon sx={{ color: '#2563eb', fontSize: 32 }} />
            </Box>
          </Box>

          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#1f2937',
              mb: 3,
              lineHeight: 1.1
            }}
          >
            Rent your ideal car 
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#6b7280',
              maxWidth: '800px',
              margin: '0 auto',
              mb: 6,
              fontSize: '1.125rem',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            A platform that connects car owners and customers - fast, convenient and safe.
            From reliable SUVs to economical sedans - rent what suits you, without intermediaries and hidden fees.
          </Typography>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            textAlign: 'center',
            fontWeight: 700,
            color: '#1f2937',
            mb: 6,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Popular categories
        </Typography>
        
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e5e7eb',
                  borderRadius: 3,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    borderColor: '#2563eb'
                  }
                }}
                onClick={() => setSelectedCategory(category)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.title}
                  sx={{ 
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#1f2937',
                      mb: 1,
                      fontSize: '1.125rem'
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#6b7280',
                      lineHeight: 1.6
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal for selected category */}
      {selectedCategory && (
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
          onClick={() => setSelectedCategory(null)}
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
                image={selectedCategory.image}
                alt={selectedCategory.title}
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
                onClick={() => setSelectedCategory(null)}
              >
                <Typography sx={{ color: '#6b7280', fontWeight: 'bold', fontSize: '1.25rem' }}>
                  x
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
                {selectedCategory.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6b7280',
                  mb: 4,
                  lineHeight: 1.6
                }}
              >
                {selectedCategory.description}
                
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
                onClick={() => handleViewCars(selectedCategory.id)}
              >
                
                Available cars 
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Footer */}
      <Box sx={{ backgroundColor: '#87CEEB', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* О компании */}
          <Grid item xs={12} md={2.5}>
            <Typography variant="h6" sx={{ color: '#1f2937', fontWeight: 600, mb: 3 }}>
              About us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                About our project
              </Typography>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                Guidelines
              </Typography>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                Contacts
              </Typography>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                About us 
              </Typography>
            </Box>
          </Grid>

          {/* Пользователям */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#1f2937', fontWeight: 600, mb: 3 }}>
              For users
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                Russian Regions
              </Typography>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                User agreements 
              </Typography>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                Confidentiality
              </Typography>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                Sitemap
              </Typography>
              <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { textDecoration: 'underline' } }}>
                Add object
              </Typography>
            </Box>
          </Grid>

          {/* Chat Support */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box 
            sx={{ 
              backgroundColor: '#1f2937', 
              color: 'white', 
              px: 3, 
              py: 1.5, 
              borderRadius: 2,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              mb: 4,
              '&:hover': { backgroundColor: '#374151' }
            }}
            onClick={() => navigate('/support')}
          >
            Customer support
          </Box>
              <Typography variant="caption" sx={{ color: '#1f2937', mb: 2, fontSize: '0.9rem', alignSelf: 'center' }}>
                Social media
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', width: '100%' }}>
                <Box sx={{ width: 32, height: 32, backgroundColor: '#1e3a8a', borderRadius: 1 }}></Box>
                <Box sx={{ width: 32, height: 32, backgroundColor: '#1e3a8a', borderRadius: 1 }}></Box>
                <Box sx={{ width: 32, height: 32, backgroundColor: '#1e3a8a', borderRadius: 1 }}></Box>
              </Box>
            </Box>
          </Grid>

          {/* QR and App Downloads */}
          <Grid item xs={12} md={3.5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box 
                sx={{ 
                  width: 110, 
                  height: 110, 
                  backgroundColor: '#e5e7eb', 
                  borderRadius: 2,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography sx={{ color: '#6b7280', fontSize: '0.85rem', textAlign: 'center', fontWeight: 500 }}>
                  QR app
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
                <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
                  Download Apple
                </Typography>
                <Typography sx={{ color: '#1f2937', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
                  Download Android
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </Box>
  );
};

export default CarRentalLanding;