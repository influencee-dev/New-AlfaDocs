import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [activeSector, setActiveSector] = useState('Dentisti');

  const sectors = ['Dentisti', 'Medicina Estetica', 'Fisioterapia', 'Poliambulatori'];

  const plans = [
    {
      name: "Starter",
      description: `Ideale per ${activeSector.toLowerCase()} che iniziano a digitalizzare il proprio studio.`,
      features: [
        "Agenda base",
        "Cartella clinica elettronica",
        "Fatturazione elettronica (fino a 100/mese)",
        "Supporto via email",
      ],
      notIncluded: [
        "Prenotazione online",
        "Campagne marketing",
        "Firma grafometrica",
        "Dashboard avanzate",
      ],
      buttonText: "Inizia gratis",
      highlighted: false,
    },
    {
      name: "Pro",
      description: `La soluzione completa per ${activeSector.toLowerCase()} in crescita.`,
      features: [
        "Tutto ciò che è in Starter",
        "Prenotazione online 24/7",
        "Promemoria SMS e WhatsApp",
        "Fatturazione illimitata",
        "Firma grafometrica",
        "Supporto prioritario",
      ],
      notIncluded: [
        "API per sviluppatori",
        "Manager dedicato",
      ],
      buttonText: "Prova Pro",
      highlighted: true,
      badge: "Più scelto",
    },
    {
      name: "Enterprise",
      description: `Per grandi strutture di ${activeSector.toLowerCase()} con esigenze di personalizzazione.`,
      features: [
        "Tutto ciò che è in Pro",
        "Integrazioni API personalizzate",
        "Migrazione dati assistita",
        "Formazione in sede",
        "Account manager dedicato",
        "SLA garantito",
      ],
      notIncluded: [],
      buttonText: "Contattaci",
      highlighted: false,
    }
  ];

  return (
    <div className="w-full pt-20 pb-32 bg-[var(--bg-body)]">
      <div className="max-w-[1300px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[var(--theme-accent)] font-serif italic text-sm font-bold uppercase tracking-wider">Piani e Soluzioni</span>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--theme-primary)] mt-4 mb-6 tracking-tight">
            Scegli il piano perfetto per te
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto mb-12">
            Nessun costo nascosto. Cancella quando vuoi. Inizia con una prova gratuita di 14 giorni su tutti i piani.
          </p>

          {/* Sectors Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeSector === sector
                    ? 'bg-[var(--theme-primary)] text-white shadow-md'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)]'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border bg-[var(--bg-card)] ${
                plan.highlighted 
                  ? 'border-[var(--theme-primary)] shadow-2xl transform md:-translate-y-4' 
                  : 'border-[var(--border-color)] shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--theme-accent)] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">{plan.name}</h3>
              <p className="text-[var(--text-muted)] text-sm mb-8 h-10">{plan.description}</p>

              <button className={`w-full py-3 rounded-xl font-bold mb-8 transition-all ${
                plan.highlighted
                  ? 'bg-[var(--theme-primary)] text-white hover:bg-[var(--hover-purple)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--theme-primary)] hover:border-[var(--hover-purple)] hover:text-[var(--hover-purple)]'
              }`}>
                {plan.buttonText}
              </button>

              <div className="flex-grow">
                <p className="text-sm font-bold text-[var(--text-main)] mb-4">Cosa è incluso:</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-[var(--theme-primary)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-muted)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <>
                    <p className="text-sm font-bold text-[var(--text-main)] mb-4 mt-6">Non incluso:</p>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 opacity-50">
                          <X size={18} className="text-[var(--text-muted)] shrink-0 mt-0.5" />
                          <span className="text-[var(--text-muted)] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-primary)] mb-4">Domande Frequenti</h2>
          <p className="text-[var(--text-muted)] text-lg">Tutto quello che devi sapere sui nostri piani.</p>
        </div>
        
        <div className="space-y-6">
          {[
            {
              q: "Posso cambiare piano in qualsiasi momento?",
              a: "Sì, puoi effettuare l'upgrade o il downgrade del tuo piano in qualsiasi momento. Le modifiche avranno effetto dal ciclo di fatturazione successivo."
            },
            {
              q: "Cosa succede alla fine della prova gratuita?",
              a: "Al termine dei 14 giorni di prova, potrai decidere se abbonarti a uno dei nostri piani. Nessun addebito automatico verrà effettuato senza il tuo consenso."
            },
            {
              q: "I miei dati sono al sicuro?",
              a: "Assolutamente sì. Utilizziamo crittografia end-to-end e server sicuri conformi al GDPR per garantire la massima protezione dei dati dei tuoi pazienti."
            },
            {
              q: "Offrite supporto per la migrazione dei dati?",
              a: "Sì, il nostro team tecnico ti assisterà gratuitamente nella migrazione dei dati dal tuo vecchio gestionale verso Alfadocs."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] shadow-sm">
              <h4 className="text-lg font-bold text-[var(--text-main)] mb-2">{faq.q}</h4>
              <p className="text-[var(--text-muted)]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--theme-primary)]">Pronto a iniziare?</h2>
          <p className="text-[var(--text-muted)] text-lg mb-10">
            Unisciti a migliaia di professionisti che hanno già scelto Alfadocs per semplificare la loro gestione quotidiana.
          </p>
          <button className="inline-flex items-center justify-center bg-[var(--theme-primary)] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[var(--hover-purple)] transition-colors">
            Inizia la Prova Gratuita
          </button>
        </div>
      </section>
    </div>
  );
}
