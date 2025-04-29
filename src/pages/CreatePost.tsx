import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useAuthStore } from '../store/useAuthStore.ts';
import { createPost } from '../api/posts'; // Assuming you have an API to create posts
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase'; // Firebase Firestore configuration
import { getAuth } from 'firebase/auth';

export const CreatePost = () => {
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState<string[]>([]); // Store categories
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user, profile } = useAuthStore();

    // Fetch categories from Firestore
    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, 'categories')); // Assuming 'categories' collection exists
            const categoryList: string[] = [];
            querySnapshot.forEach((doc) => {
                categoryList.push(doc.data().name); // Assuming the category has a 'name' field
            });
            setCategories(categoryList);
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !content || !category) {
            alert('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            await createPost({
                content,
                category, // Save category to Firestore
                userId: user.id,
                createdAt: new Date().toISOString(),
                email: user.email || '',
            });
            setContent('');
            setCategory('');
            alert('Post created successfully!');
        } catch (error) {
            console.error('Error creating post: ', error);
            alert('There was an error creating the post.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // If profile is 'admin', prevent creating posts
    if (profile?.role === 'admin') {
        return (
            <Typography variant="h6" align="center" color="error">
                You are not authorized to create a post! <br /> Only regular users can create posts.
            </Typography>
        );
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="New Post"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            label="Category"
                            required
                        >
                            {categories.map((cat, index) => (
                                <MenuItem key={index} value={cat}>
                                    {cat}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ mt: 2 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating Post...' : 'Create Post'}
                    </Button>
                </form>
            </Box>
        </Container>
    );
};
