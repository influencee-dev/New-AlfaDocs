import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-nav)] border-t border-[var(--border-color)] py-16 mt-20">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold text-[var(--theme-primary)] no-underline tracking-tight flex items-center gap-1.5 mb-4">
            <img src="/logo.png" alt="Alfadocs" className="h-8" />
          </Link>
          <p className="text-[var(--text-muted)] text-sm mb-6">
            Semplifica la gestione del tuo studio medico con il software in cloud più avanzato.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[var(--text-main)] mb-4">Soluzioni</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/soluzioni/gestione:-documentazione-e-strumenti-clinici" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Gestione</Link></li>
            <li><Link to="/soluzioni/relazione:-comunicazione-&-marketing" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Relazione</Link></li>
            <li><Link to="/soluzioni/organizzazione:-agenda-&-prenotazioni" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Organizzazione</Link></li>
            <li><Link to="/soluzioni/analisi:-fatturazione-e-reportistica" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Analisi</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[var(--text-main)] mb-4">Risorse</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/risorse/nuovi-rilasci" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Nuovi Rilasci</Link></li>
            <li><Link to="/risorse/supporto-remoto" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Supporto Remoto</Link></li>
            <li><Link to="/risorse/tutorial" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Tutorial</Link></li>
            <li><Link to="/academy/blog" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[var(--text-main)] mb-4">Azienda</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/chi-siamo" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Chi Siamo</Link></li>
            <li><Link to="/chi-siamo/partner" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Partner</Link></li>
            <li><Link to="/chi-siamo/carriera" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Carriera</Link></li>
            <li><Link to="/chi-siamo/contatti" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Contatti</Link></li>
          </ul>
        </div>

      </div>
      <div className="max-w-[1300px] mx-auto px-6 mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--text-muted)] text-sm">© 2026 Alfadocs. Tutti i diritti riservati.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Cookie Policy</Link>
          <Link to="/condizioni-generali" className="text-[var(--text-muted)] hover:text-[var(--theme-primary)] text-sm transition-colors">Termini e Condizioni</Link>
        </div>
      </div>
    </footer>
  );
}
