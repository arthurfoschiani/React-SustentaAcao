import React, { useEffect, useState } from 'react';
import { decryptData, encryptData } from '../../utils/encryptionUtils';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import './MeuPerfil.css';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';

export default function MeuPerfil() {

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [emailActive, setEmailActive] = useState(true);
  const [senhaActive, setSenhaActive] = useState(true);
  const [nomeCompletoActive, setNomeCompletoActive] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadDadosUser();
  }, []);

  function loadDadosUser() {
    let userCached = sessionStorage.getItem('user');
    userCached = decryptData(userCached);
    setUser(userCached)
    setNomeCompleto(userCached.nome)
    setEmail(userCached.email)
    setSenha(userCached.senha)
  }

  function handleNomeCompletoFocus() {
    setNomeCompletoActive(true);
  }

  function handleNomeCompletoBlur() {
    if (nomeCompleto.trim() === '') {
      setNomeCompletoActive(false);
    }
  }

  function handleNomeCompletoChange(e) {
    setNomeCompleto(e.target.value);
  }

  function handleEmailFocus() {
    setEmailActive(true);
  }

  function handleEmailBlur() {
    if (email.trim() === '') {
      setEmailActive(false);
    }
  }

  function handleSenhaFocus() {
    setSenhaActive(true);
  }

  function handleSenhaBlur() {
    if (senha.trim() === '') {
      setSenhaActive(false);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSenhaChange(e) {
    setSenha(e.target.value);
  }

  function handleSenhaButtonClick() {
    setMostrarSenha(!mostrarSenha);
  }

  function updateProfile() {
    const confirmacao = window.confirm('Tem certeza de que deseja alterar o seu perfil? Essa ação não poderá ser desfeita.');
    if (confirmacao) {
      const payload = {
        nome: nomeCompleto,
        email: email,
        senha: senha
      };
      setIsLoading(true)
      axios.put('http://localhost:8080/GlobalSolution/rest/usuario/atualizarusuario/' + user.id, payload)
      .then((response) => {
          setIsLoading(false)
          if (response.status === 200) {
            toast.success('Usuário atualizado com sucesso. Aguarde enquanto te redirecionamos');
            payload.id = user.id;
            setUser(payload)
            sessionStorage.setItem('user', encryptData(payload))
            setTimeout(() => {
              navigate('/');
            }, 2000);
          } else {
            toast.warn('Não foi possível atualizar o seu usuário.');
          }
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false)
          toast.error('Ocorreu um erro ao atualizar o seu usuário.');
        });
      }
    }
    
    function deleteProfile() {
      const confirmacao = window.confirm('Tem certeza de que deseja excluir o seu perfil? Essa ação não poderá ser desfeita.');
      if (confirmacao) {
        setIsLoading(true)
        axios.delete('http://localhost:8080/GlobalSolution/rest/usuario/' + user.id)
        .then((response) => {
          setIsLoading(false)
          if (response.status === 204) {
            toast.success('Usuário deletado com sucesso. Aguarde enquanto te redirecionamos');
            setTimeout(() => {
              navigate('/');
              sessionStorage.removeItem('user')
            }, 2000);
          } else {
            toast.warn('Não foi possível deletar o seu usuário.');
          }
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false)
          toast.error('Ocorreu um erro ao deletar o seu usuário.');
        });
    }
  }

  return (
    <>
      {isLoading ? (
        <div className='backdrop'>
          <Loader></Loader>
        </div>
      ) : (
        <>
          <Menu isWhite isShadow></Menu>
          <section className='meu-perfil'>
            <div className='img-meu-perfil'>
              <img src="https://cdn.pixabay.com/photo/2017/03/24/04/16/abstract-2170133_1280.png" alt="" />
            </div>
            <div className='editar-perfil'>
              <h1>Meu perfil</h1>
              <summary>Atualize suas informações e fique sempre informado.</summary>
              <p>{user?.nome}</p>
              <p>{user?.email}</p>
              <hr />
              <div>
                <input value={nomeCompleto} onFocus={handleNomeCompletoFocus} onBlur={handleNomeCompletoBlur} onChange={handleNomeCompletoChange} className="form-control" type="text" name="nomeCompleto" id="nomeCompleto" />
                <label className={`form-label ${nomeCompletoActive ? 'active' : ''}`} htmlFor="nomeCompleto">Nome completo</label>
              </div>
              <div>
                <input value={email} onFocus={handleEmailFocus} onBlur={handleEmailBlur} onChange={handleEmailChange} className="form-control" type="email" name="email" id="email" />
                <label className={`form-label ${emailActive ? 'active' : ''}`} htmlFor="email">Endereço de email</label>
              </div>
              <div>
                <input value={senha} onFocus={handleSenhaFocus} onBlur={handleSenhaBlur} onChange={handleSenhaChange} className="form-control" type={mostrarSenha ? "text" : "password"} name="senha" id="senha" />
                <label className={`form-label ${senhaActive ? 'active' : ''}`} htmlFor="senha">Senha</label>
                <span className="botao-olho" onClick={handleSenhaButtonClick}>{mostrarSenha ? <FaEyeSlash className="icone-olho" /> : <FaEye className="icone-olho" />}</span>
              </div>
              <a onClick={() => deleteProfile()}>Excluir perfil</a>
              <button onClick={() => updateProfile()} id="Entrar">Editar</button>
            </div>
          </section>
        </>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}