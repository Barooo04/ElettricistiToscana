import React, { useState } from 'react';
import './ProfessionistiDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowLeft, 
    faUserClock, 
    faUserCheck, 
    faMoneyBill, 
    faCog, 
    faSignOutAlt,
    faUser,
    faLock,
    faLockOpen,
    faEnvelope,
    faPhone,
    faComment,
    faCamera,
    faEdit,
    faKey,
    faCircle
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const ProfessionistiDashboard = () => {
    const [activeSection, setActiveSection] = useState('contatti');
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();

    const menuItems = [
        { id: 'contatti', icon: faUserCheck, label: 'Contatti' },
        { id: 'rimborsi', icon: faMoneyBill, label: 'Rimborsi' },
        { id: 'impostazioni', icon: faCog, label: 'Impostazioni' }
    ];

    const contatti = [
        { 
            id: 1, 
            nome: 'Paolo', 
            cognome: 'Bianchi', 
            tipo: 'Riparazione',
            telefono: '+39 333 1234567',
            email: 'paolo.bianchi@email.com'
        },
        { 
            id: 2, 
            nome: 'Marco', 
            cognome: 'Neri', 
            tipo: 'Manutenzione',
            telefono: '+39 345 7654321',
            email: 'marco.neri@email.com'
        },
        // Aggiungere altri contatti come esempio
    ];

    const rimborsi = [
        { 
            id: 1, 
            nome: 'Mario', 
            cognome: 'Rossi',
            stato: 'in_approvazione',
            data: '15/03/2024'
        },
        { 
            id: 2, 
            nome: 'Giuseppe', 
            cognome: 'Verdi',
            stato: 'completata',
            data: '12/03/2024'
        },
        { 
            id: 3, 
            nome: 'Paolo', 
            cognome: 'Bianchi',
            stato: 'rifiutata',
            data: '10/03/2024'
        }
    ];

    // login utente
    const professionista = {
        nome: "Mario",
        cognome: "Rossi",
        email: "mario.rossi@email.com",
        telefono: "+39 333 1234567",
    };

    // logout
    const handleLogout = () => {
        navigate('/login');
    };

    const getStatoLabel = (stato) => {
        switch(stato) {
            case 'in_approvazione':
                return 'In Approvazione';
            case 'completata':
                return 'Completata';
            case 'rifiutata':
                return 'Rifiutata';
            default:
                return stato;
        }
    };

    const renderContent = () => {
        switch(activeSection) {
            case 'contatti':
                return (
                    <div className="contacts-grid">
                        {contatti.map(contatto => (
                            <div key={contatto.id} className="contact-card">
                                <div className="contact-icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="contact-info">
                                    <h3>{contatto.nome} {contatto.cognome}</h3>
                                    <p className="contact-type">{contatto.tipo}</p>
                                    <div className="contact-details">
                                        <p className="contact-detail">
                                            <FontAwesomeIcon icon={faPhone} className="detail-icon" />
                                            {contatto.telefono}
                                        </p>
                                        <p className="contact-detail">
                                            <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
                                            {contatto.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="message-icon">
                                    <FontAwesomeIcon icon={faComment} />
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'rimborsi':
                return (
                    <div className="rimborsi-container">
                        <h2>Rimborsi</h2>
                        <div className="rimborsi-grid">
                            {rimborsi.map(rimborso => (
                                <div key={rimborso.id} className="rimborso-card">
                                    <div className="rimborso-info">
                                        <div className="rimborso-header">
                                            <h3>{rimborso.nome} {rimborso.cognome}</h3>
                                            <span className="rimborso-data">{rimborso.data}</span>
                                        </div>
                                        <div className={`rimborso-stato ${rimborso.stato}`}>
                                            <FontAwesomeIcon icon={faCircle} />
                                            <span>{getStatoLabel(rimborso.stato)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'impostazioni':
                return (
                    <div className="settings-container">
                        <h2>Impostazioni Profilo</h2>
                        
                        {/* Sezione Immagine Profilo */}
                        <div className="settings-section">
                            <h3>Immagine Profilo</h3>
                            <div className="profile-image-upload">
                                <div className="profile-image-container">
                                    <img 
                                        src={professionista.imageUrl || 'placeholder.jpg'} 
                                        alt="Profile" 
                                        className="profile-image-preview"
                                    />
                                    <div className="image-upload-overlay">
                                        <FontAwesomeIcon icon={faCamera} />
                                        <input 
                                            type="file" 
                                            accept="image/*"
                                            onChange={(e) => {/* gestione upload */}}
                                        />
                                    </div>
                                </div>
                                <p className="upload-hint">Clicca per cambiare l'immagine</p>
                            </div>
                        </div>

                        {/* Sezione Informazioni Personali */}
                        <div className="settings-section">
                            <h3>Informazioni Personali</h3>
                            <form className="settings-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Nome</label>
                                        <input 
                                            type="text" 
                                            value={professionista.nome}
                                            onChange={(e) => {/* gestione cambio */}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Cognome</label>
                                        <input 
                                            type="text" 
                                            value={professionista.cognome}
                                            onChange={(e) => {/* gestione cambio */}}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input 
                                            type="email" 
                                            value={professionista.email}
                                            onChange={(e) => {/* gestione cambio */}}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefono</label>
                                        <input 
                                            type="tel" 
                                            value={professionista.telefono}
                                            onChange={(e) => {/* gestione cambio */}}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="save-button">
                                    <FontAwesomeIcon icon={faEdit} /> Salva Modifiche
                                </button>
                            </form>
                        </div>

                        {/* Sezione Cambio Password */}
                        <div className="settings-section">
                            <h3>Cambio Password</h3>
                            <form className="settings-form">
                                <div className="form-group">
                                    <label>Password Attuale</label>
                                    <input 
                                        type="password" 
                                        placeholder="Inserisci la password attuale"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nuova Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="Inserisci la nuova password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Conferma Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="Conferma la nuova password"
                                    />
                                </div>
                                <button type="submit" className="save-button">
                                    <FontAwesomeIcon icon={faKey} /> Cambia Password
                                </button>
                            </form>
                        </div>
                    </div>
                );
            default:
                return <div>Seleziona una sezione</div>;
        }
    };

    return (
        <div className="dashboard-container">
            <Link to="/" className="back-to-home">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Torna alla Home</span>
            </Link>

            <div className="dashboard-content">
                <div className="dashboard-sidebar">
                    <div className="sidebar-profile">
                        <div className="profile-image">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="profile-info">
                            <p className="welcome-text">Ciao,</p>
                            <p className="profile-name">Mario!</p>
                        </div>
                    </div>
                    <div className="sidebar-divider"></div>
                    
                    <div className="menu-items">
                        {menuItems.map(item => (
                            <div 
                                key={item.id}
                                className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => setActiveSection(item.id)}
                            >
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div 
                        className="sidebar-item logout"
                        onClick={handleLogout}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Logout</span>
                    </div>
                </div>
                <div className="dashboard-main">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default ProfessionistiDashboard;