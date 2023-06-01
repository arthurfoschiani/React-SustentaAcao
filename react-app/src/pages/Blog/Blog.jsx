import './Blog.css';

import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <section className='blog'>
        <div className='search-area'>
          <h1>Faça parte da mudança</h1>
          <p>Saiba como as IAs generativas estão construindo um futuro sem fome dentre outros assuntos...</p>
        </div>
        <div className='categoria-artigos'>
          <li>Tecnologias inovadoras</li>
          <li>Agricultura sustentável</li>
          <li>Combate à fome mundial</li>
          <li>Escassez de alimentos</li>
          <li className='categoria-ativa'>IA generativa</li>
          <li>Agricultura vertical</li>
          <li>Aquaponia</li>
          <li>Hidroponia</li>
          <li>Distribuição de alimentos</li>
          <li>Melhorias na distribuição de alimentos</li>
        </div>
        <div className='artigos-blog'>
          <Link to='/artigo' className='artigo-individual-blog'>
            <img src="https://fastcompanybrasil.com/wp-content/uploads/2022/11/IA_generativa.jpg" alt="" />
            <div>
              <span>IA generativa</span>
              <h2>Explorando as Possibilidades da IA Generativa</h2>
              <h3>A Inteligência Artificial (IA) tem se mostrado uma ferramenta incrivelmente poderosa em uma infinidade de aplicações, desde o reconhecimento de fala até a análise de dados. No entanto, uma das áreas mais promissoras e emocionantes da IA é a geração de conteúdo, ou IA generativa.

                A IA generativa se refere a algoritmos que podem criar algo novo, seja um texto, uma imagem, uma peça musical ou até mesmo um design de produto. Esses algoritmos não apenas replicam ou classificam dados existentes, mas também geram novas criações a partir de um conjunto de regras ou parâmetros.

                Um exemplo bem conhecido de IA generativa são as Redes Adversariais Generativas (GANs). As GANs consistem em dois componentes principais: um gerador que cria novas instâncias, e um discriminador que tenta diferenciar entre instâncias reais e criadas. O gerador aprende a melhorar suas criações com base no feedback do discriminador.

                A IA generativa tem uma variedade de aplicações potenciais. No campo das artes, por exemplo, já foi usada para criar novas pinturas, músicas e histórias. Na indústria, pode ser usada para criar designs de produtos ou para desenvolver novas soluções para problemas complexos.

                No entanto, a IA generativa também levanta questões importantes sobre autoria e ética. Quem é o autor de uma obra de arte criada por uma IA? Como garantir que a IA generativa seja usada de maneira responsável e não seja usada para criar conteúdo enganoso ou prejudicial?

                Também há desafios técnicos a serem superados. A IA generativa ainda está em sua infância e muitas de suas criações são imperfeitas. Além disso, os algoritmos de IA generativa podem ser extremamente intensivos em termos de computação e requerer grandes quantidades de dados para treinamento.

                Apesar desses desafios, a IA generativa tem um enorme potencial. À medida que a tecnologia avança, é provável que vejamos cada vez mais aplicações impressionantes dessa nova e emocionante área da IA.</h3>
              <button>Ler mais <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/chevron-right.png" alt="chevron-right"/></button>
            </div>
          </Link>
          <div className='artigo-individual-blog'>
            <img src="https://fastcompanybrasil.com/wp-content/uploads/2022/11/IA_generativa.jpg" alt="" />
            <div>
              <span>IA generativa</span>
              <h2>Explorando as Possibilidades da IA Generativa</h2>
              <h3>A Inteligência Artificial (IA) tem se mostrado uma ferramenta incrivelmente poderosa em uma infinidade de aplicações, desde o reconhecimento de fala até a análise de dados. No entanto, uma das áreas mais promissoras e emocionantes da IA é a geração de conteúdo, ou IA generativa.

                A IA generativa se refere a algoritmos que podem criar algo novo, seja um texto, uma imagem, uma peça musical ou até mesmo um design de produto. Esses algoritmos não apenas replicam ou classificam dados existentes, mas também geram novas criações a partir de um conjunto de regras ou parâmetros.

                Um exemplo bem conhecido de IA generativa são as Redes Adversariais Generativas (GANs). As GANs consistem em dois componentes principais: um gerador que cria novas instâncias, e um discriminador que tenta diferenciar entre instâncias reais e criadas. O gerador aprende a melhorar suas criações com base no feedback do discriminador.

                A IA generativa tem uma variedade de aplicações potenciais. No campo das artes, por exemplo, já foi usada para criar novas pinturas, músicas e histórias. Na indústria, pode ser usada para criar designs de produtos ou para desenvolver novas soluções para problemas complexos.

                No entanto, a IA generativa também levanta questões importantes sobre autoria e ética. Quem é o autor de uma obra de arte criada por uma IA? Como garantir que a IA generativa seja usada de maneira responsável e não seja usada para criar conteúdo enganoso ou prejudicial?

                Também há desafios técnicos a serem superados. A IA generativa ainda está em sua infância e muitas de suas criações são imperfeitas. Além disso, os algoritmos de IA generativa podem ser extremamente intensivos em termos de computação e requerer grandes quantidades de dados para treinamento.

                Apesar desses desafios, a IA generativa tem um enorme potencial. À medida que a tecnologia avança, é provável que vejamos cada vez mais aplicações impressionantes dessa nova e emocionante área da IA.</h3>
              <button>Ler mais <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/chevron-right.png" alt="chevron-right"/></button>
            </div>
          </div>
          <div className='artigo-individual-blog'>
            <img src="https://fastcompanybrasil.com/wp-content/uploads/2022/11/IA_generativa.jpg" alt="" />
            <div>
              <span>IA generativa</span>
              <h2>Explorando as Possibilidades da IA Generativa</h2>
              <h3>A Inteligência Artificial (IA) tem se mostrado uma ferramenta incrivelmente poderosa em uma infinidade de aplicações, desde o reconhecimento de fala até a análise de dados. No entanto, uma das áreas mais promissoras e emocionantes da IA é a geração de conteúdo, ou IA generativa.

                A IA generativa se refere a algoritmos que podem criar algo novo, seja um texto, uma imagem, uma peça musical ou até mesmo um design de produto. Esses algoritmos não apenas replicam ou classificam dados existentes, mas também geram novas criações a partir de um conjunto de regras ou parâmetros.

                Um exemplo bem conhecido de IA generativa são as Redes Adversariais Generativas (GANs). As GANs consistem em dois componentes principais: um gerador que cria novas instâncias, e um discriminador que tenta diferenciar entre instâncias reais e criadas. O gerador aprende a melhorar suas criações com base no feedback do discriminador.

                A IA generativa tem uma variedade de aplicações potenciais. No campo das artes, por exemplo, já foi usada para criar novas pinturas, músicas e histórias. Na indústria, pode ser usada para criar designs de produtos ou para desenvolver novas soluções para problemas complexos.

                No entanto, a IA generativa também levanta questões importantes sobre autoria e ética. Quem é o autor de uma obra de arte criada por uma IA? Como garantir que a IA generativa seja usada de maneira responsável e não seja usada para criar conteúdo enganoso ou prejudicial?

                Também há desafios técnicos a serem superados. A IA generativa ainda está em sua infância e muitas de suas criações são imperfeitas. Além disso, os algoritmos de IA generativa podem ser extremamente intensivos em termos de computação e requerer grandes quantidades de dados para treinamento.

                Apesar desses desafios, a IA generativa tem um enorme potencial. À medida que a tecnologia avança, é provável que vejamos cada vez mais aplicações impressionantes dessa nova e emocionante área da IA.</h3>
              <button>Ler mais <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/chevron-right.png" alt="chevron-right"/></button>
            </div>
          </div>
          <div className='artigo-individual-blog'>
            <img src="https://fastcompanybrasil.com/wp-content/uploads/2022/11/IA_generativa.jpg" alt="" />
            <div>
              <span>IA generativa</span>
              <h2>Explorando as Possibilidades da IA Generativa</h2>
              <h3>A Inteligência Artificial (IA) tem se mostrado uma ferramenta incrivelmente poderosa em uma infinidade de aplicações, desde o reconhecimento de fala até a análise de dados. No entanto, uma das áreas mais promissoras e emocionantes da IA é a geração de conteúdo, ou IA generativa.

                A IA generativa se refere a algoritmos que podem criar algo novo, seja um texto, uma imagem, uma peça musical ou até mesmo um design de produto. Esses algoritmos não apenas replicam ou classificam dados existentes, mas também geram novas criações a partir de um conjunto de regras ou parâmetros.

                Um exemplo bem conhecido de IA generativa são as Redes Adversariais Generativas (GANs). As GANs consistem em dois componentes principais: um gerador que cria novas instâncias, e um discriminador que tenta diferenciar entre instâncias reais e criadas. O gerador aprende a melhorar suas criações com base no feedback do discriminador.

                A IA generativa tem uma variedade de aplicações potenciais. No campo das artes, por exemplo, já foi usada para criar novas pinturas, músicas e histórias. Na indústria, pode ser usada para criar designs de produtos ou para desenvolver novas soluções para problemas complexos.

                No entanto, a IA generativa também levanta questões importantes sobre autoria e ética. Quem é o autor de uma obra de arte criada por uma IA? Como garantir que a IA generativa seja usada de maneira responsável e não seja usada para criar conteúdo enganoso ou prejudicial?

                Também há desafios técnicos a serem superados. A IA generativa ainda está em sua infância e muitas de suas criações são imperfeitas. Além disso, os algoritmos de IA generativa podem ser extremamente intensivos em termos de computação e requerer grandes quantidades de dados para treinamento.

                Apesar desses desafios, a IA generativa tem um enorme potencial. À medida que a tecnologia avança, é provável que vejamos cada vez mais aplicações impressionantes dessa nova e emocionante área da IA.</h3>
              <button>Ler mais <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/chevron-right.png" alt="chevron-right"/></button>
            </div>
          </div>
          <div className='artigo-individual-blog'>
            <img src="https://fastcompanybrasil.com/wp-content/uploads/2022/11/IA_generativa.jpg" alt="" />
            <div>
              <span>IA generativa</span>
              <h2>Explorando as Possibilidades da IA Generativa</h2>
              <h3>A Inteligência Artificial (IA) tem se mostrado uma ferramenta incrivelmente poderosa em uma infinidade de aplicações, desde o reconhecimento de fala até a análise de dados. No entanto, uma das áreas mais promissoras e emocionantes da IA é a geração de conteúdo, ou IA generativa.

                A IA generativa se refere a algoritmos que podem criar algo novo, seja um texto, uma imagem, uma peça musical ou até mesmo um design de produto. Esses algoritmos não apenas replicam ou classificam dados existentes, mas também geram novas criações a partir de um conjunto de regras ou parâmetros.

                Um exemplo bem conhecido de IA generativa são as Redes Adversariais Generativas (GANs). As GANs consistem em dois componentes principais: um gerador que cria novas instâncias, e um discriminador que tenta diferenciar entre instâncias reais e criadas. O gerador aprende a melhorar suas criações com base no feedback do discriminador.

                A IA generativa tem uma variedade de aplicações potenciais. No campo das artes, por exemplo, já foi usada para criar novas pinturas, músicas e histórias. Na indústria, pode ser usada para criar designs de produtos ou para desenvolver novas soluções para problemas complexos.

                No entanto, a IA generativa também levanta questões importantes sobre autoria e ética. Quem é o autor de uma obra de arte criada por uma IA? Como garantir que a IA generativa seja usada de maneira responsável e não seja usada para criar conteúdo enganoso ou prejudicial?

                Também há desafios técnicos a serem superados. A IA generativa ainda está em sua infância e muitas de suas criações são imperfeitas. Além disso, os algoritmos de IA generativa podem ser extremamente intensivos em termos de computação e requerer grandes quantidades de dados para treinamento.

                Apesar desses desafios, a IA generativa tem um enorme potencial. À medida que a tecnologia avança, é provável que vejamos cada vez mais aplicações impressionantes dessa nova e emocionante área da IA.</h3>
              <button>Ler mais <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/chevron-right.png" alt="chevron-right"/></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}