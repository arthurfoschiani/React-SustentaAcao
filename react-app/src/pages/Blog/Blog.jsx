import './Blog.css';

import { Link } from 'react-router-dom';

import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import CardArtigo from '../../components/CardArtigo/CardArtigo';

export default function Blog() {
  return (
    <>
      <Menu></Menu>
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
          <Link to='/artigo'>
            <CardArtigo></CardArtigo>
          </Link>
          <Link to='/artigo'>
            <CardArtigo></CardArtigo>
          </Link>
          <Link to='/artigo'>
            <CardArtigo></CardArtigo>
          </Link>
          <Link to='/artigo'>
            <CardArtigo></CardArtigo>
          </Link>
          <Link to='/artigo'>
            <CardArtigo></CardArtigo>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}