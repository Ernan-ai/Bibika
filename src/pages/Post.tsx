import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuthStore } from '../store/useAuthStore';
import { Button, Typography, Box, CircularProgress, Container } from '@mui/material';

const Post = () => {
  const { id } = useParams();
  const { user, profile } = useAuthStore();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      const postRef = doc(db, 'posts', id);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        setPost({ id: postSnap.id, ...postSnap.data() });
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (!post) return;
    try {
      await deleteDoc(doc(db, 'posts', post.id));
      navigate('/');
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <Typography variant="h6">Post not found</Typography>
      </Container>
    );
  }

  const canEditOrDelete =
    profile?.role === 'admin' || user?.id === post.userId;

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>{post.title || 'Untitled Post'}</Typography>
        <Typography variant="body1" paragraph>{post.content}</Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Category: {post.category || 'Uncategorized'}
        </Typography>

        {canEditOrDelete && (
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => navigate(`/edit-post/${post.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleDelete}
            >
              Delete Post
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Post;
