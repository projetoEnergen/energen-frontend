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
import ListaCategorias from "./paginas/categorias/listaCategorias/ListaCategorias";
import "./App.css";
import ListaCategoria from "./paginas/categorias/listaCategorias/ListaCategorias";
import { Provider } from "react-redux";
import store from "./store/tokens/Store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias/:id" element={<ListaCategorias />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios/cadastrar" element={<CadastroUsuario />} />
          <Route path="/cadastroProdutos" element={<CadastroProdutos />} />
          <Route path="/atualizarProdutos/:id" element={<CadastroProdutos />} />
          <Route path="/cadastroCategorias" element={<CadastroCategorias />} />
          <Route path="/atualizarCategorias/:id" element={<CadastroCategorias />} />
          <Route path="/deletarProdutos/:id" element={<DeletarProdutos />} />
          <Route path="/deletarCategorias/:id" element={<DeletarCategorias />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
