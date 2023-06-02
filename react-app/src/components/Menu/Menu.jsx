import './Menu.css';

import { Link } from 'react-router-dom'

export default function Menu(props) {

    return (
        <>
            <nav className={props.isWhite ? 'white' : ''}>
                <Link className={props.isWhite ? 'font-black' : ''} to='/'>SustentaAção</Link>
                <ul>
                    <li><Link className={props.isWhite ? 'font-black' : ''} to='/restaurantes'>Restaurantes</Link></li>
                    <li><Link className={props.isWhite ? 'font-black' : ''} to='/blog'>Blog</Link></li>
                    <li><Link className={props.isWhite ? 'font-black' : ''} to='/meu-perfil'>Meu perfil</Link></li>
                </ul>
                <div>
                    <Link className={`SignIn ${props.isWhite ? 'font-black' : ''}`} to='/sign-in'>Sign In</Link>
                    <Link className='SignUp' to='/sign-up'>Sign Up</Link>
                </div>
            </nav>
        </>
    );
}