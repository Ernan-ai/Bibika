import { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.ts';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Container, CssBaseline } from '@mui/material';
import Chat from './pages/Chat.tsx';
import { CreatePost } from './pages/CreatePost.tsx';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import Profile from './pages/Profile.tsx';
import { CreateProfile } from './pages/CreateProfile.tsx';
import Post from './pages/Post.tsx';
import EditPost from './pages/EditPost';  
import Family from './shahagey/Family.tsx';
import Travel from './shahagey/Travel';
import Economy from './shahagey/Economy';
import Premium from './shahagey/Premium';
import Offroad from './shahagey/Offroad';
import Special from './shahagey/Special';

const PrivateRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return user ? element : <Navigate to="/login" />;
};

const PublicRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return !user ? element : <Navigate to="/" />;
};

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/family" element={<Family />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/offroad" element={<Offroad />} />
          <Route path="/special" element={<Special />} />
          <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/family" element={<PrivateRoute element={<Family/>} />} />
          <Route path="/post" element={<PrivateRoute element={<Post />} />} />
          <Route path="/post/:id" element={<PrivateRoute element={<Post />} />} />
          <Route path="/edit-post/:id" element={<PrivateRoute element={<EditPost />} />} /> 
          <Route path="/add-post" element={<PrivateRoute element={<CreatePost />} />} />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<PublicRoute element={<Register />} />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/create-profile" element={<PrivateRoute element={<CreateProfile />} />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;