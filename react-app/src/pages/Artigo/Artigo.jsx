import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegHeart } from 'react-icons/fa';
import { decryptData } from '../../utils/encryptionUtils';

import './Artigo.css';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';

export default function Artigo() {
  const [comentarios, setComentarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comentarioText, setComentarioText] = useState('');
  const [curtidas, setCurtidas] = useState(0);

  const location = useLocation();
  const dadosArtigo = location.state.dadosArtigo;

  const handleCurtidas = () => {
    axios.get('http://localhost:8080/GlobalSolution/rest/curtida/' + dadosArtigo.id)
      .then(response => {
        if (response.data) {
          setCurtidas(response.data);
        } else {
          toast.warn('Não há curtidas neste artigo')
        }
      })
      .catch(error => {
        console.error(error);
        toast.error('Ocorreu ao carregar os comentários.');
      });
  }

  const handleComentarios = () => {
    setIsLoading(true);
    axios.get('http://localhost:8080/GlobalSolution/rest/comentarioartigo/')
      .then(response => {
        if (response.status === 200) {
          const comentariosFiltrados = response.data.filter(comentario => comentario.artigo.id === dadosArtigo.id);
          setComentarios(comentariosFiltrados);
          setIsLoading(false)
          if (comentariosFiltrados === 0) {
            toast.info('Nenhuma comentário encontrado.');
          }
        } else {
          return handleComentarios()
        }
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false)
        toast.error('Ocorreu ao carregar os comentários.');
      });
  }

  
  useEffect(() => {
    handleCurtidas();
    handleComentarios();
  }, [dadosArtigo.id, handleCurtidas, handleComentarios]);

  const setCurtida = () => {
    let userData = sessionStorage.getItem('user')

    if (!userData) {
      toast.warn('Você precisa estar logado para curtir.');
    } else {
      userData = decryptData(userData);
      const novaCurtida = {
        usuario: {
          id: userData.id
        },
        artigo: {
          id: dadosArtigo.id
        }
      }

      axios.post('http://localhost:8080/GlobalSolution/rest/curtida/', novaCurtida)
        .then(response => {
          if (response.status === 201) {
            toast.success('Curtida cadastrada com sucesso!');
            setCurtidas(curtidas + 1);
          } else {
            toast.warn('Não foi possível cadastrar a curtida!');
          }
        })
        .catch(error => {
          console.error(error);
          toast.error('Ocorreu um erro ao enviar a curtida.');
        });
    }
  }

  const handleEnviarComentario = () => {
    let userData = sessionStorage.getItem('user')

    if (!comentarioText) {
      toast.warn('Preencha o campo para comentar.');
    } else if (!userData) {
      toast.warn('Você precisa estar logado para comentar.');
    } else {
      userData = decryptData(userData);
      const novoComentario = {
        "texto": comentarioText,
        "data": new Date().toISOString().slice(0, 10),
        "usuario": {
          "id": userData.id
        },
        "artigo": {
          "id": dadosArtigo.id
        }
      }

      axios.post('http://localhost:8080/GlobalSolution/rest/comentarioartigo/', novoComentario)
        .then(response => {
          toast.success('Comentário cadastrado com sucesso!');
          setComentarioText('');
          handleComentarios();
        })
        .catch(error => {
          console.error(error);
          toast.error('Ocorreu um erro ao enviar o comentário.');
        });
    }
  }

  return (
    <>
      <Menu isWhite></Menu>
      <section className='artigo'>
        <div className='img-fundo' />
        <div className='article'>
          <div className='content-article'>
            <h2>{dadosArtigo.titulo}</h2>
            <p className='curtidas'>{curtidas} curtidas</p>
            <span>{dadosArtigo.categoria.descricao}</span>
            <p>{dadosArtigo.texto}</p>
            <div className='btn-curtir' onClick={() => setCurtida()}><FaRegHeart /><span>curtir</span></div>
            <div className='comentarios'>
              <h2>Opiniões sobre o Artigo</h2>
              <p>Essa é uma sessão para você poder visualizar a opinião das pessoas sobre este artigo e escrever também o que achou.</p>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  {comentarios && comentarios.length >= 1 ? (
                    comentarios.map(item => (
                      <div className='comentario'>
                        <h4>{item.usuario.nome}</h4>
                        <p>{item.texto}</p>
                      </div>
                    ))
                  ) : (
                    <p>Não há comentários</p>
                  )}
                  <div className='escrever-comentario'>
                    <input value={comentarioText} onChange={e => setComentarioText(e.target.value)} placeholder='Escreva um comentário você também...' type="text" />
                    <button onClick={handleEnviarComentario}>Publicar</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section >
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}