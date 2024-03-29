import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import './Home.css';
import 'react-toastify/dist/ReactToastify.css';

import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante';
import Loader from '../../components/Loader/Loader';

export default function Home() {
    const [restaurantes, setRestaurantes] = useState(null);
    const [categorias, setCategorias] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        loadCategorias();
        loadRestaurantes();
    }, []);

    function loadRestaurantes() {
        axios.get('http://localhost:8080/GlobalSolution/rest/restaurantepraticasustentavel/')
            .then(response => {
                console.log(response)
                if (response.status === 200 && response.data !== []) {
                    setRestaurantes(response.data);
                    setIsLoading(false);
                    if (response.data.length === 0) {
                        toast.info('Nenhum restaurante encontrado.');
                    }
                }
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
                toast.error('Ocorreu ao carregar os restaurantes.');
            });
    }

    function loadCategorias() {
        const cachedCategories = sessionStorage.getItem('categoriasArtigos');

        if (cachedCategories) {
            setCategorias(JSON.parse(cachedCategories))
        } else {
            axios.get('http://localhost:8080/GlobalSolution/rest/categoria/')
                .then(response => {
                    if (response.status === 200) {
                        setCategorias(response.data);
                        sessionStorage.setItem('categoriasArtigos', JSON.stringify(response.data));
                        if (response.data.length === 0) {
                            toast.info('Nenhuma categoria encontrada.');
                        }
                    }
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Ocorreu ao carregar as categorias.');
                });
        }
    }

    const renderList = () => {
        if (!restaurantes) {
            return <p className='rest-nao-encontrado'>Restaurantes não encontrado.</p>;
        }

        const uniqueRestaurantes = restaurantes.reduce((acc, item) => {
            if (!acc.find(restaurante => restaurante.restaurante.cnpj === item.restaurante.cnpj)) {
                acc.push(item);
            }
            return acc;
        }, []);

        const slicedData = uniqueRestaurantes.slice(0, 3);

        return (
            <>
                {slicedData.map(item => (
                    <a onClick={() => direcionarRestaurante(item.restaurante, getPraticasSustentaveisByRestaurante(item.restaurante.cnpj))} key={item.restaurante.cnpj}>
                        <CardRestaurante restaurante={item.restaurante.nome} praticas={getPraticasSustentaveisByRestaurante(item.restaurante.cnpj)}></CardRestaurante>
                    </a>
                ))}
            </>
        );
    };

    const direcionarRestaurante = (dadosRestaurante, praticasSustentaveis) => {
        navigate('/restaurante-individual', { state: { dadosRestaurante, praticasSustentaveis } })
    }

    const getPraticasSustentaveisByRestaurante = (cnpjRestaurante) => {
        const praticas = restaurantes.filter(item => item.restaurante.cnpj === cnpjRestaurante);
        return praticas.map(item => item.praticaSustentavel);
    };

    function handleCategoriaClick(categoria) {
        return categoria ? `/blog?categoria=${categoria}` : '/blog';
    }

    return (
        <>
            <ToastContainer />
            <Menu></Menu>
            <section className="section-banner">
                <div className="banner">
                    <div>
                        <h2>Descubra práticas sustentáveis e ajude a alimentar o mundo.</h2>
                        <Link to="/blog">Conhecer mais</Link>
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
                            <p className="topic-description">Restaurantes sustentáveis são negócios conscientes do impacto ambiental e social de suas operações. Eles adotam práticas para minimizar o desperdício, incentivam a economia local e respeitam a biodiversidade, reinventando a indústria alimentar para um consumo mais responsável.</p>
                        </div>
                    </div>
                    <div className="topic">
                        <div className="topic-image">
                            <img src="https://img.icons8.com/ios-filled/100/000000/hungry.png" alt="hungry" />
                        </div>
                        <div className="topic-text">
                            <p className="topic-title">Redução de disperdício</p>
                            <p className="topic-description">A redução de desperdício de comida é fundamental para a sustentabilidade do planeta. O desperdício alimentar contribui para a escassez de recursos e para as emissões de gases de efeito estufa. Práticas como planejamento de refeições e compostagem de resíduos ajudam a minimizar esse impacto.</p>
                        </div>
                    </div>
                    <div className="topic">
                        <div className="topic-image">
                            <img src="https://img.icons8.com/ios-filled/100/000000/conference-call.png" alt="conference-call" />
                        </div>
                        <div className="topic-text">
                            <p className="topic-title">Alcance da comunidade</p>
                            <p className="topic-description">O alcance da comunidade é essencial para negócios sustentáveis. Além de promover práticas ecológicas, é importante envolver a comunidade local, fortalecendo a economia local e criando uma cultura de sustentabilidade. Isso pode ser feito através de parcerias com produtores locais e programas de educação ambiental.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="restaurantes-home">
                <h1>Conheça restaurantes sustentáveis</h1>
                <p>Nós fornecemos uma seção especial na qual é dedicada a listar restaurantes te dizemos se eles contribuem com práticas sustentáveis.</p>

                {isLoading ? (
                    <Loader></Loader>
                ) : (
                    <div className="lista-restaurantes">
                        {renderList()}
                    </div>
                )}
                <Link to='/restaurantes'>Veja mais restaurantes <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/arrow-pointing-left--v2.png" alt="arrow-pointing-left--v2" /></Link>
            </section >

            <section className='artigos'>
                <div className="blocoartigo">
                    <img className="imgFlatCategoria" src="https://blush.design/api/download?shareUri=gPly_8JexV8hW5BL&c=Bottom_0%7E89c5cc_Hair_0%7E2c1b18_Skin_0%7Edcae92_Top_0%7Ef2f2f2&w=800&h=800&fm=png" alt="" />
                    <div className="campoartigo">
                        <h3>Venha conhecer o nosso <strong>Blog</strong></h3>
                        <p className="descricaoartigo">Nele você encontrará artigos sobre diversos assuntos</p>
                        <div className='categorias-article'>
                            {categorias && categorias.length > 1 ? (
                                categorias.map(item => (
                                    <Link key={item.id} to={handleCategoriaClick(item.descricao)} className="checkartigo">
                                        <p>{item.descricao}</p>
                                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/chevron-right.png" alt="chevron-right" />
                                    </Link>
                                ))
                            ) : (
                                <p>Nenhuma categoria encontrada.</p>
                            )}
                        </div>
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