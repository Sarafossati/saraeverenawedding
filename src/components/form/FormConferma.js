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
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <label>
        👤 Chi sei tu, meraviglioso invitato? Nome e cognome:
        <input
          type="text"
          name="name"
          placeholder="Così possiamo scriverlo sul segnaposto e non chiamarti “quello simpatico con gli occhiali”. "
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
        <input
          type="text"
          name="guests"
          placeholder="Scrivi i nomi, per prepararci a riceverli con un sorriso (e il posto a tavola giusto!)."
          value={formData.guests}
          onChange={handleChange}
        />
      </label>
      <label>
        🧒 Hai mini-esseri umani al seguito?
        <input
          type="text"
          name="children"
          placeholder="Vogliamo accoglierli al meglio, con sorrisi e magari qualche palloncino."
          value={formData.children}
          onChange={handleChange}
        />
      </label>
      <label>
        🧒🧒 Età dei bambini:
        <input
          type="number"
          name="childrenAge"
          placeholder="Così non prepariamo il menù baby a tuo figlio adolescente."
          value={formData.childrenAge}
          onChange={handleChange}
        />
      </label>
      <label>
        🥦 Allergie, intolleranze o ingredienti da evitare? Il menù sarà 100% vegano e vegetariano, ma niente paura: sarà così buono che anche l’ amante della griglia chiederà il bis!
        <input
          type="text"
          name="diet"
          placeholder="Segnalaci tutto ciò che dobbiamo sapere per farti mangiare felice e sereno."
          value={formData.diet}
          onChange={handleChange}
        />
      </label>
      <label>
        🏨 Notte del 10/11 Ottobre – Serve un tetto?
        <label>Hai bisogno di pernottare? Per quante persone?</label>
        <input
          type="text"
          name="night"
          placeholder="(Pensato per chi arriva dalla Lombardia, Piemonte, Austria o altre terre lontane…)"
          value={formData.night}
          onChange={handleChange}
        />
      </label>
      💬Hai un messaggio per noi, una richiesta speciale, un pensiero buffo o
      qualcosa che dovremmo includere nel nostro programma del matrimonio (anzi,
      unione civile!!!!)?
      <label></label>
      <textarea
        name="msg"
        placeholder="Scrivi pure tutto quello che ti passa per la testa (quasi tutto 😄). "
        value={formData.msg}
        onChange={handleChange}
      />
      <button type="submit">Invia</button>
    </form>
  );
}

export default FormConferma;
