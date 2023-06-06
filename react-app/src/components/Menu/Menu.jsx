import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import './Menu.css';

export const HamburgerIcon = () => (
    <div className="hamburger">
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
    </div>
);

export const CloseIcon = () => (
    <div className="close">
        <div className="close-bar"></div>
        <div className="close-bar"></div>
    </div>
);

export default function Menu(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isResponsivity, setIsResponsivity] = useState(false);
    const { isWhite, isShadow, IsLetterShadow } = props;

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setIsOpen(false);
                setIsResponsivity(true)
            } else {
                setIsOpen(true);
                setIsResponsivity(false)
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        sessionStorage.removeItem('user');
        navigate('/')
        setIsOpen(false)
    }

    return (
        <>
            <nav className={`${isWhite ? 'white' : ''}${isShadow ? ' shadow-nav' : ''}${isResponsivity && isOpen ? ' backgroundColorNav' : ''}`}>
                <div className='header-nav'>
                    <Link className={`${isWhite ? 'font-black' : ''}${IsLetterShadow ? ' letter-shadow' : ''}`} to='/'>SustentaAção</Link>
                    <button className='btn-reponsive' onClick={toggleMenu}>
                        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </button>
                </div>
                {isOpen && (
                    <div className='labels'>
                        <ul>
                            <li><Link className={`${isWhite ? 'font-black' : ''}${IsLetterShadow ? ' letter-shadow' : ''}`} to='/restaurantes'>Restaurantes</Link></li>
                            <li><Link className={`${isWhite ? 'font-black' : ''}${IsLetterShadow ? ' letter-shadow' : ''}`} to='/blog'>Blog</Link></li>
                            {sessionStorage.getItem('user') && (
                                <li><Link className={`${isWhite ? 'font-black' : ''}${IsLetterShadow ? ' letter-shadow' : ''}`} to='/meu-perfil'>Meu perfil</Link></li>
                            )}
                        </ul>
                        {!sessionStorage.getItem('user') ? (
                            <div>
                                <Link className={`SignIn ${isWhite ? 'font-black' : ''}`} to='/sign-in'>Sign In</Link>
                                <Link className='SignUp' to='/sign-up'>Sign Up</Link>
                            </div>
                        ) : (
                            <div>
                                <a onClick={() => logout()} className={`SignIn ${isWhite ? 'font-black' : ''}`}>Log Out</a>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
}