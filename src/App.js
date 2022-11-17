// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Title from "./components/Title.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import "./Weather.css";

function App() {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
