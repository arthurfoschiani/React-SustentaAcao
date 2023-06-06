import './Footer.css';

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer id='footer'>
                <div className="row links_uteis">
                    <h2>Links úteis:</h2>
                    <Link to='/restaurantes'>Restaurantes</Link>
                    <Link to='/blog'>Blog</Link>
                    {!sessionStorage.getItem('user') && (
                        <>
                            <Link className='SignIn' to='/sign-in'>Sign In</Link>
                            <Link className='SignUp' to='/sign-up'>Sign Up</Link>
                        </>
                    )}
                </div>
                <div className="names-footer">
                    <p>Alícia Vitória Guiradelo da Silva</p>
                    <p>Ana Carlina Dantas Prado</p>
                    <p>Arthur Foschiani de Souza</p>
                    <p>Larah Rangel Feliciano Correa</p>
                </div>
                <p>SustentaAção | Todos os direitos reservados <sup>©</sup></p>
            </footer>
        </>
    );
}