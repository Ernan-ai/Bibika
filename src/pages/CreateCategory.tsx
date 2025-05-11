import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthStore } from '../store/useAuthStore';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      await addDoc(collection(db, 'categories'), {
        name,
        createdAt: new Date().toISOString()
      });
      navigate('/');
    } catch (err) {
      console.error('Error creating category:', err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Create Category</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Create
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateCategory;
