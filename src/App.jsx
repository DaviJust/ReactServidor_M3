import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./routes/Home.jsx";
import Filmes from "./routes/Filmes.jsx";
import Sobre from "./routes/Sobre.jsx";
import Footer from "./components/Footer.jsx";
import PostFilme from "./routes/PostFilme.jsx";
import Login from "./routes/Login.jsx";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Filmes" element={<Filmes />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/PostarFilme" element={<PostFilme />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
