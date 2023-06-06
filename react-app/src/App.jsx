import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Artigo from './pages/Artigo/Artigo';
import Blog from './pages/Blog/Blog';
import MeuPerfil from './pages/MeuPerfil/MeuPerfil';
import RestauranteIndividual from './pages/RestauranteIndividual/RestauranteIndividual';
import Restaurantes from './pages/Restaurantes/Restaurantes';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artigo" element={<Artigo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/meu-perfil" element={<MeuPerfil />} />
          <Route path="/restaurante-individual" element={<RestauranteIndividual />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;