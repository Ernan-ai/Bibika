import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, Typography } from '@mui/material';

const SelectedPost = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState<any>(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return; 

      try {
        
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data()); 
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching post: ', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPost();
  }, [id]); 

  if (loading) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  if (!post) {
    return <Typography variant="h6" align="center">Post not found.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.content}
      </Typography>
      <Button variant="contained" color="primary">
        Edit Post
      </Button>
      <Button variant="outlined" color="error" style={{ marginLeft: '10px' }}>
        Delete Post
      </Button>
    </div>
  );
};

export default SelectedPost;
