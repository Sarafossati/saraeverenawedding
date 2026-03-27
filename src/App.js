import React, { useState } from "react";
import "./App.css";
import FormConferma from "./components/form/FormConferma.js";
import Faq from "./components/form/Faq.js";
import Logo from "./img/logo.png";
import Banner from "./img/bck.png";
import Location from "./img/location.png";
import Sistemazione from "./img/sistemazione.png";
import Regali from "./img/regali.png";
import { useMediaQuery } from "react-responsive";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MENU = ["🏰 Location", "🛌 Sistemazione", "🎁 Regali", "❓ FAQ"];
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {
      // close other items
      faqItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector(".icon").textContent = "+";
        }
      });

      // toggle current item
      item.classList.toggle("active");

      const icon = item.querySelector(".icon");
      icon.textContent = item.classList.contains("active") ? "–" : "+";
    });
  });

  return (
    <div className="App">
      <header className="header">
        {/* Hamburger Icon */}
        <div
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "❌" : "🍕"} Menu
        </div>

        <div className="logo">
          <a href="#intro" onClick={() => setShowForm(false)}>
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="menu">
          {MENU.map((menuItem) => {
            const linkText = menuItem.replace(/^[^\w]+/, "").toLowerCase();
            return (
              <a
                key={menuItem}
                href={`#${linkText}`}
                onClick={() => setShowForm(false)}
              >
                {menuItem}
              </a>
            );
          })}
        </nav>

        <button className="cta-btn" onClick={() => {setShowForm(true); window.scrollTo(0, 0);}}>
          Conferma
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="mobile-menu">
          {MENU.map((menuItem) => {
            const linkText = menuItem.replace(/^[^\w]+/, "").toLowerCase();
            return (
              <a
                key={menuItem}
                href={`#${linkText}`}
                onClick={() => {
                  setShowForm(false);
                  setMobileMenuOpen(false);
                }}
              >
                {menuItem}
              </a>
            );
          })}
        </nav>
      )}

      {showForm ? (
        <div className="form-wrapper">
          <FormConferma />
        </div>
      ) : (
        <>
          {/* BANNER */}
          <div className="hero" id="intro">
            <div className="hero-text-container">
              <div className="hero-text titleFrauen">
                <h5>SARA E VERE</h5>
                <h1 style={{ whiteSpace: "nowrap" }}>
                  DUE SPOSE,
                  <br />
                  UN CASTELLO,
                  <br />
                  UNA FESTA DA RICORDARE
                </h1>
                {isMobile && <div className="container">
              <img className="banner" src={Banner} alt="Banner" style={{ width: '70%'}} />
            </div>}
                <p className="desc">
                  Sì, è tutto vero: <span className="bold">ci sposiamo!</span>{" "}
                  🎉 <br />
                  Il <span className="bold">10 ottobre 2026</span>, in un
                  castello con vista montagna, ci diremo “sì” davanti a chi ci
                  vuole bene — e tu, speriamo tanto, sarai dei nostri.
                  <br /> Abbiamo immaginato una giornata piena di luce, musica,
                  brindisi, torta e (ovviamente) scarpe comode. Perché più che
                  un matrimonio, vogliamo che sia una{" "}
                  <span className="bold">festa vera</span>, allegra, rilassata,
                  con abbracci lunghi e risate spontanee.
                  <br /> Abbiamo scelto ogni dettaglio con cura, ma senza
                  stress: vogliamo che tutti si sentano bene, a proprio agio e
                  parte di questo momento.
                  <br /> Spoiler: ci sarà da mangiare bene, da ballare tanto e
                  da godersi ogni secondo — vestiti comodi, sorrisi pronti, e
                  via.
                </p>
              </div>
            </div>

            {!isMobile && <div className="container">
              <img className="banner" src={Banner} alt="Banner" />
            </div>}
          </div>

          {/* LOCATION */}
          <div className="hero location" id="location">
            <div className="container">
              <img className="banner" src={Location} alt="Location" />
            </div>
            <div className="hero-text-container">
              <div className="hero-text">
                <h5>LA LOCATION</h5>
                <h1 style={{ whiteSpace: `${isMobile ? 'inherit' : "nowrap"}` }}>
                  UN MATRIMONIO
                  <br />
                  CON VISTA
                  <br />
                  (e mura medievali)
                </h1>
                <p className="desc">
                  Ci troviamo{" "}
                  <span className="bold">
                    Sabato 10 Ottobre 2026 alle ore 14:00, a 📍 Castel Ivano
                  </span>{" "}
                  – Via al Castello 1, 38059 Strigno (Trento).
                  <br />
                  È un castello vero, con torri, storia e una vista pazzesca
                  sulla Valsugana. Non è uno scherzo, abbiamo prenotato un
                  intero castello per dire “Sì”! 🏰
                  <br /> La cerimonia sarà all’aperto (sperando nel sole), e poi
                  si parte:{" "}
                  <span className="bold">
                    aperitivo, cena e balli fino a tarda notte
                  </span>
                  .<br /> Porta la macchina fotografica mentale e preparati a un
                  po’ di magia, natura, risate e forchette alzate.
                </p>
                <button className="cta-btn" type="submit"><a style={{textDecoration: 'none', color: "#ad843b"}} href="https://maps.app.goo.gl/VC5KSt6NTGm633f28" target="_blank" rel="noreferrer">📍 Indicazioni Google Maps</a></button>
              </div>
            </div>
          </div>

          {/* SISTEMAZIONE */}
          <div className="hero" id="sistemazione">
            <div className="hero-text-container" style={{paddingTop: '2rem' }}>
              <div className="hero-text">
                <h5>LA SISTEMAZIONE</h5>
                <h1 style={{ whiteSpace: "nowrap" }}>VENI, VIDI, DORMIVI</h1>
                <p className="desc">
                  Se vieni da lontano (tipo Lombardia, Piemonte, Austria o
                  semplicemente fuori zona),{" "}
                  <span className="bold">ci pensiamo noi a dove dormirai</span>.
                  <br />
                  Sistemazione per la notte del{" "}
                  <span className="bold">10 Ottobre, colazione inclusa</span>,
                  zero sbatti.
                  <br /> Ti basta <span className="bold">dircelo nel form</span>
                  : quanti siete, se hai bisogno di pernottare e tutto il resto.
                  <br /> Ti manderemo più avanti i dettagli della struttura
                  (spoiler: sarà tutto comodo, vicino, e con caffè buono al
                  mattino ☕️).
                </p>
              </div>
            </div>

            <div className="container">
              <img className="banner" src={Sistemazione} alt="Sistemazione" />
            </div>
          </div>

          {/* REGALI */}
          <div className="hero location" id="regali">
            <div className="container">
              <img className="banner" src={Regali} alt="Regali" />
            </div>
            <div className="hero-text-container">
              <div className="hero-text">
                <h5>I REGALI</h5>
                <h1>
                  REGALI?
                  <br />
                  VOI SIETE GIÀ ABBASTANZA!
                </h1>
                <p className="desc">
                  Onestamente? Ci basta avervi lì con noi.
                  <br /> La vostra presenza è il regalo più bello (ma anche
                  quello più rumoroso, danzante e affettuoso – quindi perfetto).
                  <br /> Detto ciò… se qualcuno volesse proprio contribuire con
                  un pensiero, potete farlo sostenendo uno dei nostri progetti
                  futuri: un viaggio, una casa più grande, o semplicemente un
                  forno della pizza per affrontare la vita con dignità.
                </p>
                <p
                  style={{ marginTop: "1rem", lineHeight: "44px" }}
                  className="desc"
                >
                  📩 IBAN: IT11J0808111602000304267745 - INTESTATARIO: Delponte Verena e Fossati Sara Valeria
                  <br /> Grazie per l’affetto, l’entusiasmo, e per esserci.
                </p>
              </div>
            </div>
          </div>

          {/* CONFERMA  */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: '2rem'
            }}
          >
            <h2 style={{ fontSize: "30px", padding:'0 2rem' }}>
              Diteci se ci sarete (così non prepariamo posto a tavola per Casper
              👻).
            </h2>
            <p className="descConferma">
              Per organizzarci bene e senza ansia, vi chiediamo di confermare la
              vostra presenza entro il 31 Gennaio 2026.
              <br /> Trovate il link al form direttamente qui sul sito. <br />
              Nel form potete anche farci sapere chi vi accompagna, se portate
              bimbi, se avete intolleranze, se vi fermate a dormire, ecc. <br />
              Ogni risposta = un sorriso in più. Vi aspettiamo!
            </p>
            <button
              className="cta-btn"
              style={{ marginBottom: "3rem" }}
              onClick={() => {setShowForm(true); window.scrollTo(0, 0);}}
            >
              Conferma
            </button>
          </div>

          {/* FAQ */}
          <div id="faq">
            <Faq />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
