import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillStar } from 'react-icons/ai';
import { decryptData } from '../../utils/encryptionUtils';

import './RestauranteIndividual.css';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import Avaliacao from './../../components/Avaliacao/Avaliacao';

export default function RestauranteIndividual() {
  const location = useLocation();
  const dadosRestaurante = location.state.dadosRestaurante;
  const praticasSustentaveis = location.state.praticasSustentaveis;

  const [praticaSelecionada, setPraticaSelecionada] = useState(praticasSustentaveis[0]);
  const [comentarios, setComentarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comentarioText, setComentarioText] = useState('');
  const [avaliacaoEnviada, setAvaliacaoEnviada] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  const [avaliacaoRestaurante, setAvaliacaoRestaurante] = useState(0);

  useEffect(() => {
    handleAvaliacao();
  }, []);

  useEffect(() => {
    handleComentarios();
  }, [dadosRestaurante.cnpj]);

  const handleAvaliacao = () => {
    axios.get(`http://localhost:8080/GlobalSolution/rest/avaliacao/avaliacaorestaurante/${dadosRestaurante.cnpj}`)
      .then((response) => {
        if (response.data !== "NaN") {
          setAvaliacaoRestaurante(response.data.toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 1
          }));
        } else {
          toast.warn('Este restaurante não possui avaliação');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error('Ocorreu um erro ao carregar as avaliações.');
      });

    let userData = sessionStorage.getItem('user');

    if (userData) {
      userData = decryptData(userData);
      axios.get(`http://localhost:8080/GlobalSolution/rest/avaliacao/`)
        .then((response) => {
          const avaliacaoEncontrada = response?.data.find(
            (avaliacao) =>
              avaliacao?.restaurante?.cnpj === dadosRestaurante?.cnpj &&
              avaliacao?.usuario?.id === userData?.id
          );
          if (avaliacaoEncontrada) {
            setAvaliacaoEnviada(true);
            setAvaliacao(avaliacaoEncontrada);
            sessionStorage.setItem('avaliacoes', JSON.stringify(response.data));
          } else {
            setAvaliacaoEnviada(false);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error('Ocorreu um erro ao carregar as avaliações.');
        });
    }
  };

  const handleComentarios = () => {
    setIsLoading(true);
    axios.get('http://localhost:8080/GlobalSolution/rest/comentariorestaurante/')
      .then((response) => {
        const comentariosFiltrados = response?.data.filter(
          (comentario) => comentario?.restaurante?.cnpj === dadosRestaurante?.cnpj
        );
        setComentarios(comentariosFiltrados);
        setIsLoading(false);
        if (comentariosFiltrados === 0) {
          toast.info('Nenhum comentário encontrado.');
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        toast.error('Ocorreu um erro ao carregar os comentários.');
      });
  };

  const handleCategoriaSelecionada = (item) => {
    setPraticaSelecionada(item);
  };

  const setComentario = () => {
    let userData = sessionStorage.getItem('user');

    if (!comentarioText) {
      toast.warn('Preencha o campo para comentar.');
    } else if (!userData) {
      toast.warn('Você precisa estar logado para comentar.');
    } else {
      userData = decryptData(userData);
      const novoComentario = {
        texto: comentarioText,
        data: new Date().toISOString().slice(0, 10),
        usuario: {
          id: userData.id,
        },
        restaurante: {
          cnpj: dadosRestaurante.cnpj,
        },
      };

      axios
        .post('http://localhost:8080/GlobalSolution/rest/comentariorestaurante/', novoComentario)
        .then((response) => {
          toast.success('Comentário cadastrado com sucesso!');
          setComentarioText('');
          handleComentarios();
        })
        .catch((error) => {
          console.error(error);
          toast.error('Ocorreu um erro ao enviar o comentário.');
        });
    }
  };

  const handleAvaliacaoSelecionada = (rating) => {
    let userData = sessionStorage.getItem('user');

    if (userData) {
      if (!avaliacaoEnviada) {
        userData = decryptData(userData);
        const payload = {
          valor: rating,
          momento: new Date().toISOString().slice(0, 10),
          restaurante: {
            cnpj: dadosRestaurante.cnpj,
          },
          usuario: {
            id: userData.id,
          },
        };

        axios
          .post('http://localhost:8080/GlobalSolution/rest/avaliacao/', payload)
          .then((response) => {
            toast.success('Avaliação enviada com sucesso!');
            setAvaliacaoEnviada(true);
            handleAvaliacao();
          })
          .catch((error) => {
            console.error(error);
            toast.error('Ocorreu um erro ao enviar a avaliação.');
          });
      } else {
        axios
          .put('http://localhost:8080/GlobalSolution/rest/avaliacao/' + avaliacao.id, {
            valor: rating,
          })
          .then((response) => {
            toast.success('Avaliação atualizada com sucesso!');
            handleAvaliacao();
          })
          .catch((error) => {
            console.error(error);
            toast.error('Ocorreu um erro ao atualizar a avaliação.');
          });
      }
    } else {
      toast.warn('Você precisa estar logado para avaliar.');
    }
  };

  return (
    <>
      <Menu isWhite></Menu>
      <section className="restaurante-individual">
        <div className="img-rest"></div>
        <div className="header-rest">
          <div>
            <h1>{dadosRestaurante.nome}</h1>
            <p>
              {dadosRestaurante.descricao} - <strong>Comida {dadosRestaurante.culinaria.nome}</strong>
            </p>
          </div>
          <div className="comment-aval">
            <div>
              <p>{avaliacaoRestaurante}</p>
              <AiFillStar />
            </div>
          </div>
        </div>
        <div className="line-restaurante">
          <h2>Práticas Sustentáveis</h2>
          <span>
            Estas são algumas práticas sustentáveis que esse restaurante adota para contribuir para o meio ambiente e a
            diminuição da fome no mundo
          </span>
          <div>
            <div>
              {praticasSustentaveis.map((item) => (
                <button
                  key={item.nome}
                  onClick={() => handleCategoriaSelecionada(item)}
                  className={item.nome === praticaSelecionada.nome ? 'active' : ''}
                >
                  {item.nome}
                </button>
              ))}
            </div>
            <p>{praticaSelecionada.descricao}</p>
          </div>
        </div>
        <div className="avaliacao">
          <h2>Avalie o restaurante também!</h2>
          <Avaliacao onAvaliacaoSelecionada={handleAvaliacaoSelecionada} valorInicial={avaliacao ? avaliacao.valor : 0} />
        </div>
        <div className="comentarios">
          <h2>Opiniões sobre o restaurante</h2>
          <p>Essa é uma sessão para você poder visualizar a opinião das pessoas sobre o restaurante.</p>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {comentarios && comentarios.length >= 1 ? (
                <>
                {comentarios.map((item) => (
                  <div className="comentario" key={item.id}>
                    <h4>{item.usuario.nome}</h4>
                    <p>{item.texto}</p>
                  </div>
                  ))}
                  <div className="escrever-comentario">
                    <input
                      value={comentarioText}
                      onChange={(e) => setComentarioText(e.target.value)}
                      placeholder="Escreva um comentário você também..."
                      type="text"
                    />
                    <button onClick={setComentario}>Publicar</button>
                  </div>
                </>
              ) : (
                <p>Não há comentários</p>
              )}
            </>
          )}
        </div>
        <div className="endereco">
          <h2>Endereço</h2>
          <span>Visite o restaurante!</span>
          <p>Rua das Flores, 123 - São Paulo SP - 12345678 - Jardim Paulista</p>
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
}
