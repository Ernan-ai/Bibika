import React, { useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Paper, Divider, IconButton, TextField, InputAdornment } from '@mui/material';
import { Search, MoreVert, Circle } from '@mui/icons-material';

const Chats = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Seller',
      lastMessage: 'Машина доступна на завтра?',
      time: '14:30',
      avatar: 'A',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Seller',
      lastMessage: 'Спасибо за быструю аренду!',
      time: '12:15',
      avatar: 'M',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Seller',
      lastMessage: 'Можно посмотреть фото салона?',
      time: '11:45',
      avatar: 'D',
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: 'Seller',
      lastMessage: 'Отличный сервис, рекомендую',
      time: 'Вчера',
      avatar: 'E',
      unread: 0,
      online: false
    },
    {
      id: 5,
      name: 'Seller',
      lastMessage: 'Когда можно забрать ключи?',
      time: 'Вчера',
      avatar: 'S',
      unread: 3,
      online: true
    },
    {
      id: 6,
      name: 'Seller',
      lastMessage: 'Машина в отличном состоянии',
      time: '2 дня назад',
      avatar: 'А',
      unread: 0,
      online: false
    }
  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            color: '#1f2937',
            mb: 2
          }}
        >
          Чаты
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#6b7280',
            mb: 3
          }}
        >
          Ваши разговоры с клиентами и арендодателями
        </Typography>

        <TextField
          fullWidth
          placeholder="Поиск чатов..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#6b7280' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: '#f9fafb'
            }
          }}
        />
      </Box>

      <Paper sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        <List sx={{ p: 0 }}>
          {filteredChats.map((chat, index) => (
            <React.Fragment key={chat.id}>
              <ListItem
                sx={{
                  py: 2,
                  px: 3,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#f9fafb'
                  }
                }}
              >
                <ListItemAvatar>
                  <Box sx={{ position: 'relative' }}>
                    <Avatar 
                      sx={{ 
                        backgroundColor: '#2563eb',
                        fontWeight: 600,
                        width: 48,
                        height: 48
                      }}
                    >
                      {chat.avatar}
                    </Avatar>
                    {chat.online && (
                      <Circle
                        sx={{
                          position: 'absolute',
                          bottom: 2,
                          right: 2,
                          color: '#10b981',
                          fontSize: 16,
                          backgroundColor: 'white',
                          borderRadius: '50%'
                        }}
                      />
                    )}
                  </Box>
                </ListItemAvatar>
                
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: '#1f2937'
                        }}
                      >
                        {chat.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#6b7280'
                        }}
                      >
                        {chat.time}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#6b7280',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '250px'
                        }}
                      >
                        {chat.lastMessage}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {chat.unread > 0 && (
                          <Box
                            sx={{
                              backgroundColor: '#ef4444',
                              color: 'white',
                              borderRadius: '50%',
                              minWidth: 20,
                              height: 20,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                              fontWeight: 600
                            }}
                          >
                            {chat.unread}
                          </Box>
                        )}
                        <IconButton size="small" sx={{ color: '#6b7280' }}>
                          <MoreVert fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
              {index < filteredChats.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {filteredChats.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" sx={{ color: '#6b7280', mb: 2 }}>
            Чаты не найдены
          </Typography>
          <Typography variant="body2" sx={{ color: '#9ca3af' }}>
            Попробуйте изменить поисковый запрос
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Chats;