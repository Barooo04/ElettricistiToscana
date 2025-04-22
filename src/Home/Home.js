import React, { useState, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faCheckCircle, faUsers, faClock, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import video from '../Media/video.mp4';
import foto1 from '../Media/foto1.jpg';
import foto2 from '../Media/foto2.jpg';
import foto3 from '../Media/foto3.jpg';
import logoEsteso from '../Media/logoEsteso.png';

const Home = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const [formData, setFormData] = useState({
        indirizzo: '',
        tipoIntervento: '',
        tipoImmobile: '',
        urgenza: '',
        orarioChiamata: ''
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsNavbarSticky(true);
            } else {
                setIsNavbarSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqData = [
        {
            id: 1,
            question: "Quanto costa il servizio?",
            answer: "Il servizio di ricerca e matching con i professionisti è completamente gratuito. Pagherai solo il lavoro effettivamente svolto dall'elettricista scelto."
        },
        {
            id: 2,
            question: "Come vengono selezionati gli elettricisti?",
            answer: "Tutti i professionisti vengono accuratamente verificati. Controlliamo le loro certificazioni, assicurazioni e recensioni prima di ammetterli sulla piattaforma."
        },
        {
            id: 3,
            question: "Quanto tempo ci vuole per ricevere i preventivi?",
            answer: "In media, riceverai i primi preventivi entro 2 ore dalla richiesta. Per interventi urgenti, i tempi possono essere ancora più rapidi."
        },
        {
            id: 4,
            question: "In quali zone operate?",
            answer: "Il nostro servizio copre tutta la Toscana, con professionisti disponibili in ogni provincia."
        }
    ];

    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };

    const moveTo = (section) => {
        const sectionElement = document.getElementById(section);
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    return (
        <div className="home-container">
            <div className={`navbar ${isNavbarSticky ? 'sticky' : ''}`}>
                <div className="navbar-logo">
                    <img src={logoEsteso} alt="Elettricisti Toscana Logo" className="logo-img" />
                </div>
                <div className="navbar-items">
                    <p className="navbar-item" onClick={() => moveTo('chi-siamo')}>Chi Siamo</p>
                    <p className="navbar-item" onClick={() => moveTo('steps-section')}>Come Funziona</p>
                    <p className="navbar-item" onClick={() => moveTo('stats-section')}>I Nostri Numeri</p>
                    <p className="navbar-item" onClick={() => moveTo('faq-section')}>FAQ</p>
                    <p className="area-venditori-button" onClick={() => window.location.href = '/login'}>Area Professionisti</p>
                </div>
            </div>

            <div className="hero-section" id="hero-section">
                <video 
                    className="hero-video" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    src={video}
                >
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-form-container">
                    <h1>Richiedi subito il tuo preventivo!</h1>
                    <form className="hero-form" onSubmit={handleSubmit}>
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

            <div className="come-funziona-section" id="chi-siamo">
                <h1>Cosa è <span className="elettricisti-toscana-title">Elettricisti Toscana?</span></h1>
                <div className="come-funziona-content">
                    <div className="come-funziona-content-item">
                        <h2>Hai bisogno urgente di un elettricista? Noi te lo troviamo gratis!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="come-funziona-image">
                        <div className="come-funziona-image-item">
                            <img src={foto1} alt="Elettricista al lavoro su un impianto elettrico" className="come-funziona-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="come-funziona-2-section">
                <div className="come-funziona-2-content">
                    <div className="come-funziona-2-image">
                        <div className="come-funziona-2-image-item">
                            <img src={foto2} alt="Stretta di mano tra professionista e cliente" className="come-funziona-img" />
                        </div>
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

            <div className="steps-section" id="steps-section">
                <h1 className="section-title">Come funziona in <span className="elettricisti-toscana-title">4 semplici passi</span></h1>
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Descrivi il lavoro</h3>
                        <p>Compila il form specificando il tipo di intervento di cui hai bisogno e la tua zona</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Ricevi preventivi</h3>
                        <p>I migliori elettricisti della tua zona ti contatteranno con le loro proposte</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Confronta e scegli</h3>
                        <p>Valuta i preventivi ricevuti e scegli il professionista più adatto alle tue esigenze</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">4</div>
                        <h3>Lascia una recensione</h3>
                        <p>Condividi la tua esperienza per aiutare altri utenti nella scelta</p>
                    </div>
                </div>
            </div>

            <div className="professionisti-section">
                <div className="professionisti-content">
                    <div className="professionisti-item">
                        <h1 className="section-title" style={{marginBottom: '0px'}}>Sei un <span className="elettricisti-toscana-title">Professionista?</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="professionisti-button">Registrati subito</button>
                    </div>
                    <div className="professionisti-image">
                        <div className="professionisti-image-item">
                            <img src={foto3} alt="Quadro elettrico professionale" className="come-funziona-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-section" id="stats-section">
                <h1 className="section-title">Perché scegliere Elettricisti Toscana?</h1>
                <div className="stats-container">
                    <div className="stat-card">
                        <FontAwesomeIcon icon={faUsers} className="stat-icon"/>
                        <h2>500+</h2>
                        <p>Professionisti verificati</p>
                    </div>
                    <div className="stat-card">
                        <FontAwesomeIcon icon={faCheckCircle} className="stat-icon"/>
                        <h2>2000+</h2>
                        <p>Lavori completati</p>
                    </div>
                    <div className="stat-card">
                        <FontAwesomeIcon icon={faStar} className="stat-icon"/>
                        <h2>4.8/5</h2>
                        <p>Valutazione media</p>
                    </div>
                    <div className="stat-card">
                        <FontAwesomeIcon icon={faClock} className="stat-icon"/>
                        <h2>2h</h2>
                        <p>Tempo medio di risposta</p>
                    </div>
                </div>
            </div>

            <div className="faq-section" id="faq-section">
                <h1 className="section-title">Domande <span className="elettricisti-toscana-title">Frequenti</span></h1>
                <div className="faq-container">
                    {faqData.map((faq) => (
                        <div 
                            key={faq.id} 
                            className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
                            onClick={() => toggleFaq(faq.id)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <FontAwesomeIcon 
                                    icon={expandedFaq === faq.id ? faMinus : faPlus} 
                                    className="faq-icon"
                                />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer" id="footer">
                <div className="footer-main">
                    <div className="footer-logo">
                        <img src={logoEsteso} alt="Elettricisti Toscana Logo" className="logo-img" />
                    </div>
                    <div className="footer-professionista-container">
                        <h3>Area Professionisti</h3>
                        <p className="footer-professionista-button" onClick={() => window.location.href = '/login'}>Accedi</p>
                    </div>
                    <div className="footer-sitemap">
                        <h3>Mappa del sito</h3>
                        <ul>
                            <li onClick={() => moveTo('chi-siamo')}>Chi Siamo</li>
                            <li onClick={() => moveTo('steps-section')}>Come Funziona</li>
                            <li onClick={() => moveTo('stats-section')}>I Nostri Numeri</li>
                            <li onClick={() => moveTo('faq-section')}>FAQ</li>
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

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Completa il tuo preventivo</h2>
                        <p className="popup-description">
                            Puoi fornire ulteriori dettagli per aiutarci a trovare il professionista più adatto alle tue esigenze. 
                            Non è obbligatorio compilare tutti i campi: puoi inserire solo le informazioni che desideri o procedere 
                            direttamente con l'invio del preventivo.
                        </p>
                        <form className="popup-form">
                            <div className="popup-columns">
                                <div className="popup-left-column">
                                    <div className="popup-form-group">
                                        <input 
                                            type="text" 
                                            placeholder="Indirizzo"
                                            value={formData.indirizzo}
                                            onChange={(e) => setFormData({...formData, indirizzo: e.target.value})}
                                        />
                                    </div>

                                    <div className="popup-form-group">
                                        <select 
                                            value={formData.tipoIntervento}
                                            onChange={(e) => setFormData({...formData, tipoIntervento: e.target.value})}
                                        >
                                            <option value="">Seleziona tipo di intervento</option>
                                            <option value="intervento1">Intervento 1</option>
                                            <option value="intervento2">Intervento 2</option>
                                            <option value="intervento3">Intervento 3</option>
                                        </select>
                                    </div>

                                    <div className="popup-form-group">
                                        <select 
                                            value={formData.tipoImmobile}
                                            onChange={(e) => setFormData({...formData, tipoImmobile: e.target.value})}
                                        >
                                            <option value="">Seleziona tipo di immobile</option>
                                            <option value="tipo1">Tipo 1</option>
                                            <option value="tipo2">Tipo 2</option>
                                            <option value="tipo3">Tipo 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="popup-right-column">
                                    <div className="popup-form-group">
                                        <h3>Urgenza</h3>
                                        <div className="card-selection">
                                            {['Immediata', '1 mese', '2 mesi', '3 mesi'].map((urgenza) => (
                                                <div 
                                                    key={urgenza}
                                                    className={`selection-card ${formData.urgenza === urgenza ? 'active' : ''}`}
                                                    onClick={() => setFormData({
                                                        ...formData, 
                                                        urgenza: formData.urgenza === urgenza ? '' : urgenza
                                                    })}
                                                >
                                                    {urgenza}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="popup-form-group">
                                        <h3>Orario di chiamata</h3>
                                        <div className="card-selection">
                                            {['8-10', '10-12', '12-14', '14-16', '16-18'].map((orario) => (
                                                <div 
                                                    key={orario}
                                                    className={`selection-card ${formData.orarioChiamata === orario ? 'active' : ''}`}
                                                    onClick={() => setFormData({
                                                        ...formData, 
                                                        orarioChiamata: formData.orarioChiamata === orario ? '' : orario
                                                    })}
                                                >
                                                    {orario}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="popup-footer">
                                <div className="popup-buttons">
                                    <button type="button" onClick={() => setShowPopup(false)}>Annulla</button>
                                    <button type="submit">Conferma</button>
                                </div>
                                <p className="popup-footer-note">
                                    Verrai contattato da un massimo di 3-4 professionisti nei prossimi giorni
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;