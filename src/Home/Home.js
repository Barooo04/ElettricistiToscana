import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const moveTo = (section) => {
        const sectionElement = document.getElementById(section);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="home-container">
            <div className="navbar">
                <div className="navbar-logo">
                </div>
                <div className="navbar-items">
                    <p className="navbar-item" onClick={() => moveTo('come-funziona-section')}>Come funziona</p>
                    <p className="navbar-item" onClick={() => moveTo('perche-noi-section')}>Perché noi?</p>
                    <p className="navbar-item" onClick={() => moveTo('footer')}>Contatti</p>
                    <p className="area-venditori-button">Area Professionisti</p>
                </div>
            </div>

            <div className="hero-section" id="hero-section">
                <div className="hero-form-container">
                    <h1>Richiedi subito il tuo preventivo!</h1>
                    <form className="hero-form">
                        <div className="hero-form-row">
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Cognome" />
                        </div>
                        <div className="hero-form-row">
                            <input type="text" placeholder="Provincia" />
                            <input type="text" placeholder="Comune" />
                        </div>
                        <div className="hero-form-row">
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Telefono" />
                        </div>
                        <textarea className="hero-form-textarea" placeholder="Messaggio..." />
                        <button className="hero-form-button" type="submit">Invia</button>
                    </form>
                </div>
            </div>

            <div className="come-funziona-section" id="come-funziona-section">
                <h1>Cosa è <span className="elettricisti-toscana-title">Elettricisti Toscana?</span></h1>
                <div className="come-funziona-content">
                    <div className="come-funziona-content-item">
                        <h2>Hai bisogno urgente di un elettricista? Noi te lo troviamo gratis!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="come-funziona-image">
                        <div className="come-funziona-image-item"></div>
                    </div>
                </div>
            </div>

            <div className="come-funziona-2-section" id="come-funziona-section">
                <div className="come-funziona-2-content">
                    <div className="come-funziona-2-image">
                        <div className="come-funziona-2-image-item"></div>
                    </div>
                    <div className="come-funziona-2-content-item">
                        <h2>Segui questi semplici passaggi per richiedere il tuo preventivo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className="come-funziona-2-button-container">
                            <button className="come-funziona-2-button" onClick={() => moveTo('hero-section')}>Richiedi preventivo</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="perche-noi-section" id="perche-noi-section">
                <h1>Perché scegliere noi?</h1>
                <div className="perche-noi-content">
                    <div className="perche-noi-item">
                        <FontAwesomeIcon icon={faShieldAlt} className="perche-noi-icon"/>
                        <h2>Sicurezza</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="perche-noi-item">
                        <FontAwesomeIcon icon={faStar} className="perche-noi-icon"/>
                        <h2>Esclusività</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="perche-noi-item">
                        <FontAwesomeIcon icon={faCheckCircle} className="perche-noi-icon"/>
                        <h2>Qualità</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div className="professionisti-section">
                <div className="professionisti-content">
                    <div className="professionisti-item">
                        <h2>Sei un professionista? Registrati subito!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="professionisti-button">Registrati subito</button>
                    </div>
                    <div className="professionisti-image">
                        <div className="professionisti-image-item"></div>
                    </div>
                </div>
            </div>

            <div className="footer" id="footer">
                <div className="footer-main">
                    <div className="footer-logo">
                        <div className="placeholder-logo"></div>
                    </div>
                    <div className="footer-sitemap">
                        <h3>Mappa del sito</h3>
                        <ul>
                            <li onClick={() => moveTo('chi-siamo-section')}>Chi Siamo</li>
                            <li>Servizi</li>
                            <li>Contatti</li>
                            <li>Area Venditori</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info">
                    <span>Tel: +39 123 456 7890</span>
                    <span className="separator">|</span>
                    <span>Email: info@elettricistitoscana.it</span>
                    <span className="separator">|</span>
                    <span>Elettricisti Toscana</span>
                    <span className="separator">|</span>
                    <span>P.IVA: 12345678901</span>
                </div>
                <div className="footer-powered">
                    <span>Powered by HiWeb</span>
                </div>
            </div>
        </div>
    );
};

export default Home;