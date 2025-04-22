import React, { useState } from 'react';
import './LoginSignup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logoEsteso from '../Media/logoEsteso.png';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-signup-container">
            <Link to="/" className="back-to-home">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Torna alla Home</span>
            </Link>

            <div className={`login-signup-box ${isLogin ? '' : 'signup-mode'}`}>
                <div className="colored-side">
                    <img src={logoEsteso} alt="Elettricisti Toscana Logo" className="login-logo" />
                    <h2>{isLogin ? 'Bentornato' : 'Benvenuto'}</h2>
                    <p>{isLogin 
                        ? 'Accedi al tuo account per gestire i tuoi servizi' 
                        : 'Registrati per iniziare a utilizzare i nostri servizi'}
                    </p>
                </div>
                <div className="form-side">
                    {isLogin ? (
                        <div className="form-wrapper">
                            <form className="login-form">
                                <h2>Login</h2>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit">Accedi</button>
                            </form>
                            <p className="switch-prompt">
                                Non hai l'account? 
                                <span onClick={toggleForm} className="switch-link">
                                    Registrati subito
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div className="form-wrapper">
                            <form className="signup-form">
                                <h2>Registrazione</h2>
                                <div className="name-row">
                                    <input type="text" placeholder="Nome" />
                                    <input type="text" placeholder="Cognome" />
                                </div>
                                <input type="email" placeholder="Email" />
                                <input type="piva" placeholder="Partita IVA" />
                                <button type="submit">Registrati</button>
                            </form>
                            <p className="switch-prompt">
                                Hai già un account? 
                                <span onClick={toggleForm} className="switch-link">
                                    Fai il login
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;