import { useEffect, useState } from 'react';
import {Box, List, ListItem, Typography, Select, MenuItem, Card} from '@mui/material';
import {Link} from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';
import {IPost} from '../types'
import { getPosts } from '../api/posts';


export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts(selectedUserId);
        setPosts(postsData);
      } catch (error){
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [selectedUserId, user?.id]);

  return (
    <Box sx={{ mt: 4 }}>
      <Select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value as string)}
        displayEmpty
      >
        <MenuItem value="">All Posts</MenuItem>
        <MenuItem value={user?.id || ''}>My Posts</MenuItem>
      </Select>

      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Typography>
                <Card
                component={Link}
                to={`/post/${post.id}`}
                >
                    {post.content} - {new Date(post.createdAt).toLocaleDateString()}
                </Card>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};