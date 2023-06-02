import './Artigo.css';

import Menu from '../../components/Menu/Menu';

import { FaRegHeart } from 'react-icons/fa';

export default function Artigo() {
  return (
    <>
      <Menu></Menu>
      <section className='artigo'>
        <div className='img-fundo' />
        <div className='article'>
          <div className='content-article'>
            <h2>Explorando as Possibilidades da IA Generativa</h2>
            <span>IA generativa</span>
            <p>A Inteligência Artificial (IA) tem se mostrado uma ferramenta incrivelmente poderosa em uma infinidade de aplicações, desde o reconhecimento de fala até a análise de dados. No entanto, uma das áreas mais promissoras e emocionantes da IA é a geração de conteúdo, ou IA generativa.

              A IA generativa se refere a algoritmos que podem criar algo novo, seja um texto, uma imagem, uma peça musical ou até mesmo um design de produto. Esses algoritmos não apenas replicam ou classificam dados existentes, mas também geram novas criações a partir de um conjunto de regras ou parâmetros.

              Um exemplo bem conhecido de IA generativa são as Redes Adversariais Generativas (GANs). As GANs consistem em dois componentes principais: um gerador que cria novas instâncias, e um discriminador que tenta diferenciar entre instâncias reais e criadas. O gerador aprende a melhorar suas criações com base no feedback do discriminador.

              A IA generativa tem uma variedade de aplicações potenciais. No campo das artes, por exemplo, já foi usada para criar novas pinturas, músicas e histórias. Na indústria, pode ser usada para criar designs de produtos ou para desenvolver novas soluções para problemas complexos.

              No entanto, a IA generativa também levanta questões importantes sobre autoria e ética. Quem é o autor de uma obra de arte criada por uma IA? Como garantir que a IA generativa seja usada de maneira responsável e não seja usada para criar conteúdo enganoso ou prejudicial?

              Também há desafios técnicos a serem superados. A IA generativa ainda está em sua infância e muitas de suas criações são imperfeitas. Além disso, os algoritmos de IA generativa podem ser extremamente intensivos em termos de computação e requerer grandes quantidades de dados para treinamento.

              Apesar desses desafios, a IA generativa tem um enorme potencial. À medida que a tecnologia avança, é provável que vejamos cada vez mais aplicações impressionantes dessa nova e emocionante área da IA.</p>
            <div className='btn-curtir'><FaRegHeart/><span>curtir</span></div>
            <div className='comentarios'>
              <h2>Opiniões sobre o Artigo</h2>
              <p>Essa é uma sessão para você poder visualizar a opinião das pessoas sobre este artigo e escrever também o que achou.</p>
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
          </div>
        </div>
      </section>
    </>
  );
}