import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useAuthStore } from '../store/useAuthStore.ts';
import { createPost } from '../api/posts';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase.ts';

export const CreatePost = () => {
    const [content, setContent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(''); 
    const { user, profile } = useAuthStore();
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, 'categories'));
            const categoriesArray: any[] = [];
            querySnapshot.forEach((doc) => {
                categoriesArray.push({ id: doc.id, ...doc.data() });
            });
            setCategories(categoriesArray);
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        await createPost({
            content,
            category: selectedCategory, 
            userId: user.id,
            createdAt: new Date().toISOString(),
            email: user.email || ''
        });
        setContent('');
        setSelectedCategory('');
    };

    if (profile?.role === "admin") {
        return (
            <Typography variant="h6" align="center" color="error">
                You are not authorized to create a post!
                <br /> Only admins can create posts.
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
                    />
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={selectedCategory || ''}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {categories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                        Create Post
                    </Button>
                </form>
            </Box>
        </Container>
    );
};
