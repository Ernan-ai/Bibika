import {useAuthStore} from "../store/useAuthStore.ts";
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const { user, setUser } = useAuthStore();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name ?? '');
            setEmail(user.email ?? '');
        } else {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleUpdate = () => {
        if (user) {
            const updatedUser = { ...user, name, email };
            setUser(updatedUser);
        }
    };

    if (!user) return null;

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                My profile
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Typography><strong>ID:</strong> {user.id}</Typography>
                <Typography><strong>Name:</strong> {user.name}</Typography>
                <Typography><strong>Email:</strong> {user.email}</Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
            Edit data
            </Typography>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" onClick={handleUpdate} sx={{ mt: 2 }}>
            Update
            </Button>
        </Container>
    );
};

export default Profile;
