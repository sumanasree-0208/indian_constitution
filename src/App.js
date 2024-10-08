import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Import your Home component
import Gallery from './Gallery'; // Import your Gallery component
import VideoUpload from './VideoUpload'; // Import your VideoUpload component
import VideoList from './VideoList'; // Import your VideoList component
import SignIn from './SignIn'; // Import SignIn component
import SignUp from './SignUp'; // Import SignUp component for creating new accounts
import { auth } from './firebase'; // Import Firebase auth
import './App.css'; // Import your main CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);  // Set user if logged in
      } else {
        setUser(null);  // Clear user if logged out
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contests">Contests</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/upload">Upload Video</Link>
                </li>
                <li>
                  <button onClick={() => auth.signOut()}>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Educator Login</Link>
                </li>
                <li>
                  <Link to="/signup">Educator Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<VideoList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={user ? <VideoUpload /> : <SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;