import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, Container, Box, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = getAuth().currentUser;
    setIsAuthenticated(!!user);

    const fetchPost = async () => {
      const docRef = doc(db, 'posts', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchPost();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-post/${id}`);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        {post ? (
          <>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {post.content}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Category: {post.category || 'Uncategorized'}
            </Typography>
            {isAuthenticated && (
              <Button variant="contained" sx={{ mt: 2 }} onClick={handleEdit}>
                Edit Post
              </Button>
            )}
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

export default Post;
