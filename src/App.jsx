import { useState } from 'react';
import ComprovarNotes from './Ejercicio1';
import ComprovarNotesInteractiu from './ComprovarNotesInteractiu';
import ConceptesTeorics from './ConceptesTeorics';
import './App.css';

function App() {
  const [pestanyaActiva, setPestanyaActiva] = useState('totes');

  return (
    <div className="App">
      <header className="app-header">
        <span className="curs-badge">Desenvolupament Web amb React per l’Educació · Nivell 1</span>
        <h1>Mis Ejercicios de Programación</h1>
        <p className="app-subtitle">
          Iniciació a React amb Vite · Projecte i pràctiques d&apos;aprenentatge
        </p>

        <nav className="nav-pestanyes">
          <button
            type="button"
            className={`btn-pestanya ${pestanyaActiva === 'totes' ? 'activa' : ''}`}
            onClick={() => setPestanyaActiva('totes')}
          >
            📋 Vista Completa
          </button>
          <button
            type="button"
            className={`btn-pestanya ${pestanyaActiva === 'oficial' ? 'activa' : ''}`}
            onClick={() => setPestanyaActiva('oficial')}
          >
            📌 Exercici 1 Oficial
          </button>
          <button
            type="button"
            className={`btn-pestanya ${pestanyaActiva === 'dinamic' ? 'activa' : ''}`}
            onClick={() => setPestanyaActiva('dinamic')}
          >
            ⚡ Simulador Dinàmic
          </button>
          <button
            type="button"
            className={`btn-pestanya ${pestanyaActiva === 'teoria' ? 'activa' : ''}`}
            onClick={() => setPestanyaActiva('teoria')}
          >
            📖 Teoria i Conceptes
          </button>
        </nav>
      </header>

      <main className="app-main">
        {/* Secció 1: Exercici Oficial del Dossier */}
        {(pestanyaActiva === 'totes' || pestanyaActiva === 'oficial') && (
          <section className="seccio-exercici oficial-box">
            <div className="seccio-header">
              <span className="etiqueta-badge badge-oficial">Pràctica Oficial 1 (Dossier)</span>
              <h2>Comprovador de notes (Estàtic)</h2>
            </div>
            <p className="instruccio-text">
              Resultado del ejercicio actual (component <code>Ejercicio1.jsx</code>):
            </p>
            <div className="component-wrapper">
              <ComprovarNotes />
            </div>
            <aside className="nota-didactica">
              <strong>💡 Observació pedagògica del dossier:</strong> Com que s&apos;ha definit una constant (<code>const nota = 5</code>),
              el component sempre avalua la mateixa condició i retorna sempre <strong>Aprovat</strong>.
            </aside>
          </section>
        )}

        {/* Secció 2: Ampliació didàctica amb estat reactiu */}
        {(pestanyaActiva === 'totes' || pestanyaActiva === 'dinamic') && (
          <section className="seccio-exercici ampliacio-box">
            <div className="seccio-header">
              <span className="etiqueta-badge badge-ampliacio">Ampliació Reactiva</span>
              <h2>Evolució Didàctica amb useState</h2>
            </div>
            <ComprovarNotesInteractiu />
          </section>
        )}

        {/* Secció 3: Targetes de Teoria i Conceptes Clau */}
        {(pestanyaActiva === 'totes' || pestanyaActiva === 'teoria') && (
          <section className="seccio-exercici teoria-box">
            <ConceptesTeorics />
          </section>
        )}
      </main>

      <footer className="app-footer">
        <p>Desenvolupament Web amb React per l’Educació · Nivell 1 · Curs APOF</p>
        <p className="repo-link">
          Repositori GitHub:{' '}
          <a
            href="https://github.com/aitorino2009/React-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/aitorino2009/React-1
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
