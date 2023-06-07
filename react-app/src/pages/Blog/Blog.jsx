import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  useEffect(() => {
    loadCategorias();
    loadArtigos();
  }, []);

  useEffect(() => {
    filterArtigos();
  }, [categoria, artigos]);

  useEffect(() => {
    setSelectedCategoria(categoria);
  }, [categoria]);

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
    axios.get('http://localhost:8080/GlobalSolution/rest/artigo/')
      .then(response => {
        setArtigos(response.data);
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

  function filterArtigos() {
    if (!categoria || !artigos) {
      setFilteredArtigos(artigos);
      return;
    }

    const filtered = artigos.filter(
      item => item.categoria.descricao === categoria
    );
    setFilteredArtigos(filtered);
  }

  function handleCategoriaClick(categoria) {
    let newUrl = `/blog`;
    if (categoria === selectedCategoria) {
      newUrl = `/blog`;
      setSelectedCategoria(null)
    } else {
      newUrl = categoria ? `/blog?categoria=${categoria}` : '/blog';
      setSelectedCategoria(categoria);
    }
    navigate(newUrl);
  }

  const direcionarArtigo = (dadosArtigo) => {
    navigate('/artigo', { state: { dadosArtigo } })
  }

  return (
    <>
      <Menu IsLetterShadow></Menu>
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
                <a onClick={() => direcionarArtigo(item)} key={item.id}>
                  <CardArtigo artigo={item}></CardArtigo>
                </a>
              ))
            ) : (
              <p>Nenhum artigo encontrado.</p>
            )
          )}
        </div>
      </section>
      <ToastContainer></ToastContainer>
    </>
  );
}