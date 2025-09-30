import React, { useState } from "react";
import "./App.css";
import FormConferma from "./components/form/FormConferma.js";
import Logo from "./img/logo.png";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const MENU = ["🏰 Location", "🛌 Sistemazione", "🎁 Regali", "❓ FAQ"];

  return (
    <div className="App">
      <header className="header">
        {/* Hamburger Icon */}
        <div
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "🥕" : "🥦"} Menu
        </div>

        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="menu">
          {MENU.map((menuItem) => {
            // Rimuove tutto ciò che non è lettera/digit all'inizio
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

        <button className="cta-btn" onClick={() => setShowForm(true)}>
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

      {showForm && (
        <div className="form-wrapper">
          <FormConferma />
        </div>
      )}
    </div>
  );
}

export default App;
