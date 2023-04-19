import React from "react";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastrousuario/CadastroUsuario";
import Produtos from "./paginas/produtos/Produtos";
import Sobre from "./paginas/sobre/Sobre";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios/cadastrar" element={<CadastroUsuario />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
