import './Footer.css';

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="row links_uteis">
                    <h2>Links úteis:</h2>
                    <Link to='/restaurantes'>Restaurantes</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link className='SignIn' to='/sign-in'>Sign In</Link>
                    <Link className='SignUp' to='/sign-up'>Sign Up</Link>
                </div>
                <p>SustentaAção | Todos os direitos reservados <sup>©</sup></p>
            </footer>
        </>
    );
}