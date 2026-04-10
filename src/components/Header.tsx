import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    if (window.innerWidth > 1024) {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerPoint = rect.left + (rect.width / 2);
      e.currentTarget.style.setProperty('--item-center', `${centerPoint}px`);
      setActiveDropdown(id);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(null);
    }
  };

  const handleMobileDropdownClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === id ? null : id);
    }
  };

  return (
    <header className="header sticky top-[20px] left-[21px] z-50 w-[calc(100%-42px)] rounded-[15px]">
      <nav className="navbar">
        <Link to="/" className="navbar-brand"><img src="/logo.png" alt="Alfadocs" className="h-8" /></Link>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          
          {/* 1. SOLUZIONI */}
          <li 
            className="menu-item has-dropdown"
            onMouseEnter={(e) => handleMouseEnter(e, 'soluzioni')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="w-full text-left flex items-center justify-between lg:justify-start py-5 px-6 lg:py-0 lg:px-4 text-[1.1rem] lg:text-[0.95rem] font-medium text-[var(--text-main)] hover:text-[var(--theme-primary)] transition-colors duration-200"
              onClick={(e) => handleMobileDropdownClick(e, 'soluzioni')}
              aria-expanded={activeDropdown === 'soluzioni'}
            >
              Soluzioni <span className="arrow" style={{ transform: activeDropdown === 'soluzioni' ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#9662;</span>
            </button>
            <div className={`mega-menu full-width ${activeDropdown === 'soluzioni' ? 'active' : ''}`}>
              <div className="mega-menu-grid">
                
                <div className="menu-card">
                  <Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici" className="card-main-link" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="card-title-wrap">
                      <h3 className="card-title-main">Gestione</h3>
                      <span className="card-subtitle">Documentazione e strumenti clinici</span>
                    </div>
                    <span className="link-arrow">&rarr;</span>
                  </Link>
                  <ul className="menu-list">
                    <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici/cartella-clinica---gestione-documentale" onClick={() => setIsMobileMenuOpen(false)}>Cartella Clinica & gestione Documentale</Link></li>
                    <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici/firma-automatica-&-grafometrica" onClick={() => setIsMobileMenuOpen(false)}>Firma Automatica & Grafometrica</Link></li>
                    <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici/automazione-pagamenti" onClick={() => setIsMobileMenuOpen(false)}>Automazione Pagamenti</Link></li>
                    <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici/scribe" onClick={() => setIsMobileMenuOpen(false)}>Scribe <span className="ai-badge">AI Powered</span></Link></li>
                    <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici/patient-summary" onClick={() => setIsMobileMenuOpen(false)}>Patient Summary <span className="ai-badge">AI Powered</span></Link></li>
                    <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici/integrazione-sistema-ts-e-sdi" onClick={() => setIsMobileMenuOpen(false)}>Sistema TS e SDI</Link></li>
                    <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici/integrazione-sistema-fse-2.0" onClick={() => setIsMobileMenuOpen(false)}>Sistema FSE 2.0</Link></li>
                  </ul>
                </div>

                <div className="menu-card">
                  <Link to="/soluzioni/relazione:-comunicazione-&-marketing" className="card-main-link" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="card-title-wrap">
                      <h3 className="card-title-main">Relazione</h3>
                      <span className="card-subtitle">Comunicazione & Marketing</span>
                    </div>
                    <span className="link-arrow">&rarr;</span>
                  </Link>
                  <ul className="menu-list">
                    <li><Link to="/soluzioni/relazione:-comunicazione-&-marketing/campagne-marketing" onClick={() => setIsMobileMenuOpen(false)}>Campagne marketing</Link></li>
                    <li><Link to="/soluzioni/relazione:-comunicazione-&-marketing/integrazione-whatsapp" onClick={() => setIsMobileMenuOpen(false)}>Integrazione WhatsApp</Link></li>
                    <li><Link to="/soluzioni/relazione:-comunicazione-&-marketing/marketing&workflow" onClick={() => setIsMobileMenuOpen(false)}>Marketing & Workflow</Link></li>
                  </ul>
                </div>

                <div className="menu-card">
                  <Link to="/soluzioni/organizzazione:-agenda-&-prenotazioni" className="card-main-link" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="card-title-wrap">
                      <h3 className="card-title-main">Organizzazione</h3>
                      <span className="card-subtitle">Agenda & Prenotazioni</span>
                    </div>
                    <span className="link-arrow">&rarr;</span>
                  </Link>
                  <ul className="menu-list">
                    <li><Link to="/soluzioni/organizzazione:-agenda-&-prenotazioni/agenda-avanzata-" onClick={() => setIsMobileMenuOpen(false)}>Agenda avanzata</Link></li>
                    <li><Link to="/soluzioni/organizzazione:-agenda-&-prenotazioni/prenotazione-online" onClick={() => setIsMobileMenuOpen(false)}>Prenotazione Online</Link></li>
                  </ul>
                </div>

                <div className="menu-card">
                  <Link to="/soluzioni/analisi:-fatturazione-e-reportistica" className="card-main-link" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="card-title-wrap">
                      <h3 className="card-title-main">Analisi</h3>
                      <span className="card-subtitle">Fatturazione e Reportistica</span>
                    </div>
                    <span className="link-arrow">&rarr;</span>
                  </Link>
                  <ul className="menu-list">
                    <li><Link to="/soluzioni/analisi:-fatturazione-e-reportistica/fatturazione" onClick={() => setIsMobileMenuOpen(false)}>Fatturazione</Link></li>
                    <li><Link to="/soluzioni/analisi:-fatturazione-e-reportistica/dashboard-&-kpi" onClick={() => setIsMobileMenuOpen(false)}>Dashboard & KPI</Link></li>
                  </ul>
                </div>

              </div>
            </div>
          </li>

          {/* 2. SETTORI */}
          <li 
            className="menu-item has-dropdown dropdown-simple-wrapper"
            onMouseEnter={(e) => handleMouseEnter(e, 'settori')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="w-full text-left flex items-center justify-between lg:justify-start py-5 px-6 lg:py-0 lg:px-4 text-[1.1rem] lg:text-[0.95rem] font-medium text-[var(--text-main)] hover:text-[var(--theme-primary)] transition-colors duration-200"
              onClick={(e) => handleMobileDropdownClick(e, 'settori')}
              aria-expanded={activeDropdown === 'settori'}
            >
              Settori <span className="arrow" style={{ transform: activeDropdown === 'settori' ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#9662;</span>
            </button>
            <div className={`dropdown-simple ${activeDropdown === 'settori' ? 'active' : ''}`}>
              <div className="menu-card">
                <div className="card-static-header">
                  <div className="card-title-wrap">
                    <h3 className="card-title-main">Settori</h3>
                    <span className="card-subtitle">È l'ideale per le seguenti categorie:</span>
                  </div>
                </div>
                <ul className="menu-list">
                  <li><Link to="/branche/dentisti" onClick={() => setIsMobileMenuOpen(false)}>Dentisti</Link></li>
                  <li><Link to="/branche/medicina-estetica" onClick={() => setIsMobileMenuOpen(false)}>Medicina Estetica</Link></li>
                  <li><Link to="/branche/fisioterapia" onClick={() => setIsMobileMenuOpen(false)}>Fisioterapia</Link></li>
                  <li><Link to="/branche/poliambulatori" onClick={() => setIsMobileMenuOpen(false)}>Poliambulatori</Link></li>
                </ul>
              </div>
            </div>
          </li>

          {/* 3. PREZZI */}
          <li className="menu-item">
            <Link to="/prezzi" className="w-full text-left py-5 px-6 lg:py-0 lg:px-4 text-[1.1rem] lg:text-[0.95rem] font-medium text-[var(--text-main)] hover:text-[var(--theme-primary)] transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Prezzi</Link>
          </li>

          {/* 4. RISORSE */}
          <li 
            className="menu-item has-dropdown dropdown-simple-wrapper"
            onMouseEnter={(e) => handleMouseEnter(e, 'risorse')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="w-full text-left flex items-center justify-between lg:justify-start py-5 px-6 lg:py-0 lg:px-4 text-[1.1rem] lg:text-[0.95rem] font-medium text-[var(--text-main)] hover:text-[var(--theme-primary)] transition-colors duration-200"
              onClick={(e) => handleMobileDropdownClick(e, 'risorse')}
              aria-expanded={activeDropdown === 'risorse'}
            >
              Risorse <span className="arrow" style={{ transform: activeDropdown === 'risorse' ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#9662;</span>
            </button>
            <div className={`dropdown-simple ${activeDropdown === 'risorse' ? 'active' : ''}`}>
              <div className="menu-card">
                <div className="card-static-header">
                  <div className="card-title-wrap">
                    <h3 className="card-title-main">Risorse</h3>
                    <span className="card-subtitle">Tutto il materiale informativo</span>
                  </div>
                </div>
                <ul className="menu-list">
                  <li><Link to="/risorse/nuovi-rilasci" onClick={() => setIsMobileMenuOpen(false)}>Nuovi Rilasci</Link></li>
                  <li><Link to="/risorse/supporto-remoto" onClick={() => setIsMobileMenuOpen(false)}>Supporto Remoto</Link></li>
                  <li><Link to="/risorse/app-marketplace" onClick={() => setIsMobileMenuOpen(false)}>App Marketplace</Link></li>
                  <li><Link to="/risorse/tutorial" onClick={() => setIsMobileMenuOpen(false)}>Tutorial</Link></li>
                  <li><Link to="/risorse/per-sviluppatori" onClick={() => setIsMobileMenuOpen(false)}>Per Sviluppatori</Link></li>
                </ul>
              </div>
            </div>
          </li>

          {/* 5. ACADEMY */}
          <li 
            className="menu-item has-dropdown dropdown-simple-wrapper"
            onMouseEnter={(e) => handleMouseEnter(e, 'academy')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full flex items-center justify-between lg:justify-start py-5 px-6 lg:py-0 lg:px-4 text-[1.1rem] lg:text-[0.95rem] font-medium text-[var(--text-main)] hover:text-[var(--theme-primary)] transition-colors duration-200">
              <Link 
                to="/academy" 
                className="flex-1 text-left text-inherit no-underline hover:text-[var(--theme-primary)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Academy
              </Link>
              <button 
                className="p-2 -mr-2 flex items-center justify-center bg-transparent border-none cursor-pointer text-inherit hover:text-[var(--theme-primary)]"
                onClick={(e) => handleMobileDropdownClick(e, 'academy')}
                aria-expanded={activeDropdown === 'academy'}
                aria-label="Apri sottomenu Academy"
              >
                <span className="arrow" style={{ transform: activeDropdown === 'academy' ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#9662;</span>
              </button>
            </div>
            <div className={`dropdown-simple ${activeDropdown === 'academy' ? 'active' : ''}`}>
              <div className="menu-card">
                <Link to="/academy" className="card-main-link" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="card-title-wrap">
                    <h3 className="card-title-main">Academy</h3>
                    <span className="card-subtitle">Impara con Alfadocs</span>
                  </div>
                  <span className="link-arrow">&rarr;</span>
                </Link>
                <ul className="menu-list">
                  <li><Link to="/academy" onClick={() => setIsMobileMenuOpen(false)}>Panoramica Academy</Link></li>
                  <li><Link to="/academy/case-study" onClick={() => setIsMobileMenuOpen(false)}>Case Study</Link></li>
                  <li><Link to="/academy/guide-&-toolkit" onClick={() => setIsMobileMenuOpen(false)}>Guide & Toolkit</Link></li>
                  <li>
                    <Link to="/academy/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                    <ul className="sub-menu-list">
                      <li><Link to="/academy/blog/4-tematiche" onClick={() => setIsMobileMenuOpen(false)}>4 tematiche</Link></li>
                      <li><Link to="/academy/blog/insight-&-trend" onClick={() => setIsMobileMenuOpen(false)}>Insight & Trend</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/academy/webinar-&-eventi" onClick={() => setIsMobileMenuOpen(false)}>Webinar & Eventi</Link></li>
                </ul>
              </div>
            </div>
          </li>

          {/* 6. CHI SIAMO */}
          <li 
            className="menu-item has-dropdown dropdown-simple-wrapper"
            onMouseEnter={(e) => handleMouseEnter(e, 'chisiamo')}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="w-full text-left flex items-center justify-between lg:justify-start py-5 px-6 lg:py-0 lg:px-4 text-[1.1rem] lg:text-[0.95rem] font-medium text-[var(--text-main)] hover:text-[var(--theme-primary)] transition-colors duration-200"
              onClick={(e) => handleMobileDropdownClick(e, 'chisiamo')}
              aria-expanded={activeDropdown === 'chisiamo'}
            >
              Chi siamo <span className="arrow" style={{ transform: activeDropdown === 'chisiamo' ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#9662;</span>
            </button>
            <div className={`dropdown-simple ${activeDropdown === 'chisiamo' ? 'active' : ''}`}>
              <div className="menu-card">
                <div className="card-static-header">
                  <div className="card-title-wrap">
                    <h3 className="card-title-main">Azienda</h3>
                    <span className="card-subtitle">Scopri chi c'è dietro il software</span>
                  </div>
                </div>
                <ul className="menu-list">
                  <li><Link to="/chi-siamo" onClick={() => setIsMobileMenuOpen(false)}>Chi Siamo</Link></li>
                  <li><Link to="/chi-siamo/partner" onClick={() => setIsMobileMenuOpen(false)}>Partner</Link></li>
                  <li><Link to="/chi-siamo/carriera" onClick={() => setIsMobileMenuOpen(false)}>Carriera</Link></li>
                  <li><Link to="/chi-siamo/contatti" onClick={() => setIsMobileMenuOpen(false)}>Contatti</Link></li>
                </ul>
              </div>
            </div>
          </li>

        </ul>

        {/* Controlli a destra */}
        <div className="nav-controls">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Attiva Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="navbar-actions">
            <Link to="/accedi" className="btn-login">Accedi</Link>
            <Link to="/prenotazione/prova-subito" className="btn-primary">Prenota una Demo</Link>
          </div>
          <button 
            className="mobile-toggle" 
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} className="text-[var(--text-main)]" /> : <Menu size={24} className="text-[var(--text-main)]" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
