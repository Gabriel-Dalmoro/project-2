// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Title from "./components/Title.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import "./Weather.css";
import NavBar from "./components/NavBar.jsx";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
