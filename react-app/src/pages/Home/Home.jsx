import './Home.css';

import { Link } from 'react-router-dom'

import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante';

export default function Home() {
    return (
        <>
            <Menu></Menu>
            <section className="section-banner">
                <div className="banner">
                    <div>
                        <h2>Descubra práticas sustentáveis e ajude a alimentar o mundo.</h2>
                        <button>Conhecer mais</button>
                    </div>
                    <img src="https://blush.design/api/download?shareUri=5erlmsVJI0brpVVe&c=Clothes_0%7Ee85d5d-0.1%7E323c84_Hair_0%7E50271b-0.1%7E50271b_Skin_0%7Ee88f70-0.1%7Ee88f70&w=800&h=800&fm=png" alt="Banner Imagem" />
                </div>
                <div className="topics-banner">
                    <div className="topic">
                        <div className="topic-image">
                            <img src="https://img.icons8.com/ios-filled/100/000000/healthy-food.png" alt="healthy-food" />
                        </div>
                        <div className="topic-text">
                            <p className="topic-title">Restaurantes Sustentáveis</p>
                            <p className="topic-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, porro asperiores. Facere aliquam hic excepturi accusamus quod molestias aliquid eius, ad asperiores. Error repudiandae modi enim ab iste labore tenetur!</p>
                        </div>
                    </div>
                    <div className="topic">
                        <div className="topic-image">
                            <img src="https://img.icons8.com/ios-filled/100/000000/hungry.png" alt="hungry" />
                        </div>
                        <div className="topic-text">
                            <p className="topic-title">Redução de disperdício de comida</p>
                            <p className="topic-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, porro asperiores. Facere aliquam hic excepturi accusamus quod molestias aliquid eius, ad asperiores. Error repudiandae modi enim ab iste labore tenetur!</p>
                        </div>
                    </div>
                    <div className="topic">
                        <div className="topic-image">
                            <img src="https://img.icons8.com/ios-filled/100/000000/conference-call.png" alt="conference-call" />
                        </div>
                        <div className="topic-text">
                            <p className="topic-title">Alcance da comunidade</p>
                            <p className="topic-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, porro asperiores. Facere aliquam hic excepturi accusamus quod molestias aliquid eius, ad asperiores. Error repudiandae modi enim ab iste labore tenetur!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="restaurantes-home">
                <h1>Conheça restaurantes sustentáveis</h1>
                <p>Nós fornecemos uma seção especial na qual é dedicada a listar restaurantes te dizemos se eles contribuem com práticas sustentáveis.</p>
                <div className="lista-restaurantes">
                    <Link to='restaurante-individual'>
                        <CardRestaurante></CardRestaurante>
                    </Link>
                    <Link to='restaurante-individual'>
                        <CardRestaurante></CardRestaurante>
                    </Link>
                    <Link to='restaurante-individual'>
                        <CardRestaurante></CardRestaurante>
                    </Link>
                </div>
                <Link to='/restaurantes'>Veja mais restaurantes <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/arrow-pointing-left--v2.png" alt="arrow-pointing-left--v2" /></Link>
            </section >

            <section className='artigos'>
                <div className="blocoartigo">
                    <img className="imgFlatCategoria" src="https://blush.design/api/download?shareUri=gPly_8JexV8hW5BL&c=Bottom_0%7E89c5cc_Hair_0%7E2c1b18_Skin_0%7Edcae92_Top_0%7Ef2f2f2&w=800&h=800&fm=png" alt="" />
                    <div className="campoartigo">
                        <h3>Venha conhecer o nosso <strong>Blog</strong></h3>
                        <p className="descricaoartigo">Nele você encontrará artigos sobre diversos assuntos</p>
                        <Link to='/blog' className="checkartigo">
                            <p>Tecnologias inovadoras</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>Combate à fome mundial</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>Escassez de alimentos</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>IA generativa</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>Agricultura vertical</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>Aquaponia</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>Hidroponia</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>Distribuição de alimentos</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className="checkartigo">
                            <p>Melhorias na distribuição de alimentos</p>
                            <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                        </Link>
                        <Link to='/blog' className='btn-todos-artigos'>Veja todos os artigos <img src="https://img.icons8.com/ios-glyphs/90/ffffff/arrow-pointing-left--v2.png" alt="arrow-pointing-left--v2" /></Link>
                    </div>
                </div>
            </section>
            <section className='introducao'>
                <p>Bem-vindo à nossa plataforma, uma iniciativa dedicada a combater a fome mundial e a escassez de alimentos, ao mesmo tempo em que promove a sustentabilidade na indústria de alimentos. Nosso objetivo é informar, inspirar e mobilizar nossa comunidade para fazer a diferença.</p>
                <p>Em nosso blog, trazemos a você uma variedade de artigos sobre tecnologias inovadoras, agricultura sustentável, IA generativa e práticas agrícolas avançadas, como agricultura vertical, aquaponia e hidroponia. Procuramos conscientizar sobre as questões críticas que o mundo enfrenta em relação à fome e à distribuição de alimentos, além de destacar soluções inovadoras que estão sendo implementadas globalmente.</p>
                <p>Além disso, temos orgulho em apresentar uma lista crescente de restaurantes que implementam práticas sustentáveis em suas operações diárias. Ao apoiar estes estabelecimentos, você contribui para um futuro alimentar mais verde e justo. Como usuário, você pode avaliar e comentar sobre os restaurantes, compartilhando suas experiências com a comunidade.</p>
                <p>Junte-se a nós nesta jornada para promover um futuro onde ninguém passe fome e todos tenham acesso a alimentos sustentáveis e nutritivos. Juntos, podemos fazer a diferença.</p>
            </section>
            <section className='sugestoes'>
                <div className='sugestoes-textos'>
                    <h2>Nos mande sugestões, perguntas ou comentários...</h2>
                    <p>Estamos abertos para ouvir vocês.</p>
                </div>
                <div className='sugestoes-inputs'>
                    <input placeholder='Digite o seu e-mail' type='email' className='email-sugestoes' />
                    <textarea placeholder='Escreva aqui...' className='sugestoes' />
                    <button>Enviar</button>
                </div>
            </section>
            <section className='parceiros'>
                <h1>Parceiros</h1>
                <p>Esse projeto foi feito em parceria com empresas que lutam pela causa e buscam ajudar.</p>
                <div className='line'></div>
                <div className='marcas'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Fiap-logo-novo.jpg" alt="" />
                    <img src="https://logodownload.org/wp-content/uploads/2019/05/kraft-heinz-logo.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="" />
                    <img src="https://www.cacafome.com.br/assets/img/footer-logo.png" alt="" />
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}