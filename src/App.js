import React from 'react';
import logo from './logo.png'; // Verifique se você tem um logo ou substitua o caminho da imagem.
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Casa Pet Campinas logo" />
        <h1>Casa Pet Campinas</h1>
        <p>Site em Construção</p>
        <p>
          Agende um banho e tosa via WhatsApp:{" "}
          <a
            href="https://wa.me/5519995086273"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            (19) 99508-6273
          </a>
        </p>
        <p>
          Siga-nos no Instagram:{" "}
          <a
            href="https://www.instagram.com/casapet.campinas"
            target="_blank"
            rel="noopener noreferrer"
            className="App-link"
          >
            @casapet.campinas
          </a>
        </p>
        <p>Entregamos via Ifood</p>
      </header>
    </div>
  );
}

export default App;
