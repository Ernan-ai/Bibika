import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, TextField, Container, Box, Typography } from '@mui/material';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any | null>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, 'posts', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
        setContent(docSnap.data().content || '');
      } else {
        console.log('No such document!');
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const docRef = doc(db, 'posts', id!);
    await updateDoc(docRef, {
      content
    });
    navigate(`/post/${id}`);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        {post ? (
          <>
            <Typography variant="h4">Edit Post</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Edit Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Button variant="contained" sx={{ mt: 2 }} type="submit">
                Save Changes
              </Button>
            </form>
          </>
        ) : (
          <Typography variant="h6" align="center" color="error">
            Loading post...
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default EditPost;
