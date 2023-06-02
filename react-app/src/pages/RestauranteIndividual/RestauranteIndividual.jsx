import './RestauranteIndividual.css';

import { AiFillStar } from "react-icons/ai";

import Menu from '../../components/Menu/Menu';

import Avaliacao from './../../components/Avaliacao/Avaliacao';

export default function RestauranteIndividual() {
  return (
    <>
      <Menu isWhite></Menu>
      <section className='restaurante-individual'>
        <div className='img-rest'></div>
        <div className='header-rest'>
          <div>
            <h1>Vegan Food</h1>
            <p>Restaurante indiano com opções vegetarianas. - <strong>Comida Indiana</strong></p>
          </div>
          <div className='comment-aval'>
            <div>
              <p>4.5</p><AiFillStar />
            </div>
          </div>
        </div>
        <div className='line-restaurante'>
          <h2>Práticas Sustentáveis</h2>
          <span>Estas são algumas práticas sustentáveis que esse restaurante adota para contribuir para o meio ambiente e a diminuição da fome no mundo</span>
          <div>
            <div>
              <button>Economia de Água</button>
              <button>Produção Local</button>
              <button className='active'>Uso de Embalagens Sustentáveis</button>
            </div>
            <p>Utilização de embalagens biodegradáveis ou recicláveis.</p>
          </div>
        </div>
        <div className='avaliacao'>
          <h2>Avalie o restaurante também!</h2>
          <Avaliacao/>
          <button>Enviar avaliação</button>
        </div>
        <div className='comentarios'>
          <h2>Opiniões sobre o restaurante</h2>
          <p>Essa é uma sessão para você poder visualizar a opinião das pessoas sobre o restaurante.</p>
          <div className='comentario'>
            <h4>Arthur</h4>
            <p>Gostei demais!</p>
          </div>
          <div className='comentario'>
            <h4>Ana</h4>
            <p>Sensacional, parabéns!</p>
          </div>
          <div className='escrever-comentario'>
            <input placeholder='Escreva um comentário você também...' type="text" />
            <button>Publicar</button>
          </div>
        </div>
        <div className='endereco'>
          <h2>Endereço</h2>
          <span>Visite o restaurante!</span>
          <p>Rua das Flores, 123	- São Paulo	SP - 12345678 -	Jardim Paulista</p>
        </div>
      </section>
    </>
  );
}