import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Solution() {
  const { category, id } = useParams();

  // Helper to format the ID into a readable title
  const formatTitle = (str: string) => {
    if (!str) return 'Soluzione';
    // Replace special sequences with spaces
    let cleanStr = str.replace(/:-/g, ': ').replace(/---/g, ' — ').replace(/-/g, ' ').replace(/&/g, ' & ');
    // Capitalize words
    return cleanStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').replace(/\s+/g, ' ').trim();
  };

  // Determine the title based on whether it's a sub-solution or a main category
  const title = formatTitle(id || category || '');
  
  // Only use the sub-solution hero if both category and id are present (e.g., /soluzioni/gestione/cartella-clinica)
  const isSubSolution = !!category && !!id;

  // Check if it's the specific "organizzazione" page
  const isOrganizzazione = category === 'organizzazione:-agenda-&-prenotazioni' && !id;
  const isAgendaAvanzata = id === 'agenda-avanzata-';

  if (isAgendaAvanzata) {
    return (
      <div className="w-full bg-[#FEFEFD] min-h-screen pt-[96px]">
        {/* Custom Hero Section for Agenda Avanzata */}
        <section className="relative max-w-[1280px] mx-auto px-6 py-12 min-h-[558px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span 
              className="font-serif text-[#292E53] tracking-[-0.5%] leading-[145%] block"
              style={{ fontSize: '30px', fontWeight: 400 }}
            >
              Gestione
            </span>
            
            <h1 
              className="font-heading font-bold text-[#6761E5] tracking-[-2%] leading-[110%]"
              style={{ fontSize: '56px' }}
            >
              La segreteria <br /> del tuo studio <br /> è inefficiente?
            </h1>
            
            <p 
              className="font-serif text-[#292E53] tracking-[-0.5%] leading-[145%]"
              style={{ fontSize: '24px', fontWeight: 400 }}
            >
              Risparmia fino a 600 ore di lavoro inutile
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#6761E5] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105 text-lg">
                Prova subito
              </button>
              <button className="bg-transparent border border-[#292E53]/20 text-[#6761E5] px-10 py-4 rounded-xl font-bold hover:bg-[#6761E5]/5 transition-all hover:scale-105 text-lg">
                Guarda la Demo
              </button>
            </div>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute pointer-events-none"
              style={{
                width: '815.42px',
                height: '818.15px',
                top: '-126.05px',
                left: '494.59px',
                opacity: 1
              }}
            >
              <img 
                src="/heroorg.png" 
                alt="Agenda Avanzata Hero" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 max-w-[1280px] mx-auto">
          <p className="font-serif text-[#E040FB] text-lg mb-12">Lorem ipsum dolor sit amet</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: 'phone', val: "30%", desc: "in meno di chiamate", color: "#6761E5" },
              { icon: 'clock', val: "600", desc: "ore di lavoro risparmiate", color: "#6761E5" },
              { icon: 'grid', val: "111", desc: "Lorem ipsum", color: "#6761E5" },
              { icon: 'cards', val: "111", desc: "Lorem ipsum", color: "#E040FB" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  {stat.icon === 'phone' && <img src="https://api.iconify.design/lucide:phone.svg?color=%23292E53" alt="" className="w-10 h-10" />}
                  {stat.icon === 'clock' && <img src="https://api.iconify.design/lucide:alarm-clock-check.svg?color=%23292E53" alt="" className="w-10 h-10" />}
                  {stat.icon === 'grid' && <img src="https://api.iconify.design/lucide:layout-grid.svg?color=%23292E53" alt="" className="w-10 h-10" />}
                  {stat.icon === 'cards' && <img src="https://api.iconify.design/lucide:layers.svg?color=%23E040FB" alt="" className="w-10 h-10" />}
                </div>
                <div className="space-y-1">
                  <h3 className="text-[54px] font-bold leading-none tracking-tight" style={{ color: stat.color }}>{stat.val}</h3>
                  <p className="text-[#292E53] font-serif text-lg leading-tight">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* We've cracked the code Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-24">
              <h2 className="font-heading font-bold text-[56px] text-[#6761E5] leading-tight mb-6">We've cracked the code</h2>
              <p className="font-serif text-[#545875] text-lg">Lorem ipsum dolor sit amet consolateur ipsem amet dolor ipsum.</p>
            </div>

            <div className="space-y-32">
              {/* Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h3 className="font-heading font-bold text-[40px] text-[#292E53] leading-tight">Aumenta le prenotazioni <br /> e fidelizza i clienti</h3>
                  <p className="font-serif text-[#545875] text-lg leading-relaxed">Personalizza e automatizza l'invio di richiami, promemoria, campagne e questionari di soddisfazione.</p>
                  <button className="bg-[#E040FB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105">Call to action</button>
                </div>
                <div className="bg-[#8E92A6] rounded-[32px] aspect-video w-full"></div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="bg-[#8E92A6] rounded-[32px] aspect-video w-full lg:order-1"></div>
                <div className="space-y-8 lg:order-2">
                  <h3 className="font-heading font-bold text-[40px] text-[#292E53] leading-tight">Velocizza le procedure <br /> e riduci i costi e la carta</h3>
                  <p className="font-serif text-[#545875] text-lg leading-relaxed">Digitalizza la gestione documentale e automatizza l'accettazione.</p>
                  <button className="bg-[#E040FB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105">Another butt...</button>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h3 className="font-heading font-bold text-[40px] text-[#292E53] leading-tight">Aumenta i profitti</h3>
                  <p className="font-serif text-[#545875] text-lg leading-relaxed">Accedi a report sempre aggiornati sull'andamento economico dello studio per capire dove e come intervenire.</p>
                  <button className="bg-[#E040FB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105">Call to action</button>
                </div>
                <div className="bg-[#8E92A6] rounded-[32px] aspect-video w-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="pt-24 px-6 bg-[#39357E] rounded-[45px] my-16 mx-6 text-center text-white overflow-hidden relative">
          {/* sfum.png background effect */}
          <img 
            src="/sfum.png" 
            alt="" 
            className="absolute pointer-events-none z-0"
            style={{
              width: '683px',
              height: '682px',
              bottom: '0',
              left: '-268px',
              opacity: 0.8
            }}
            referrerPolicy="no-referrer"
          />
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="font-heading font-bold text-[56px] leading-[110%] tracking-[-2%]">
              Metti il tuo studio sul pilota <br /> automatico.
            </h2>
            <p className="font-serif text-lg text-white/80 max-w-2xl mx-auto">
              Prenota una demo gratuita e scopri come AlfaDocs può rendere governabile la complessità della tua struttura. Configurazione guidata inclusa
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="bg-[#E040FB] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all flex items-center gap-2 text-lg">
                Prenota una Demo <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full">→</span>
              </button>
              <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-lg">
                Parla con un esperto
              </button>
            </div>
            
            <p className="text-sm text-white/60 pt-4">
              Numero verde 800.160690 · Risposta entro 24h
            </p>

            {/* cta.png Image */}
            <div className="pt-16 flex justify-center">
              <img 
                src="/cta.png" 
                alt="CTA Visual" 
                className="w-full h-auto max-w-5xl rounded-t-3xl block align-bottom"
                style={{ marginBottom: '-1px' }} // Ensure no sub-pixel gap
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (isOrganizzazione) {
    return (
      <div className="w-full bg-[#FEFEFD] min-h-screen pt-[20px] pb-24">
        {/* Custom Hero Section for Organizzazione */}
        <section className="relative w-[calc(100%-42px)] mx-auto min-h-[558px] bg-[#39357E] rounded-[45px] overflow-hidden flex items-center">
          {/* sfum2.png background effect */}
          <img 
            src="/sfum2.png" 
            alt="" 
            className="absolute bottom-0 left-0 pointer-events-none z-0"
            style={{ opacity: 1 }}
            referrerPolicy="no-referrer"
          />

          <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 
                className="font-heading font-bold text-white tracking-[-3%] leading-[105%]"
                style={{ fontSize: '58.14px' }}
              >
                Lorem ipsum <br /> dolor sit amet <br /> dolor lorem
              </h1>
              
              <p 
                className="font-serif text-white/80 tracking-[-0.5%] leading-[100%] max-w-md"
                style={{ fontSize: '16.53px', fontWeight: 350 }}
              >
                Quattro aree funzionali integrate: dalla cartella clinica alla reportistica, dalla prenotazione online al marketing automatico.
              </p>

              <div className="flex items-center gap-4 text-white pt-4">
                <div className="flex -space-x-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gray-400 border-2 border-[#39357E]"></div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-transparent border-2 border-white flex items-center justify-center text-white font-bold text-lg">+</div>
                </div>
                <div className="space-y-0.5">
                  <p className="font-heading font-bold text-[#E040FB] text-lg leading-tight">7.000+ professionisti</p>
                  <p className="font-serif text-white/70 text-sm leading-tight">gestiscono il loro studio con AlfaDocs</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute pointer-events-none"
              style={{
                width: '815.42px',
                height: '818.15px',
                top: '-126.05px',
                left: '494.59px',
                opacity: 1
              }}
            >
              <img 
                src="/heroorg.png" 
                alt="Organizzazione Hero" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Trusted By Section */}
        <div className="mt-16 max-w-[1280px] mx-auto px-6 text-center">
          <p className="text-[10px] text-[#E040FB] mb-6 uppercase tracking-widest font-bold">TRUSTED BY:</p>
          <div className="flex justify-center items-center gap-12 opacity-70">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-8 w-24 bg-[#E040FB] rounded-full"></div>
            ))}
          </div>
        </div>

        {/* The rest of the page content can follow here... */}
        <section className="py-24 px-6 max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6761E5] mb-6">Perché scegliere {title}?</h2>
            <p className="text-[#545875] max-w-2xl mx-auto text-lg font-serif">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          {/* ... rest of the generic content ... */}
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      {isSubSolution ? (
        <section className="pt-32 pb-24 px-6 bg-[var(--theme-primary)] text-white text-center">
          <div className="max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--theme-accent)] font-serif italic text-sm font-bold uppercase tracking-wider mb-4 block">
                {formatTitle(category || '')} / {title}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-white/80 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Scopri come la nostra soluzione di {title.toLowerCase()} può rivoluzionare il modo in cui gestisci il tuo studio medico ogni giorno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-white text-[var(--theme-primary)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Richiedi una Demo
                </Link>
                <Link to="/prezzi" className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Vedi Prezzi
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="pt-24 pb-16 px-6 max-w-[1300px] mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--theme-accent)] font-serif italic text-sm font-bold uppercase tracking-wider mb-4 block">
                Soluzioni / {title}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--theme-primary)] mb-6 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[var(--hover-purple)] transition-colors">
                  Richiedi una Demo
                </Link>
                <Link to="/prezzi" className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] px-8 py-4 rounded-lg font-bold hover:bg-[var(--bg-hover)] transition-colors">
                  Vedi Prezzi
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[var(--theme-accent)] rounded-[32px] opacity-20 -z-10 transform translate-y-4 translate-x-4"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[var(--bg-card)] border border-[var(--card-border)] aspect-square lg:aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt={`${title} Preview`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features List */}
      <section className="py-24 px-6 bg-[var(--bg-header-hover)]">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mb-6">Perché scegliere {title}?</h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[var(--bg-card)] p-8 rounded-2xl shadow-sm border border-[var(--card-border)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-hover)] flex items-center justify-center text-[var(--theme-primary)] mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-4">Vantaggio Competitivo {item}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 px-6 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
              alt="Team working" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-[var(--theme-primary)] mb-6">Ottimizza il tuo flusso di lavoro</h2>
            <p className="text-[var(--text-muted)] text-lg mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Nemo enim ipsam voluptatem quia voluptas",
                "Sit aspernatur aut odit aut fugit",
                "Sed quia consequuntur magni dolores eos",
                "Qui ratione voluptatem sequi nesciunt"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <ArrowRight size={18} className="text-[var(--theme-accent)]" />
                  <span className="text-[var(--text-main)] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--theme-primary)]">Pronto a trasformare il tuo studio?</h2>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Unisciti a migliaia di professionisti che hanno già scelto Alfadocs per semplificare la loro gestione quotidiana.
          </p>
          <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[var(--hover-purple)] transition-colors">
            Inizia la Prova Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
