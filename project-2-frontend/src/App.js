import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import './Weather.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/LoginA.jsx';
import Register from './pages/RegisterA.jsx';
import activities from './activities.js';
import PrivateRoute from './components/PrivateRoute.jsx';
import Profile from './pages/Profile.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './features/auth/authSlice.js';

function App() {
  const dispatch = useDispatch();

  // Refresh the weather data every 30 minutes
  useEffect(() => {
    console.log('getting user');
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <div className="mainAppBody">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
        <Footer name={activities.name} />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
