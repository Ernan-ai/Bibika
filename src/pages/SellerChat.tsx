import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Avatar,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Msg = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const autoResponses = [
    "No",
    "Im away right now, let's talk later?",
    "Yes",
    "I dont chat, call if urgent",
    "Lets meet in person "
  ];

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response after 1-2 seconds
    setTimeout(() => {
      const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton 
          onClick={() => navigate('/')}
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: '#2563eb' }}>
            <SupportAgentIcon />
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#1f2937' }}>
              Seller
            </Typography>
            <Typography variant="body2" sx={{ color: '#6b7280' }}>
              Online • Usually responds within a few minutes 
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Chat Container */}
      <Paper 
        elevation={1} 
        sx={{ 
          height: 500, 
          display: 'flex', 
          flexDirection: 'column',
          borderRadius: 3,
          overflow: 'hidden'
        }}
      >
        {/* Messages Area */}
        <Box 
          sx={{ 
            flex: 1, 
            p: 2, 
            overflowY: 'auto',
            backgroundColor: '#f8fafc'
          }}
        >
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                mb: 2
              }}
            >
              <Box
                sx={{
                  maxWidth: '70%',
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: message.isUser ? '#2563eb' : 'white',
                  color: message.isUser ? 'white' : '#1f2937',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  borderBottomLeftRadius: message.isUser ? 3 : 1,
                  borderBottomRightRadius: message.isUser ? 1 : 3
                }}
              >
                <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                  {message.text}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    opacity: 0.7,
                    display: 'block',
                    mt: 1,
                    fontSize: '0.75rem'
                  }}
                >
                  {message.timestamp.toLocaleTimeString('ru-RU', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Input Area */}
        <Box 
          sx={{ 
            p: 2, 
            backgroundColor: 'white',
            borderTop: '1px solid #e5e7eb'
          }}
        >
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              multiline
              maxRows={3}
              placeholder="Напишите ваше сообщение..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: '#f8fafc'
                }
              }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ''}
              sx={{
                minWidth: 56,
                height: 56,
                borderRadius: 3,
                backgroundColor: '#2563eb',
                '&:hover': {
                  backgroundColor: '#1d4ed8'
                },
                '&:disabled': {
                  backgroundColor: '#e5e7eb'
                }
              }}
            >
              <SendIcon sx={{ color: 'white' }} />
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Quick Actions */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" sx={{ color: '#1f2937', mb: 2, fontWeight: 600 }}>
          Часто задаваемые вопросы
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {[
            "Hey is this still available?",
            "What documents do i need ",
            "Whats the price?",
            "Return policy"
          ].map((question, index) => (
            <Button
              key={index}
              variant="outlined"
              size="small"
              onClick={() => setInputValue(question)}
              sx={{
                borderColor: '#e5e7eb',
                color: '#6b7280',
                borderRadius: 5,
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#2563eb',
                  backgroundColor: '#f0f9ff'
                }
              }}
            >
              {question}
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Msg;