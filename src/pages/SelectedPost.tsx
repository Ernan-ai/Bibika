import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, Typography } from '@mui/material';

const SelectedPost = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [post, setPost] = useState<any>(null); // Store post data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return; // If no ID, don't fetch

      try {
        // Fetch post data from Firestore using the ID
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data()); // Set the post data
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching post: ', error);
      } finally {
        setLoading(false); // Done loading
      }
    };

    fetchPost();
  }, [id]); // Re-run the effect when the 'id' changes

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
