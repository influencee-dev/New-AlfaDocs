import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, BarChart2, MessageSquare, ClipboardList, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-[-76px] pt-[76px] w-full min-h-[900px] bg-[#F0EFFC] rounded-b-[45px] flex flex-col items-center px-6 overflow-hidden">
  
  {/* 1. BLOCCO TESTO (Limitato per leggibilità) */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center z-10 pt-20"
  >
    <h1 className="font-heading font-bold text-[50px] leading-[104%] tracking-[-3%] text-[#6761E5] mb-5">
      Rendi governabile <br /> la complessità del tuo studio.
    </h1>

    <p className="font-serif font-regular text-[18px] leading-[140%] tracking-[-0.5%] text-[#545875] max-w-2xl mx-auto mb-8">
      AlfaDocs centralizza Gestione, Relazione, Organizzazione e Analisi in un'unica piattaforma cloud. Zero installazioni, zero complessità.
    </p>

    <div className="flex justify-center gap-4 mb-8">
      <button className="bg-[#6761E5] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105 shadow-lg shadow-[#6761E5]/20">
        Call to action
      </button>
      <button className="bg-white border border-[#6761E5] text-[#6761E5] px-8 py-4 rounded-2xl font-bold hover:bg-[#f0effc] transition-all hover:scale-105 shadow-sm">
        Secondary
      </button>
    </div>
  </motion.div>

  {/* 2. BLOCCO IMMAGINE (Portato fuori dal div di testo e allargato) */}
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
    className="w-full max-w-[1400px] mx-auto z-10" // <-- Aumentato a 1400px
  >
    <img 
      src="/heronew.png" 
      alt="Alfadocs Dashboard" 
      className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]" // Ombra più morbida e profonda
      referrerPolicy="no-referrer"
    />
  </motion.div>

</section>
      {/* Pensato per il tuo settore */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <h2 className="font-heading font-regular text-[54px] leading-[105%] tracking-[-3%] text-[#6761E5] mb-6">
          Pensato per il tuo settore
        </h2>
        <p className="font-serif font-regular text-[16px] leading-[100%] tracking-[-0.5%] text-[#545875] mb-16">
          AlfaDocs si adatta alla complessità di ogni tipologia di struttura sanitaria.<br />
          Scegli il tuo ambito.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Dentisti", desc: "Odontogramma, piani di cura, gestione poltrone e Sistema TS integrato.", img: "/dentisti.png" },
            { title: "Poliambulatori", desc: "Multi-specialità, multi-operatore e multi-sede in un unico pannello di controllo.", img: "/poli.png" },
            { title: "Medicina Estetica", desc: "Gestione trattamenti, prima e dopo, consensi specifici e fidelizzazione paziente", img: "/esteti.png" },
            { title: "Fisioterapia", desc: "Piani terapeutici, serie di sedute, schede di esercizi e follow-up automatizzati.", img: "/fisio.png" }
          ].map((s, i) => (
            <div key={i} className="group">
              <div className="h-[400px] rounded-[32px] overflow-hidden mb-6">
                <motion.img 
                  src={s.img} 
                  alt={s.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#292E53] mb-2">{s.title}</h3>
              <p className="text-[#545875] font-serif">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Un sistema unico Section */}
      <section className="relative bg-[#39357E] rounded-[45px] my-16 mx-6 overflow-hidden min-h-[600px]">
        {/* sfum.png background effect */}
        <img 
          src="/sfum.png" 
          alt="" 
          className="absolute pointer-events-none z-0"
          style={{
            width: '683px',
            height: '682px',
            top: '214px',
            left: '-268px',
            opacity: 1
          }}
          referrerPolicy="no-referrer"
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="py-24 px-6 lg:w-1/2 space-y-8">
            <h2 className="font-heading font-bold text-[54px] leading-[105%] tracking-[-3%] text-white">
              Un sistema unico <br /> per governare <br /> la complessità
            </h2>
            <p className="font-serif text-lg text-white/80 max-w-md">
              Quattro aree funzionali integrate: dalla cartella clinica alla reportistica, dalla prenotazione online al marketing automatico.
            </p>
            
            {/* 4 Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { name: 'Organizzazione', path: '/soluzioni/organizzazione:-agenda-&-prenotazioni' },
                { name: 'Gestione', path: '/soluzioni/gestione:-documentazione-e-strumenti-clinici' },
                { name: 'Relazione', path: '/soluzioni/relazione:-comunicazione-&-marketing' },
                { name: 'Analisi', path: '/soluzioni/analisi:-fatturazione-e-reportistica' }
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link to={pillar.path} className="text-white/90 hover:text-[#b380f8] font-bold flex items-center gap-2 group transition-colors text-lg">
                    <span className="w-2 h-2 bg-[#E040FB] rounded-full"></span>
                    {pillar.name}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Image aligned to the right edge of the section */}
        <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:flex items-center justify-end z-0">
          <motion.img 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/soluzionihome.png" 
            alt="Soluzioni" 
            className="h-full w-auto object-contain object-right"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <p className="font-heading font-regular text-[15px] leading-[140%] tracking-[-0.5%] uppercase text-[#E040FB] mb-12">
          LOREM IPSUM DOLOR SIT AMET
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { val: "7K+", desc: "professionisti registrati" },
            { val: "3,5M", desc: "pazienti gestiti in Italia" },
            { val: "-77%", desc: "appuntamenti saltati" },
            { val: "600h", desc: "risparmiate in segreteria /anno" },
            { val: "€19K", desc: "risparmio annuo stimato" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-5xl font-bold text-[#6761E5]">{stat.val}</h3>
              <p className="text-[#292E53] font-serif">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Rows Section */}
      <section className="py-24 px-6 bg-[#F0EFFC] rounded-[45px] space-y-32">
        {/* Row 1: Agenda */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-white rounded-lg border border-[#E040FB]/20 text-[#E040FB] text-xs font-bold uppercase">-77% appuntamenti saltati</div>
              <div className="px-3 py-1 bg-white rounded-lg border border-[#E040FB]/20 text-[#E040FB] text-xs font-bold uppercase">-30% chiamate in entrata</div>
              <div className="px-3 py-1 bg-white rounded-lg border border-[#E040FB]/20 text-[#E040FB] text-xs font-bold uppercase">+95% appuntamenti</div>
            </div>
            <h2 className="font-heading font-bold text-[40px] leading-[120%] tracking-[-2%] text-[#292E53]">L'agenda che si gestisce da sola.</h2>
            <p className="font-serif text-[16px] leading-[140%] tracking-[-0.5%] text-[#545875]">I pazienti prenotano online in autonomia, 24/7. Il sistema conferma, ricorda e rimanda automaticamente via SMS, email o WhatsApp. Zero telefonate perse.</p>
            <ul className="space-y-2 font-heading font-bold text-[16px] leading-[140%] tracking-[-0.5%] text-[#292E53]">
              {['Prenotazione diretta da Google, sito web o link', 'Lista d\'attesa e gestione cancellazioni automatica', 'Agenda per operatore e per poltrona', 'Reminder personalizzabili su ogni canale'].map(item => <li key={item} className="flex items-center gap-2">✓ {item}</li>)}
            </ul>
            <button className="bg-[#6761E5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105">Call to action</button>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img 
              src="/agenda.png" 
              alt="Agenda" 
              className="w-full h-auto max-w-lg" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Row 2: Documenti */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:order-1"
          >
            <img 
              src="/documenti.png" 
              alt="Documenti" 
              className="w-full h-auto max-w-lg" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-6 lg:order-2">
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-white rounded-lg border border-[#E040FB]/20 text-[#E040FB] text-xs font-bold uppercase">100% validità legale</div>
              <div className="px-3 py-1 bg-white rounded-lg border border-[#E040FB]/20 text-[#E040FB] text-xs font-bold uppercase">0 installazioni richieste</div>
            </div>
            <h2 className="font-heading font-bold text-[40px] leading-[120%] tracking-[-2%] text-[#292E53]">Documenti, firme e cartelle senza carta.</h2>
            <p className="font-serif text-[16px] leading-[140%] tracking-[-0.5%] text-[#545875]">La Firma On-Click Automatica (FOCA) permette ai pazienti di firmare consensi, piani di cura e anamnesi in studio o da remoto. Tutto archiviato automaticamente, conforme GDPR.</p>
            <ul className="space-y-2 font-heading font-bold text-[16px] leading-[140%] tracking-[-0.5%] text-[#292E53]">
              {['Firma digitale e grafometrica integrata', 'Scribe AI: appunti clinici trascritti automaticamente', 'Patient Summary AI: anamnesi riassunta in un click', 'Radiografie e immagini collegate alla cartella', 'Integrazione FSE 2.0 e Sistema TS'].map(item => <li key={item} className="flex items-center gap-2">✓ {item}</li>)}
            </ul>
            <button className="bg-[#6761E5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105">Call to action</button>
          </div>
        </div>

        {/* Row 3: Decisioni */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="px-3 py-1 bg-white rounded-lg border border-[#E040FB]/20 text-[#E040FB] text-xs font-bold uppercase">€19K risparmio medio annuo</div>
              <div className="px-3 py-1 bg-white rounded-lg border border-[#E040FB]/20 text-[#E040FB] text-xs font-bold uppercase">5min invio Sistema TS</div>
            </div>
            <h2 className="font-heading font-bold text-[40px] leading-[120%] tracking-[-2%] text-[#292E53]">Decisioni basate sui dati.</h2>
            <p className="font-serif text-[16px] leading-[140%] tracking-[-0.5%] text-[#545875]">Dashboard aggiornate in tempo reale sull'andamento economico del tuo studio. Previsioni, KPI e report con un click. Smetti di gestire "a sensazione".</p>
            <ul className="space-y-2 font-heading font-bold text-[16px] leading-[140%] tracking-[-0.5%] text-[#292E53]">
              {['Report fatturazione e incassi in tempo reale', 'KPI per operatore, poltrona e prestazione', 'Previsioni economiche a medio-lungo termine', 'Business Intelligence multi-studio'].map(item => <li key={item} className="flex items-center gap-2">✓ {item}</li>)}
            </ul>
            <button className="bg-[#6761E5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all hover:scale-105">Call to action</button>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <img 
              src="/decisioni.png" 
              alt="Decisioni" 
              className="w-full h-auto max-w-lg" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto text-left">
        <h2 className="font-heading font-regular text-[54px] leading-[90%] tracking-[-3%] text-[#6761E5] mb-6">
          Testimonials
        </h2>
        <p className="font-serif font-regular text-[16px] leading-[145%] tracking-[-0.5%] text-[#545875] mb-24">
          Here's what people are saying
        </p>
        <blockquote className="font-serif font-light text-[48px] leading-[130%] tracking-[-2%] text-[#292E53] max-w-4xl mb-16">
          “A large, heavily bolded quote for emphasis and breaking up content.”
        </blockquote>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ x: ["0%", "-66.6%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-none w-[400px] h-[300px] bg-gray-200 rounded-3xl flex items-center justify-center overflow-hidden">
                <img src={`/test${i}.png`} alt={`Testimonial ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-[#39357E] rounded-[45px] my-16 mx-6 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading font-bold text-5xl leading-[110%] tracking-[-2%]">
            Metti il tuo studio sul pilota automatico.
          </h2>
          <p className="font-serif text-lg text-white/80">
            Prenota una demo gratuita e scopri come AlfaDocs può rendere governabile la complessità della tua struttura. Configurazione guidata inclusa
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-[#E040FB] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b380f8] transition-all flex items-center gap-2">
              Prenota una Demo →
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              Parla con un esperto
            </button>
          </div>
          <p className="text-sm text-white/60 pt-4">
            Numero verde 800.160690 · Risposta entro 24h
          </p>
        </div>
      </section>
    </div>
  );
}
