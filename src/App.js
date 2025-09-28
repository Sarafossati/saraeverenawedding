import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import FormConferma from "./components/form/FormConferma.js";
// import Logo from "./logo.png"; // Metti il tuo logo nella cartella /src

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const lineFillRef = useRef(null);

  const tabs = [
    { id: "location", label: "Location", content: <p>Indirizzo: Via Roma 123</p> },
    { id: "sistemazione", label: "Sistemazione", content: <p>Info sulla sistemazione...</p> },
    { id: "programma", label: "Programma", content: <p>Programma dettagliato...</p> },
    { id: "regali", label: "Regali", content: <p>Idee regalo...</p> },
    { id: "conferma", label: "Conferma", content: <FormConferma /> },
  ];

  useEffect(() => {
    if (lineFillRef.current) {
      const fillPercent =
        tabs.length > 1 ? (activeTab / (tabs.length - 1)) * 100 : 0;
      lineFillRef.current.style.width = `${fillPercent}%`;
    }
  }, [activeTab, tabs.length]);

  const goToConferma = () => {
    setActiveTab(tabs.length - 1);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          {/* <img src={Logo} alt="Logo" /> */}
          logo qui
        </div>
        <div className="tabs-wrapper">
          <ul className="tabs">
            {tabs.map((tab, idx) => (
              <li
                key={tab.id}
                className={activeTab === idx ? "active" : ""}
                onClick={() => setActiveTab(idx)}
              >
                <span className="dot" />
                <span className="label">{tab.label}</span>
              </li>
            ))}
          </ul>
          <button className="cta-btn" onClick={goToConferma}>
            Conferma la tua presenza
          </button>
        </div>
      </header>

      <div className="timetable-slider">
        <div className="line">
          <div className="line-fill" ref={lineFillRef}></div>
        </div>
        <div className="tab-content">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}

export default App;
