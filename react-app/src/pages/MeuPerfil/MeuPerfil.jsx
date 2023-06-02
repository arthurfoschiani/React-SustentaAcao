import React, { useState } from 'react';
import './MeuPerfil.css';

import Menu from '../../components/Menu/Menu';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function MeuPerfil() {

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [emailActive, setEmailActive] = useState(false);
  const [senhaActive, setSenhaActive] = useState(false);
  const [nomeCompletoActive, setNomeCompletoActive] = useState(false);

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

  return (
    <>
      <Menu isWhite></Menu>
      <section className='meu-perfil'>
        <div className='img-meu-perfil'>
          <img src="https://cdn.pixabay.com/photo/2017/03/24/04/16/abstract-2170133_1280.png" alt="" />
        </div>
        <div className='editar-perfil'>
          <h1>Meu perfil</h1>
          <summary>Atualize suas informações e fique sempre informado.</summary>
          <hr />
          <div>
            <input onFocus={handleNomeCompletoFocus} onBlur={handleNomeCompletoBlur} onChange={handleNomeCompletoChange} class="form-control" type="text" name="nomeCompleto" id="nomeCompleto" />
            <label className={`form-label ${nomeCompletoActive ? 'active' : ''}`} htmlFor="nomeCompleto">Nome completo</label>
          </div>
          <div>
            <input onFocus={handleEmailFocus} onBlur={handleEmailBlur} onChange={handleEmailChange} class="form-control" type="email" name="email" id="email" />
            <label className={`form-label ${emailActive ? 'active' : ''}`} htmlFor="email">Endereço de email</label>
          </div>
          <div>
            <input onFocus={handleSenhaFocus} onBlur={handleSenhaBlur} onChange={handleSenhaChange} class="form-control" type={mostrarSenha ? "text" : "password"} name="senha" id="senha" />
            <label className={`form-label ${senhaActive ? 'active' : ''}`} htmlFor="senha">Senha</label>
            <span className="botao-olho" onClick={handleSenhaButtonClick}>{mostrarSenha ? <FaEyeSlash className="icone-olho" /> : <FaEye className="icone-olho" />}</span>
          </div>
          <button id="Entrar">Editar</button>
        </div>
      </section>
    </>
  );
}