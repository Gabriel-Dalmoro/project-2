import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import './Weather.css';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import LoginRegister from './pages/LoginRegister.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LoginRegister />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
