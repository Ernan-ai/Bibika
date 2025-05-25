import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const CarRentalLanding = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: 'Семейные авто',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=200&fit=crop',
      description: 'Просторные и комфортные автомобили для семейных поездок'
    },
    {
      id: 2,
      title: 'Машины для путешествий',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&h=200&fit=crop',
      description: 'Надежные автомобили для дальних путешествий'
    },
    {
      id: 3,
      title: 'Эконом-класс',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop',
      description: 'Экономичные и доступные варианты'
    },
    {
      id: 4,
      title: 'Премиум и бизнес',
      image: 'https://car-images.bauersecure.com/wp-images/164826/1056x594/best_electric_luxury_car_bmw_i7.jpg',
      description: 'Роскошные автомобили для особых случаев'
    },
    {
      id: 5,
      title: 'Внедорожники и кроссоверы',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=300&h=200&fit=crop',
      description: 'Мощные внедорожники для любых дорог'
    },
    {
      id: 6,
      title: 'Машины для особых случаев (мероприятий)',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop',
      description: 'Эксклюзивные автомобили для торжественных событий'
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section with Blue Car Icon */}
      <Box sx={{ 
        backgroundColor: 'white',
        py: 8,
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Large Blue Car Icon */}
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
          {/* Small Car Icon */}
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
            Арендуй свою идеальную машину за минуту
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
            Платформа, которая соединяет владельцев авто и клиентов — быстро, удобно и безопасно.
            От надёжных внедорожников до экономичных седанов — арендуй то, что подходит именно
            тебе, без посредников и скрытых комиссий.
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
          Популярные категории
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
              >
                Посмотреть автомобили
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default CarRentalLanding;