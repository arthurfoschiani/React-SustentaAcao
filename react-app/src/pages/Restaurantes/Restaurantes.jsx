import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import './Restaurantes.css';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante';
import Loader from '../../components/Loader/Loader';

export default function Restaurantes() {
  // States and variables
  const [restaurantes, setRestaurantes] = useState(null);
  const [culinarias, setCulinarias] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRestaurantes, setFilteredRestaurantes] = useState(null);
  const [selectedCulinaria, setSelectedCulinaria] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const culinaria = queryParams.get('culinaria');

  // Load cached data or fetch from server
  useEffect(() => {
    loadCulinarias();
    loadRestaurantes();
  }, []);

  // Filter restaurantes by culinaria
  useEffect(() => {
    filterRestaurantes();
  }, [culinaria, restaurantes]);

  // Functions
  function loadCulinarias() {
    const cachedCulinarias = sessionStorage.getItem('culinarias');

    if (cachedCulinarias) {
      setCulinarias(JSON.parse(cachedCulinarias))
    } else {
      axios.get('http://localhost:8080/GlobalSolution/rest/culinaria/')
        .then(response => {
          setCulinarias(response.data);
          sessionStorage.setItem('culinarias', JSON.stringify(response.data));
          if (response.data.length === 0) {
            toast.info('Nenhuma culinária encontrada.');
          }
        })
        .catch(error => {
          console.error(error);
          toast.error('Ocorreu ao carregar as culinárias.');
        });
    }
  }

  function loadRestaurantes() {
    const cachedRestaurantes = sessionStorage.getItem('restaurantes');

    if (cachedRestaurantes) {
      setRestaurantes(JSON.parse(cachedRestaurantes));
      setIsLoading(false);
    } else {
      axios.get('http://localhost:8080/GlobalSolution/rest/restaurantepraticasustentavel/')
        .then(response => {
          setRestaurantes(response.data);
          sessionStorage.setItem('restaurantes', JSON.stringify(response.data));
          setIsLoading(false);
          console.log(response.data)
          if (response.data.length === 0) {
            toast.info('Nenhum restaurante encontrado.');
          }
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false);
          toast.error('Ocorreu ao carregar os restaurantes.');
        });
    }
  }

  function filterRestaurantes() {
    if (!culinaria || !restaurantes) {
      setFilteredRestaurantes(restaurantes);
      return;
    }

    const filtered = restaurantes.filter(
      item => item.restaurante.culinaria.nome === culinaria
    );
    setFilteredRestaurantes(filtered);
  }

  function handleCulinariaClick(culinaria) {
    const newUrl = culinaria ? `/restaurantes?culinaria=${culinaria}` : '/restaurantes';
    navigate(newUrl);
    setSelectedCulinaria(culinaria);
  }

  function getPraticasSustentaveisByRestaurante(cnpjRestaurante) {
    const praticas = filteredRestaurantes.filter(
      item => item.restaurante.cnpj === cnpjRestaurante
    );
    return praticas.map(item => item.praticaSustentavel);
  }

  function renderList() {
    if (!filteredRestaurantes) {
      return <p className='rest-nao-encontrado'>Restaurantes não encontrado.</p>;
    }

    const uniqueRestaurantes = filteredRestaurantes.reduce((acc, item) => {
      if (!acc.find(restaurante => restaurante.restaurante.cnpj === item.restaurante.cnpj)) {
        acc.push(item);
      }
      return acc;
    }, []);

    return (
      <>
        {uniqueRestaurantes && uniqueRestaurantes.length > 0 ? (
          uniqueRestaurantes.map(item => (
            <Link to='/restaurante-individual' key={item.restaurante.cnpj}>
              <CardRestaurante restaurante={item.restaurante.nome} praticas={getPraticasSustentaveisByRestaurante(item.restaurante.cnpj)}></CardRestaurante>
            </Link>
          ))
        ) : (
          <p className='rest-nao-encontrado'>Restaurantes não encontrado.</p>
        )}
      </>
    );
  }

  // JSX
  return (
    <>
      <Menu />
      <section className='Restaurantes'>
        <div className='search-area'>
          <h1>Busque por restaurantes que você deseja</h1>
          <input type="text" />
        </div>
        <div className='filtro'>
          <p>Filtrar por culinária</p>
          <div>
            {culinarias && culinarias.length > 1 ? (
              culinarias.map(item => (
                <button key={item.id} onClick={() => handleCulinariaClick(item.nome)} className={item.nome === selectedCulinaria ? 'active' : ''}>
                  {item.nome}
                </button>
              ))
            ) : (
              <p>Nenhuma culinária encontrada.</p>
            )}
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="lista-restaurantes">
            {renderList()}
          </div>
        )}
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
}