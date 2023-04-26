import React from "react";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastrousuario/CadastroUsuario";
import Sobre from "./paginas/sobre/Sobre";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Produtos from "./paginas/produtos/paginaProdutos/Produtos";
import CadastroCategorias from "./paginas/categorias/cadastroCategorias/CadastroCategorias";
import DeletarCategorias from "./paginas/categorias/deletarCategorias/DeletarCategorias";
import CadastroProdutos from "./paginas/produtos/cadastroProdutos/CadastroProdutos";
import DeletarProdutos from "./paginas/produtos/deletarProdutos/DeletarProdutos";
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
          <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
          <Route path="/cadastroProdutos/:id" element={<CadastroProdutos />} />
          <Route path="/cadastroCategorias" element={<CadastroCategorias />} />
          <Route path="/cadastroCategorias/:id" element={<CadastroCategorias />} />
          <Route path="/deletarProdutos/:id" element={<DeletarProdutos />} />
          <Route path="/deletarCategorias/:id" element={<DeletarCategorias />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
