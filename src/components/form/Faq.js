import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "👟 C’è un dress code?",
      answer:
        "Nessuno! Vestitevi come volete, sneakers comprese (noi le mettiamo!). Il terreno è un po’ impervio in alcuni punti, quindi niente tacchi killer o pantaloni da cerimonia troppo stretti. L’importante è che vi sentiate a vostro agio, pronti a ballare, camminare e magari anche fare una corsetta sotto il cielo stellato.",
    },
    {
      question: "🥑 Allergie, intolleranze, esigenze alimentari?",
      answer:
        "Scrivetecelo nel form! Il menù sarà 100% vegetariano e vegano, ma se avete bisogno di attenzioni particolari, nessun problema: ci teniamo a farvi mangiare bene e felici.",
    },
    {
      question: "🚗 Dove parcheggio la macchina (e la paranoia)?",
      answer:
        "Parcheggiare sarà semplice: Ai piedi del castello ci sono diversi posti auto, e un piazzale poco distante che useremo come backup. Una passeggiatina breve e sarete dentro le mura. Niente ansie, vi guideremo con indicazioni precise qualche giorno prima dell’evento.",
    },
    {
      question: "🧥 Freddo, caldo o tutte e due?",
      answer:
        "Benvenuti in montagna! Il meteo può cambiare in un attimo, quindi portate con voi una giacca o qualcosa per coprirvi, soprattutto per la cerimonia e l’aperitivo all’aperto. Il resto della giornata (cena e festa) sarà all’interno, quindi niente gelo al calice. Meglio prepararsi, che tremare con stile!",
    },
    {
      question: "🧭 Quanto dista da Trento?",
      answer:
        "Siamo in Valsugana, a circa 35 minuti di macchina da Trento. Si arriva comodamente con Google Maps e ne vale assolutamente la pena (spoiler: la vista è da poster vintage).",
    },
    {
      question: "🐶 Posso portare il cane?",
      answer:
        "Ci stiamo lavorando! Al momento stiamo valutando la logistica per i nostri amici pelosi.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ – Domande frequenti (e poco frequenti)</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}{" "}
              <span className="icon">{activeIndex === index ? "–" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
