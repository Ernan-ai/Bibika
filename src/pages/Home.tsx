import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = getAuth().currentUser;
    setIsAuthenticated(!!user);

    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsArray: any[] = [];
      querySnapshot.forEach((doc) => {
        postsArray.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postsArray);
    };

    fetchPosts();
  }, []);

  const deletePost = async (postId: string) => {
    try {
      await deleteDoc(doc(db, 'posts', postId));
      setPosts(posts.filter(post => post.id !== postId));
      alert('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* Use Link from react-router-dom for navigation */}
            <Link to={`/post/${post.id}`} style={{ color: 'blue', textDecoration: 'none' }}>
              {post.title}
            </Link>
            {isAuthenticated && (
              <button onClick={() => deletePost(post.id)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home; // Ensure this line is present
