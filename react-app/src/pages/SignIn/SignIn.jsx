import React, { useState } from 'react';

import './SignIn.css';

import Menu from '../../components/Menu/Menu';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function RestauranteIndividual() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailActive, setEmailActive] = useState(false);
  const [senhaActive, setSenhaActive] = useState(false);

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

  function handleButtonClick() {
    setMostrarSenha(!mostrarSenha);
  }

  return (
    <>
      <Menu></Menu>
      <section className='sign-in'>
        <img src="https://blush.design/api/download?shareUri=O2Rq8ZgGdobvoD-X&c=Bottom_0%7E89c5cc_Hair_0%7Ee8e1e1_Skin_0%7E57331f_Top_0%7Ea8e5ba&w=800&h=800&fm=png" alt="" />
        <div>
          <h1>Entre em nossa plataforma</h1>
          <summary>Entre para poder nos ajudar a avaliar os restaurantes e os artigos e nos contar a sua opinião.</summary>
          <hr />
          <div>
            <input onFocus={handleEmailFocus} onBlur={handleEmailBlur} onChange={handleEmailChange} class="form-control" type="email" name="email" id="email" />
            <label className={`form-label ${emailActive ? 'active' : ''}`} htmlFor="email">Endereço de email</label>
          </div>
          <div>
            <input onFocus={handleSenhaFocus} onBlur={handleSenhaBlur} onChange={handleSenhaChange} class="form-control" type={mostrarSenha ? "text" : "password"} name="senha" id="senha" />
            <label className={`form-label ${senhaActive ? 'active' : ''}`} htmlFor="senha">Senha</label>
            <span id="botao-olho" onClick={handleButtonClick}>{mostrarSenha ? <FaEyeSlash id="icone-olho" /> : <FaEye id="icone-olho" />}</span>
          </div>
          <button id="Entrar">Entrar</button>
        </div>
      </section>
    </>
  );
}
