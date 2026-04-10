import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mic, BarChart, ClipboardList, Telescope, 
  Microscope, Headphones, MapPin, Calendar, 
  User, Scale, Bot, Mail, ArrowRight, CheckCircle2,
  PlayCircle, FileText, TrendingUp, ShieldCheck
} from 'lucide-react';

export default function Academy() {
  return (
    <div className="w-full bg-[var(--bg-body)]">
      {/* 1. HERO */}
      <section className="relative min-h-[88vh] bg-[var(--bg-body)] overflow-hidden flex items-center pt-24 pb-16 px-6">
        {/* Background decorative elements */}
        <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] bg-[var(--theme-primary)] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-[100px] left-[30%] w-[400px] h-[400px] bg-[var(--theme-accent)] opacity-[0.05] rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[580px]"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--theme-primary)] mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--theme-accent)] animate-pulse"></div>
              Contenuti aggiornati ogni mese
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--theme-primary)] mb-6 tracking-tight leading-tight">
              AlfaDocs<br/><span className="text-[var(--theme-accent)]">Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-5 leading-relaxed">
              La piattaforma di formazione e innovazione<br/>dedicata agli studi medici che vogliono crescere.
            </p>
            <p className="text-base text-[var(--text-muted)] leading-relaxed mb-8 max-w-[500px]">
              Webinar, case study, guide pratiche e insight strategici per trasformare il tuo studio in una struttura moderna, efficiente e competitiva.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link to="#eventi" className="inline-flex items-center gap-2 bg-[var(--theme-primary)] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[var(--hover-purple)] transition-all hover:-translate-y-0.5">
                <Calendar className="w-4 h-4" />
                Scopri i prossimi eventi
              </Link>
              <Link to="#risorse" className="inline-flex items-center gap-2 bg-transparent text-[var(--theme-primary)] border-2 border-[var(--border-color)] px-6 py-3 rounded-lg font-semibold hover:border-[var(--hover-purple)] hover:text-[var(--hover-purple)] transition-all hover:-translate-y-0.5">
                Esplora le risorse <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--theme-accent)]" /> Accesso gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--theme-accent)]" /> Aggiornato ogni mese
              </span>
            </div>
          </motion.div>

          {/* Hero Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[480px] hidden md:block"
          >
            {/* Main Dashboard Card */}
            <div className="absolute top-0 right-0 w-full max-w-[400px] bg-[var(--bg-card)] rounded-2xl shadow-2xl border border-[var(--border-color)] p-6 z-10">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--border-color)]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--theme-primary)] to-blue-400 flex items-center justify-center text-white text-sm font-bold">S</div>
                <div>
                  <div className="text-sm font-semibold text-[var(--theme-primary)]">Studio Rossi – Dashboard</div>
                  <div className="text-xs text-[var(--text-muted)]">Aggiornato oggi, 09:41</div>
                </div>
                <div className="ml-auto bg-green-50 text-[var(--theme-accent)] dark:bg-green-900/30 dark:text-green-400 text-[11px] font-bold px-2.5 py-1 rounded-md">Attivo</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[var(--bg-hover)] rounded-lg p-2.5 text-center">
                  <div className="text-xl font-bold text-[var(--theme-primary)]">284</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5">Prenotazioni</div>
                </div>
                <div className="bg-[var(--bg-hover)] rounded-lg p-2.5 text-center">
                  <div className="text-xl font-bold text-[var(--theme-accent)]">+40%</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5">vs anno prec.</div>
                </div>
                <div className="bg-[var(--bg-hover)] rounded-lg p-2.5 text-center">
                  <div className="text-xl font-bold text-orange-500">3.2%</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5">No-show rate</div>
                </div>
              </div>
              <div className="h-16 bg-[var(--bg-hover)] rounded-lg flex items-end gap-1 p-2 overflow-hidden">
                {[40, 55, 48, 65, 60, 82, 90, 78, 68, 95, 85, 92].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm transition-opacity ${h > 70 ? 'bg-[var(--theme-primary)] opacity-100' : 'bg-blue-300 opacity-50 dark:bg-blue-800/50'}`} style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>

            {/* Webinar Card */}
            <div className="absolute bottom-[120px] -left-[30px] w-[220px] bg-[var(--bg-card)] rounded-xl shadow-xl border border-[var(--border-color)] p-4 z-20">
              <div className="inline-block bg-blue-50 text-[var(--theme-primary)] dark:bg-blue-900/30 dark:text-blue-400 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2">🔴 Live Webinar</div>
              <div className="text-xs font-semibold text-[var(--theme-primary)] leading-snug mb-2">AI e gestione dello studio: cosa cambia nel 2026</div>
              <div className="flex justify-between items-center mt-3">
                <div className="text-[10px] text-[var(--text-muted)]">📅 18 mar, 18:00</div>
                <button className="bg-[var(--theme-primary)] text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-md">Iscriviti</button>
              </div>
            </div>

            {/* Result Card */}
            <div className="absolute bottom-[30px] -right-[20px] w-[180px] bg-[var(--bg-card)] rounded-xl shadow-xl border border-[var(--border-color)] p-4 text-center z-20">
              <div className="text-4xl font-bold text-[var(--theme-accent)] leading-none">−30%</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-snug">no-show grazie al<br/>promemoria automatico</div>
              <div className="inline-flex items-center gap-1 bg-green-50 text-[var(--theme-accent)] dark:bg-green-900/30 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full mt-2">
                <TrendingUp className="w-3 h-3" /> Case Study
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COSA TROVI NELL'ACADEMY */}
      <section className="py-20 px-6 bg-[var(--bg-body)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-[var(--theme-primary)] mb-3">
              <span className="w-6 h-0.5 bg-[var(--theme-primary)] rounded-full"></span> Contenuti
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">Cosa trovi nell'Academy</h2>
            <p className="text-lg text-[var(--text-muted)] mt-3 max-w-2xl mx-auto">Tutto il necessario per far crescere il tuo studio, in un unico posto.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mic, title: "Webinar & Eventi", desc: "Eventi live e on-demand per aggiornarti su marketing, digitalizzazione, AI e gestione dello studio medico." },
              { icon: BarChart, title: "Case Study", desc: "Storie reali di studi che hanno migliorato risultati, efficienza e fatturato grazie a una gestione più evoluta." },
              { icon: ClipboardList, title: "Guide & Toolkit", desc: "Checklist, modelli, template e report pratici per applicare subito ciò che impari ai processi del tuo studio." },
              { icon: Telescope, title: "Insight & Trend", desc: "Approfondimenti su normative, innovazione e futuro della sanità privata in Italia e in Europa." }
            ].map((item, i) => (
              <div key={i} className="group bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[var(--bg-card)] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--theme-primary)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center text-[var(--theme-primary)] mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{item.desc}</p>
                <Link to="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--theme-primary)] group-hover:gap-2.5 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ECOSISTEMA & NEWSLETTER */}
      <section className="py-20 px-6 bg-[var(--bg-body)] relative overflow-hidden border-t border-[var(--border-color)]">
        <div className="absolute -top-[240px] -right-[240px] w-[700px] h-[700px] bg-blue-500 opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Newsletter Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7">
              <span className="inline-block font-mono text-xs font-medium uppercase tracking-widest text-[var(--theme-accent)] mb-3">📬 Newsletter settimanale</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">Lo studio del domani</h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6 max-w-xl">
                Ogni settimana nella tua inbox: novità normative, trend del settore, strategie di gestione e aggiornamenti di prodotto — tutto quello che serve per tenere il passo con un settore in continua evoluzione.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {['Uscita ogni mercoledì mattina', 'Già letta da 9.400+ professionisti sanitari', 'Disiscrizione con un click, zero spam'].map((text, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--theme-accent)] flex-shrink-0" /> {text}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input type="email" placeholder="La tua email professionale" className="flex-1 bg-[var(--bg-body)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--theme-primary)] transition-all" />
                <button className="btn-primary whitespace-nowrap">Iscriviti gratis →</button>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3">Cliccando confermi di aver letto la nostra <Link to="/privacy" className="text-[var(--text-muted)] underline">Privacy Policy</Link>.</p>
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-xl border border-[var(--border-color)]">
                <div className="bg-[var(--bg-hover)] px-4 py-3 flex items-center gap-2 border-b border-[var(--border-color)]">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-xs font-medium text-[var(--text-muted)] ml-2">Lo studio del domani — #47</span>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-3">In questo numero</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 pb-3 border-b border-[var(--border-color)]">
                      <span className="bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5 whitespace-nowrap">Normativa</span>
                      <span className="text-sm font-medium text-[var(--theme-primary)] leading-snug">FSE 2.0: le scadenze definitive per gli studi privati</span>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-[var(--border-color)]">
                      <span className="bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5 whitespace-nowrap">AI</span>
                      <span className="text-sm font-medium text-[var(--theme-primary)] leading-snug">Come usare la trascrizione AI senza violare il GDPR</span>
                    </div>
                    <div className="flex items-start gap-3 pb-3 border-b border-[var(--border-color)]">
                      <span className="bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5 whitespace-nowrap">Prodotto</span>
                      <span className="text-sm font-medium text-[var(--theme-primary)] leading-snug">Novità v3.8: promemoria WhatsApp attivo per tutti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5 whitespace-nowrap">Dati</span>
                      <span className="text-sm font-medium text-[var(--theme-primary)] leading-snug">+12% prenotazioni online negli studi con AI attiva</span>
                    </div>
                  </div>
                  <div className="flex gap-2 text-[11px] text-[var(--text-muted)] mt-4 pt-4 border-t border-[var(--border-color)]">
                    <span>📩 Mercoledì 12 feb 2026</span>
                    <span>· 4 min di lettura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-[var(--border-color)]">
            {[
              { icon: Microscope, title: "Osservatorio AlfaDocs", desc: "Dati originali sulla digitalizzazione della sanità privata italiana. Report annuali e survey periodiche." },
              { icon: Headphones, title: "Podcast AlfaDocs", desc: "Conversazioni con medici, manager e innovatori che stanno ridisegnando la sanità privata italiana." },
              { icon: MapPin, title: "Eventi territoriali", desc: "Workshop in presenza nelle principali città italiane per fare rete e apprendere dal vivo." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-xl p-5 hover:bg-[var(--bg-card)] hover:shadow-md hover:border-[var(--border-color)] transition-all">
                <item.icon className="w-6 h-6 text-[var(--theme-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--theme-primary)] mb-1.5">{item.title}</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-2.5">{item.desc}</p>
                  <Link to="#" className="text-xs font-semibold text-[var(--theme-accent)] hover:text-[var(--theme-primary)] transition-colors">Scopri di più →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROSSIMI EVENTI */}
      <section id="eventi" className="py-20 px-6 bg-[var(--bg-body)] relative overflow-hidden border-t border-[var(--border-color)]">
        <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-blue-500 opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-[var(--theme-accent)] mb-3">
                <span className="w-6 h-0.5 bg-[var(--theme-accent)] rounded-full"></span> Calendario
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">I prossimi eventi in calendario</h2>
            </div>
            <Link to="#" className="text-sm font-semibold text-[var(--theme-primary)] hover:text-[var(--hover-purple)] flex items-center gap-1.5 transition-colors">
              Vedi tutti gli eventi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "Webinar", tagClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", title: "AI e gestione dello studio: cosa cambia nel 2026", date: "18 marzo 2026", speaker: "Dr. M. Bianchi", desc: "Come l'intelligenza artificiale sta ridefinendo i flussi di lavoro negli studi medici. Strumenti concreti, casi reali e scenari futuri per prepararsi al cambiamento." },
              { type: "Workshop", tagClass: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", title: "Marketing per studi medici: costruire reputazione online", date: "3 aprile 2026", speaker: "Laura Ferri", desc: "Strategie pratiche per aumentare la visibilità online, gestire le recensioni e costruire una presenza digitale efficace per attrarre nuovi pazienti." },
              { type: "Live Q&A", tagClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", title: "NIS2 e GDPR sanitario: guida pratica alla compliance", date: "24 aprile 2026", speaker: "Avv. G. Russo", desc: "Tutto ciò che devi sapere sulle nuove normative di cybersicurezza in ambito sanitario. Domande in diretta con un esperto legale specializzato in healthcare." }
            ].map((event, i) => (
              <div key={i} className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-2xl p-7 hover:bg-[var(--bg-card)] hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-4 self-start ${event.tagClass}`}>{event.type}</span>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 leading-snug">{event.title}</h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]"><Calendar className="w-3.5 h-3.5" /> {event.date}</span>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]"><User className="w-3.5 h-3.5" /> {event.speaker}</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 flex-1">{event.desc}</p>
                <button className="w-full bg-transparent text-[var(--theme-primary)] border border-[var(--border-color)] rounded-lg py-2.5 text-sm font-semibold hover:border-[var(--hover-purple)] hover:text-[var(--hover-purple)] transition-all">
                  Iscriviti gratuitamente →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY */}
      <section className="py-20 px-6 bg-[var(--bg-body)] border-t border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-[var(--theme-primary)] mb-3">
                <span className="w-6 h-0.5 bg-[var(--theme-primary)] rounded-full"></span> Risultati reali
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">Studi che hanno trasformato<br/>il loro modo di lavorare</h2>
            </div>
            <Link to="#" className="text-sm font-semibold text-[var(--theme-primary)] hover:text-[var(--hover-purple)] flex items-center gap-1.5 transition-colors">
              Vedi tutti i case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Case 1 */}
            <div className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] hover:-translate-y-1 hover:shadow-xl transition-all">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[var(--theme-primary)] dark:bg-blue-900/30 dark:text-blue-400 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4">
                🦷 Odontoiatria
              </span>
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Studio Dentistico Palmieri</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed"><strong>Sfida:</strong> Gestione cartacea, alto tasso di no-show e difficoltà nel monitorare le agende dei tre dentisti dello studio.</p>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-5 mb-5 flex items-center gap-4">
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-[var(--theme-accent)] leading-none">+40%</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">prenotazioni online</div>
                </div>
                <div className="w-px h-10 bg-[var(--border-color)]"></div>
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-[var(--theme-primary)] leading-none">−30%</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">tasso di no-show</div>
                </div>
              </div>
              <Link to="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--theme-primary)] hover:gap-2.5 transition-all">
                Leggi il caso <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Case 2 */}
            <div className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] hover:-translate-y-1 hover:shadow-xl transition-all">
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[var(--theme-primary)] dark:bg-blue-900/30 dark:text-blue-400 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4">
                🧠 Neurologia
              </span>
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Centro Neuromed Milano</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed"><strong>Sfida:</strong> Collo di bottiglia in segreteria con 3 linee telefoniche sempre occupate e tempi di attesa percepiti come troppo lunghi.</p>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-5 mb-5 flex items-center gap-4">
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-[var(--theme-accent)] leading-none">+65%</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">prenotazioni self-service</div>
                </div>
                <div className="w-px h-10 bg-[var(--border-color)]"></div>
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold text-[var(--theme-primary)] leading-none">−2h</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">lavoro segreteria/giorno</div>
                </div>
              </div>
              <Link to="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--theme-primary)] hover:gap-2.5 transition-all">
                Leggi il caso <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Case 3 (Side Highlight) */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[var(--theme-primary)] to-blue-800 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 bg-[var(--bg-card)]/15 text-white/90 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-4">
                  👁️ Oculistica
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Clinica Vista Bologna</h3>
                <p className="text-sm text-white/70 mb-6 leading-relaxed">Digitalizzazione completa di una struttura multi-sede con 5 medici e 2 segreterie.</p>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[var(--theme-accent)] leading-none">€ 48k</div>
                  <div className="text-xs text-white/60 mt-1.5">risparmio operativo annuo stimato</div>
                </div>
              </div>
              <Link to="#" className="w-full bg-[var(--bg-card)] text-[var(--theme-primary)] text-center py-2.5 rounded-lg text-sm font-bold hover:bg-[var(--bg-hover)] transition-colors shadow-md">
                Leggi il caso →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOG E NORMATIVE */}
      <section className="py-20 px-6 bg-[var(--bg-body)] border-t border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-[var(--theme-primary)] mb-3">
                <span className="w-6 h-0.5 bg-[var(--theme-primary)] rounded-full"></span> Blog & Normative
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">Aggiornamenti per stare<br/>al passo con le novità</h2>
              <p className="text-[var(--text-muted)] max-w-xl">Articoli educativi su obblighi normativi, cambiamenti regolatori e best practice per studi medici e strutture sanitarie private.</p>
            </div>
            <Link to="/academy/blog" className="text-sm font-semibold text-[var(--theme-primary)] hover:text-[var(--hover-purple)] flex items-center gap-1.5 transition-colors">
              Vai al blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured Article */}
            <div className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-color)] hover:shadow-xl transition-all flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1.5"><Scale className="w-3 h-3" /> Normativa</span>
                <span className="text-xs text-[var(--text-muted)] ml-auto">7 min di lettura</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] leading-snug mb-3">FSE 2.0 obbligatorio per tutti: cosa devono fare gli studi entro il 2026</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 flex-1">Il Fascicolo Sanitario Elettronico 2.0 diventa progressivamente obbligatorio per tutte le strutture sanitarie private. Scadenze, adempimenti tecnici e cosa rischi se non sei ancora in regola.</p>
              <div className="flex items-center gap-3 pt-5 border-t border-[var(--border-color)] mt-auto">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--theme-primary)] to-blue-400 flex items-center justify-center text-white text-xs font-bold shrink-0">R</div>
                <div>
                  <div className="text-sm font-semibold text-[var(--theme-primary)]">Redazione AlfaDocs</div>
                  <div className="text-xs text-[var(--text-muted)]">3 febbraio 2026</div>
                </div>
              </div>
              <Link to="#" className="mt-5 inline-flex items-center justify-center gap-2 bg-transparent text-[var(--theme-primary)] border-2 border-[var(--border-color)] px-4 py-2 rounded-lg text-sm font-semibold hover:border-[var(--hover-purple)] hover:text-[var(--hover-purple)] transition-all self-start">
                Leggi l'articolo →
              </Link>
            </div>

            {/* Secondary Articles */}
            <div className="flex flex-col gap-4">
              {[
                { tag: "Normativa", tagIcon: Scale, tagClass: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", time: "5 min", title: "NIS2 in sanità: gli obblighi di cybersicurezza per gli studi medici privati", desc: "La direttiva europea NIS2 si applica anche alle strutture sanitarie. Ecco cosa cambia, chi è coinvolto e come prepararsi.", date: "20 gennaio 2026" },
                { tag: "AI & Digitale", tagIcon: Bot, tagClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", time: "6 min", title: "IA in medicina: il quadro normativo europeo e cosa significa per il tuo studio", desc: "L'AI Act europeo introduce nuove regole per i sistemi di intelligenza artificiale usati in ambito sanitario. Una guida pratica.", date: "8 gennaio 2026" },
                { tag: "Gestione", tagIcon: ClipboardList, tagClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", time: "4 min", title: "Consenso informato digitale: validità legale e come implementarlo correttamente", desc: "Il consenso firmato digitalmente ha piena validità giuridica, ma solo se rispetta precisi requisiti tecnici e procedurali.", date: "15 dicembre 2025" }
              ].map((post, i) => (
                <div key={i} className="bg-[var(--bg-card)] rounded-xl p-5 border border-[var(--border-color)] hover:shadow-md hover:border-blue-300 transition-all flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1 ${post.tagClass}`}><post.tagIcon className="w-3 h-3" /> {post.tag}</span>
                    <span className="text-xs text-[var(--text-muted)] ml-auto">{post.time}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--theme-primary)] leading-snug mb-1.5">{post.title}</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed flex-1 mb-3">{post.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
                    <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
                    <Link to="#" className="text-xs font-semibold text-[var(--theme-primary)] hover:text-[var(--hover-purple)] transition-colors">Leggi →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. NUOVI RILASCI */}
      <section className="py-20 px-6 bg-[var(--bg-body)] relative overflow-hidden border-t border-[var(--border-color)]">
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-blue-500 opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-[var(--theme-accent)] mb-3">
                <span className="w-6 h-0.5 bg-[var(--theme-accent)] rounded-full"></span> Changelog
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">Le ultime novità del prodotto</h2>
              <p className="text-[var(--text-muted)] max-w-md">Cosa abbiamo rilasciato di recente e cosa puoi già usare nel tuo studio.</p>
            </div>
            <Link to="#" className="text-sm font-semibold text-[var(--theme-primary)] hover:text-[var(--hover-purple)] flex items-center gap-1.5 transition-colors">
              Vedi tutte le release <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured Release */}
            <div className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-2xl p-8 hover:bg-[var(--bg-card)] hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">Nuovo</span>
                <span className="font-mono text-sm font-medium text-[var(--text-muted)]">v3.8.0</span>
                <span className="text-xs text-[var(--text-muted)] ml-auto">12 febbraio 2026</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] leading-snug mb-3">Trascrizione AI delle visite: note cliniche generate in automatico</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">Il nuovo assistente vocale integrato ascolta la visita e genera automaticamente la bozza della nota clinica, riducendo il tempo dedicato alla documentazione fino all'80%. Supporta italiano medico, è modificabile e si salva direttamente in cartella.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[var(--bg-card)] text-[var(--text-muted)] dark:bg-[var(--bg-hover)] text-xs font-medium px-3 py-1 rounded-full border border-[var(--border-color)]">🤖 AI</span>
                <span className="bg-[var(--bg-card)] text-[var(--text-muted)] dark:bg-[var(--bg-hover)] text-xs font-medium px-3 py-1 rounded-full border border-[var(--border-color)]">📝 Documentazione</span>
                <span className="bg-[var(--bg-card)] text-[var(--text-muted)] dark:bg-[var(--bg-hover)] text-xs font-medium px-3 py-1 rounded-full border border-[var(--border-color)]">⏱️ Risparmio di tempo</span>
              </div>
              <Link to="#" className="inline-flex items-center justify-center gap-2 bg-[var(--theme-primary)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--hover-purple)] transition-all">
                Scopri la funzione →
              </Link>
            </div>

            {/* Minor Releases */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-2 flex flex-col">
              {[
                { badge: "Miglioramento", badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", version: "v3.7.2", date: "28 gen 2026", title: "Promemoria appuntamento via WhatsApp", desc: "Invio automatico del promemoria direttamente su WhatsApp del paziente, con link di conferma o disdetta in un click." },
                { badge: "Miglioramento", badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", version: "v3.7.0", date: "10 gen 2026", title: "Dashboard KPI per titolari multi-sede", desc: "Nuova vista aggregata con metriche comparative tra sedi: prenotazioni, no-show, fatturato e utilizzo dell'agenda." },
                { badge: "Fix & Ottimizzazioni", badgeClass: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", version: "v3.6.5", date: "18 dic 2025", title: "Miglioramenti all'integrazione con FSE 2.0", desc: "Sincronizzazione più rapida e gestione degli errori migliorata nel flusso di invio documenti al Fascicolo Sanitario." }
              ].map((rel, i) => (
                <React.Fragment key={i}>
                  <div className="p-5 hover:bg-[var(--bg-hover)] rounded-xl transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${rel.badgeClass}`}>{rel.badge}</span>
                      <span className="font-mono text-xs font-medium text-[var(--text-muted)]">{rel.version}</span>
                      <span className="text-xs text-[var(--text-muted)] ml-auto">{rel.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[var(--theme-primary)] leading-snug mb-1.5">{rel.title}</h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-2.5">{rel.desc}</p>
                    <Link to="#" className="text-xs font-semibold text-[var(--theme-primary)] hover:text-[var(--hover-purple)] transition-colors">Leggi di più →</Link>
                  </div>
                  {i < 2 && <div className="h-px bg-[var(--border-color)] mx-5"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. HUB CONTENUTI (FILTRO) */}
      <section className="py-20 px-6 bg-[var(--bg-body)] border-t border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-[var(--theme-primary)] mb-3">
              <span className="w-6 h-0.5 bg-[var(--theme-primary)] rounded-full"></span> Hub Contenuti
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--theme-primary)] mt-2 mb-4">Trova i contenuti giusti per il tuo studio</h2>
            <p className="text-[var(--text-muted)]">Filtra per specializzazione, obiettivo e tipo di contenuto per trovare esattamente ciò che ti serve.</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <select className="appearance-none bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--theme-primary)] cursor-pointer focus:outline-none focus:border-[var(--theme-primary)] min-w-[180px] pr-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B7280\' stroke-width=\'1.8\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
              <option>Specializzazione ▾</option>
              <option>Medicina generale</option>
              <option>Odontoiatria</option>
              <option>Cardiologia</option>
            </select>
            <select className="appearance-none bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--theme-primary)] cursor-pointer focus:outline-none focus:border-[var(--theme-primary)] min-w-[180px] pr-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B7280\' stroke-width=\'1.8\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
              <option>Obiettivo ▾</option>
              <option>Aumentare prenotazioni</option>
              <option>Ridurre no-show</option>
              <option>Gestire la segreteria</option>
            </select>
            <select className="appearance-none bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--theme-primary)] cursor-pointer focus:outline-none focus:border-[var(--theme-primary)] min-w-[180px] pr-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B7280\' stroke-width=\'1.8\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
              <option>Tema ▾</option>
              <option>Intelligenza artificiale</option>
              <option>Marketing digitale</option>
              <option>Normative</option>
            </select>
            <select className="appearance-none bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--theme-primary)] cursor-pointer focus:outline-none focus:border-[var(--theme-primary)] min-w-[180px] pr-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B7280\' stroke-width=\'1.8\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
              <option>Tipo contenuto ▾</option>
              <option>Webinar</option>
              <option>Case study</option>
              <option>Guida pratica</option>
            </select>
            <button className="bg-[var(--theme-primary)] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--hover-purple)] transition-colors flex items-center gap-2">
              Cerca
            </button>
          </div>

          <p className="text-sm text-[var(--text-muted)] mb-6">Mostrando <strong className="text-[var(--theme-primary)]">12 risultati</strong> · Tutti i contenuti</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: "🎙️ Webinar", typeClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", title: "AI e gestione dello studio nel 2026", meta: "18 marzo · 60 min" },
              { type: "📋 Guida", typeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", title: "Checklist: onboarding digitale del paziente", meta: "Aggiornata feb 2026" },
              { type: "📊 Case Study", typeClass: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", title: "Studio Palmieri: −30% no-show in 3 mesi", meta: "Odontoiatria · Bologna" },
              { type: "🔭 Insight", typeClass: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", title: "Telemedicina 2026: trend e opportunità per gli studi", meta: "8 min di lettura" },
              { type: "📋 Template", typeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", title: "Piano marketing annuale per studi medici", meta: "Google Docs · Editabile" },
              { type: "🎙️ On-demand", typeClass: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", title: "GDPR e gestione dati pazienti: guida 2025", meta: "45 min · Compliance" },
              { type: "📊 Case Study", typeClass: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", title: "Centro Neuromed: +65% prenotazioni digitali", meta: "Neurologia · Milano" },
              { type: "🔭 Report", typeClass: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", title: "Osservatorio Digitalizzazione Sanità Privata 2026", meta: "PDF · 48 pagine" },
            ].map((res, i) => (
              <div key={i} className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-xl p-5 hover:bg-[var(--bg-card)] hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-3 ${res.typeClass}`}>{res.type}</span>
                <h4 className="text-sm font-semibold text-[var(--theme-primary)] leading-snug mb-2">{res.title}</h4>
                <div className="text-xs text-[var(--text-muted)]">{res.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINALE */}
      <section className="py-24 px-6 text-center bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--theme-primary)]">
            Pronto a trasformare il tuo studio?
          </h2>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Metti in pratica ciò che hai imparato. Prova AlfaDocs gratuitamente e scopri come un gestionale moderno può fare la differenza.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/prenotazione/prova-subito" className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[var(--hover-purple)] transition-colors">
              Inizia la prova gratuita
            </Link>
            <Link to="/soluzioni" className="inline-flex items-center justify-center bg-transparent text-[var(--theme-primary)] border-2 border-[var(--border-color)] px-10 py-4 rounded-lg font-bold text-lg hover:border-[var(--hover-purple)] hover:text-[var(--hover-purple)] transition-colors">
              Scopri il prodotto
            </Link>
          </div>
          <div className="flex justify-center gap-6 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Nessuna carta richiesta</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Setup in 2 minuti</span>
          </div>
        </div>
      </section>
    </div>
  );
}
