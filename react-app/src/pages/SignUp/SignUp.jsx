import React, { useState } from 'react';
import './SignUp.css';
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
  const [nomeCompletoActive, setNomeCompletoActive] = useState(false);
  const [confirmarSenhaActive, setConfirmarSenhaActive] = useState(false);

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

  return (
    <>
      <section className='sign-up'>
        <div>
          <h1>Cadastre-se em nossa plataforma</h1>
          <summary>Com uma conta só para você, você poderá nos ajudar a avaliar os restaurantes e os artigos e nos contar a sua opinião.</summary>
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
          <div>
            <input onFocus={handleConfirmarSenhaFocus} onBlur={handleConfirmarSenhaBlur} onChange={handleConfirmarSenhaChange} class="form-control" type={mostrarConfirmarSenha ? "text" : "password"} name="confirmarSenha" id="confirmarSenha" />
            <label className={`form-label ${confirmarSenhaActive ? 'active' : ''}`} htmlFor="confirmarSenha">Confirmar Senha</label>
            <span className="botao-olho" onClick={handleConfirmarSenhaButtonClick}>{mostrarConfirmarSenha ? <FaEyeSlash className="icone-olho" /> : <FaEye className="icone-olho" />}</span>
          </div>
          <button id="Entrar">Entrar</button>
        </div>
        <img src="https://blush.design/api/download?shareUri=uRtBLBBfXhpLVuHy&c=Bottom_0%7E89c5cc_Hair_0%7Ee8e1e1_Skin_0%7E915b3c_Top_0%7Ea8e5ba&w=800&h=800&fm=png" alt="" />
      </section>
    </>
  );
}
