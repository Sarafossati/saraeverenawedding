import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function FormConferma() {
  const [formData, setFormData] = useState({
    name: "",
    conferma: "",
    guests: "",
    children: "",
    childrenAge: "",
    diet: "",
    night: "",
    msg: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione form
    if (!formData.name || !formData.conferma) {
      setError("Nome e conferma sono obbligatori!");
      setSuccess("");
      return;
    }

    setError("");

    const serviceID = "service_rxwq3ft";
    const templateID = "template_tqq6v3j";
    const publicKey = "_rofz9XCjKw5a1jZ8";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        setSuccess("Email inviata correttamente!");
        setFormData({
          name: "",
          conferma: "",
          guests: "",
          children: "",
          childrenAge: "",
          diet: "",
          night: "",
          msg: "",
        });
      },
      () => setError("Errore nell'invio dell'email!")
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ display: 'flex', gap: '5px'}}>Per organizzarci bene e senza ansia, vi chiediamo di confermare la vostra presenza entro il <p className="bold">31 Gennaio 2026.</p></p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <label>
        👤 Chi sei tu, meraviglioso invitato? Nome e cognome:
        <span className="desc">Così possiamo scriverlo sul segnaposto e non chiamarti “quello simpatico con gli occhiali”.</span>
        <input
          type="text"
          name="name"
          placeholder="Nome e Cognome"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Farai parte della festa più bella dell’anno (modestamente parlando)?
      </label>
      <label className="radioBtn">
        <input
          type="radio"
          name="conferma"
          value="Sì"
          checked={formData.conferma === "Sì"}
          onChange={handleChange}
        />
        🎊 Eccome se ci sarò!
      </label>
      <label className="radioBtn">
        <input
          type="radio"
          name="conferma"
          value="No"
          checked={formData.conferma === "No"}
          onChange={handleChange}
        />
        😢 Ahimè, devo declinare l’invito
      </label>
      <label>
        🧑‍🤝‍🧑 Viene qualcun altro con te? Chi?
        <span className="desc">Scrivi i nomi, per prepararci a riceverli con un sorriso (e il posto a tavola giusto!).</span>
        <input
          type="text"
          name="guests"
          placeholder="Inserisci..."
          value={formData.guests}
          onChange={handleChange}
        />
      </label>
      <label>
        🧒 Hai mini-esseri umani al seguito?
        <span className="desc">Vogliamo accoglierli al meglio, con sorrisi e magari qualche palloncino.</span>
        <input
          type="text"
          name="children"
          placeholder="Come si chiamano?"
          value={formData.children}
          onChange={handleChange}
        />
      </label>
      <label>
        🧒🧒 Età dei bambini:
        <span className="desc">Così non prepariamo il menù baby a tuo figlio adolescente.</span>
        <input
          type="number"
          name="childrenAge"
          placeholder="Quanti anni hanno?"
          value={formData.childrenAge}
          onChange={handleChange}
        />
      </label>
      <label>
        🥦 Allergie, intolleranze o ingredienti da evitare? Il menù sarà 100% vegano e vegetariano, ma niente paura: sarà così buono che anche l’ amante della griglia chiederà il bis!
        <span className="desc">Segnalaci tutto ciò che dobbiamo sapere per farti mangiare felice e sereno.</span>
        <input
          type="text"
          name="diet"
          placeholder="A cosa dobbiamo prestare attenzione?"
          value={formData.diet}
          onChange={handleChange}
        />
      </label>
      <label>
        🏨 Notte del 10/11 Ottobre – Serve un tetto?
        <label>Hai bisogno di pernottare? Per quante persone?</label>
        <span className="desc">(Pensato per chi arriva dalla Lombardia, Piemonte, Austria o altre terre lontane…)</span>
        <input
          type="text"
          name="night"
          placeholder="Quante persone e chi?"
          value={formData.night}
          onChange={handleChange}
        />
      </label>
      💬 Hai un messaggio per noi, una richiesta speciale, un pensiero buffo o
      qualcosa che dovremmo includere nel nostro programma del matrimonio (anzi,
      unione civile!!!!)?
      <span className="desc">Scrivi pure tutto quello che ti passa per la testa (quasi tutto 😄). </span>
      <textarea
        name="msg"
        placeholder="Ti leggiamo!"
        value={formData.msg}
        onChange={handleChange}
      />
      <button className="cta-btn" style={{backgroundColor: "#ad843b", color: "#FFFFFF"}} type="submit">Invia</button>
    </form>
  );
}

export default FormConferma;
