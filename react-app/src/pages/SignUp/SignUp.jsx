import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import './SignUp.css';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignUp() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [emailActive, setEmailActive] = useState(false);
  const [senhaActive, setSenhaActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nomeCompletoActive, setNomeCompletoActive] = useState(false);
  const [confirmarSenhaActive, setConfirmarSenhaActive] = useState(false);

  const navigate = useNavigate();

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

  function handleConfirmarSenhaFocus() {
    setConfirmarSenhaActive(true);
  }

  function handleConfirmarSenhaBlur() {
    if (confirmarSenha.trim() === '') {
      setConfirmarSenhaActive(false);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSenhaChange(e) {
    setSenha(e.target.value);
  }

  function handleConfirmarSenhaChange(e) {
    setConfirmarSenha(e.target.value);
  }

  function handleSenhaButtonClick() {
    setMostrarSenha(!mostrarSenha);
  }

  function handleConfirmarSenhaButtonClick() {
    setMostrarConfirmarSenha(!mostrarConfirmarSenha);
  }

  function handleSignUp() {
    setIsLoading(true)
    if (!nomeCompleto || !email || !senha || !confirmarSenha) {
      setIsLoading(false)
      toast.error('Preencha os todos os campos!');
    } else if (senha !== confirmarSenha) {
      setIsLoading(false)
      toast.error('As duas senhas precisam ser iguais');
    } else {
      const data = { 'nome': nomeCompleto, 'email': email, 'senha': senha, 'tipoUsuario': 'c' }
      
      axios.post(`http://localhost:8080/GlobalSolution/rest/usuario/`, data)
      .then(response => {
          setIsLoading(false)
          toast.success('Cadastro realizado com sucesso. Estamos te redirecionando para o login!');
          setTimeout(() => {
            navigate('/sign-in');
          }, 2000)
        })
        .catch(error => {
          console.error(error);
          setIsLoading(false)
          toast.error('Ocorreu na requisição de realizar o cadastro.');
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
          <Menu></Menu>
          <section className='sign-up'>
            <div>
              <h1>Cadastre-se em nossa plataforma</h1>
              <summary>Com uma conta só para você, você poderá nos ajudar a avaliar os restaurantes e os artigos e nos contar a sua opinião.</summary>
              <hr />
              <div>
                <input onFocus={handleNomeCompletoFocus} onBlur={handleNomeCompletoBlur} onChange={handleNomeCompletoChange} className="form-control" type="text" name="nomeCompleto" id="nomeCompleto" />
                <label className={`form-label ${nomeCompletoActive ? 'active' : ''}`} htmlFor="nomeCompleto">Nome completo</label>
              </div>
              <div>
                <input onFocus={handleEmailFocus} onBlur={handleEmailBlur} onChange={handleEmailChange} className="form-control" type="email" name="email" id="email" />
                <label className={`form-label ${emailActive ? 'active' : ''}`} htmlFor="email">Endereço de email</label>
              </div>
              <div>
                <input onFocus={handleSenhaFocus} onBlur={handleSenhaBlur} onChange={handleSenhaChange} className="form-control" type={mostrarSenha ? "text" : "password"} name="senha" id="senha" />
                <label className={`form-label ${senhaActive ? 'active' : ''}`} htmlFor="senha">Senha</label>
                <span className="botao-olho" onClick={handleSenhaButtonClick}>{mostrarSenha ? <FaEyeSlash className="icone-olho" /> : <FaEye className="icone-olho" />}</span>
              </div>
              <div>
                <input onFocus={handleConfirmarSenhaFocus} onBlur={handleConfirmarSenhaBlur} onChange={handleConfirmarSenhaChange} className="form-control" type={mostrarConfirmarSenha ? "text" : "password"} name="confirmarSenha" id="confirmarSenha" />
                <label className={`form-label ${confirmarSenhaActive ? 'active' : ''}`} htmlFor="confirmarSenha">Confirmar Senha</label>
                <span className="botao-olho" onClick={handleConfirmarSenhaButtonClick}>{mostrarConfirmarSenha ? <FaEyeSlash className="icone-olho" /> : <FaEye className="icone-olho" />}</span>
              </div>
              <button id="Entrar" onClick={handleSignUp}>Entrar</button>
            </div>
            <img src="https://blush.design/api/download?shareUri=uRtBLBBfXhpLVuHy&c=Bottom_0%7E89c5cc_Hair_0%7Ee8e1e1_Skin_0%7E915b3c_Top_0%7Ea8e5ba&w=800&h=800&fm=png" alt="" />
          </section>
        </>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}
