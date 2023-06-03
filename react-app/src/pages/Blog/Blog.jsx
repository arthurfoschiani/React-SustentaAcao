import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import './Blog.css';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import CardArtigo from '../../components/CardArtigo/CardArtigo';
import Loader from '../../components/Loader/Loader';

export default function Blog() {
  const [artigos, setArtigos] = useState(null);
  const [categorias, setCategorias] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [filteredArtigos, setFilteredArtigos] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoria = queryParams.get('categoria');

  // Load cached data or fetch from server
  useEffect(() => {
    loadCategorias();
    loadArtigos();
  }, []);

  // Filter artigos by categoria
  useEffect(() => {
    filterArtigos();
  }, [categoria, artigos]);

  useEffect(() => {
    setSelectedCategoria(categoria);
  }, [categoria]);

  // Functions
  function loadCategorias() {
    const cachedCategories = sessionStorage.getItem('categoriasArtigos');

    if (cachedCategories) {
      setCategorias(JSON.parse(cachedCategories))
    } else {
      axios.get('http://localhost:8080/GlobalSolution/rest/categoria/')
        .then(response => {
          setCategorias(response.data);
          sessionStorage.setItem('categoriasArtigos', JSON.stringify(response.data));
          if (response.data.length === 0) {
            toast.info('Nenhuma categoria encontrada.');
          }
        })
        .catch(error => {
          console.error(error);
          toast.error('Ocorreu ao carregar as categorias.');
        });
    }
  }

  function loadArtigos() {
    const cachedArtigos = sessionStorage.getItem('artigos');

    if (cachedArtigos) {
      setArtigos(JSON.parse(cachedArtigos));
      setIsLoading(false);
    } else {
      axios.get('http://localhost:8080/GlobalSolution/rest/artigo/')
        .then(response => {
          setArtigos(response.data);
          sessionStorage.setItem('artigos', JSON.stringify(response.data));
          setIsLoading(false)
          if (response.data.length === 0) {
            toast.info('Nenhum artigo encontrado.');
          }
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false)
          toast.error('Ocorreu ao carregar os artigos.');
        });
    }
  }

  function filterArtigos() {
    if (!categoria || !artigos) {
      setFilteredArtigos(artigos);
      return;
    }

    console.log(categoria)

    const filtered = artigos.filter(
      item => item.categoria.descricao === categoria
    );
    console.log(filtered)
    setFilteredArtigos(filtered);
  }

  function handleCategoriaClick(categoria) {
    const newUrl = categoria ? `/blog?categoria=${categoria}` : '/blog';
    navigate(newUrl);
  }

  return (
    <>
      <Menu></Menu>
      <section className='blog'>
        <div className='search-area'>
          <h1>Faça parte da mudança</h1>
          <p>Saiba como as IAs generativas estão construindo um futuro sem fome dentre outros assuntos...</p>
        </div>
        <div className='categoria-artigos'>
          {categorias && categorias.length > 1 ? (
            categorias.map(item => (
              <a key={item.id} onClick={() => handleCategoriaClick(item.descricao)} className={item.descricao === selectedCategoria ? 'categoria-ativa' : ''}>{item.descricao}</a>
            ))
          ) : (
            <p>Nenhuma categoria encontrada.</p>
          )}
        </div>
        <div className='artigos-blog'>
          {isLoading ? (
            <Loader></Loader>
          ) : (
            filteredArtigos && filteredArtigos.length > 0 ? (
              filteredArtigos.map(item => (
                <Link to='/artigo'>
                  <CardArtigo artigo={item}></CardArtigo>
                </Link>
              ))
            ) : (
              <p>Nenhum artigo encontrado.</p>
            )
          )}
        </div>
      </section>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}