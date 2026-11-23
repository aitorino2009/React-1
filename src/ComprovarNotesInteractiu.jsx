import { useState } from 'react';

export default function ComprovarNotesInteractiu() {
  const [nota, setNota] = useState(5);

  const esAprovat = nota >= 5;

  return (
    <div className="interactiu-card">
      <div className="interactiu-header">
        <h3>Simulador Dinàmic: Evolució a Estat Reactiu</h3>
        <span className="badge-teoria">useState + Operador Ternari</span>
      </div>

      <p className="interactiu-explicacio">
        Al dossier s'assenyala: <em>&ldquo;Podem observar que sempre retorna el mateix resultat ja que hem definit una constant.&rdquo;</em>
        <br />
        Amb <strong>estat reactiu</strong>, en modificar la nota, React detecta el canvi i re-renderitza únicament la part visual afectada.
      </p>

      <div className="control-panell">
        <label htmlFor="input-nota" className="control-label">
          Selecciona o ajusta la qualificació:
        </label>
        <div className="slider-container">
          <input
            id="input-nota"
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={nota}
            onChange={(e) => setNota(parseFloat(e.target.value))}
            className="slider"
          />
          <span className="valor-nota">{nota.toFixed(1)} / 10</span>
        </div>

        <div className="botons-presets">
          <button type="button" onClick={() => setNota(2.5)} className="btn-preset">
            Exemple Suspès (2.5)
          </button>
          <button type="button" onClick={() => setNota(5.0)} className="btn-preset">
            Límit Aprovat (5.0)
          </button>
          <button type="button" onClick={() => setNota(7.5)} className="btn-preset">
            Notable (7.5)
          </button>
          <button type="button" onClick={() => setNota(10.0)} className="btn-preset">
            Excel·lent (10.0)
          </button>
        </div>
      </div>

      <div className={`resultat-caixa ${esAprovat ? 'aprovat' : 'suspes'}`}>
        <h4>Resultat de l'avaluació en temps real:</h4>
        <p className="resultat-text">
          La nota és un <strong>{nota}</strong>:
          <span className={`status-pill ${esAprovat ? 'pill-aprovat' : 'pill-suspes'}`}>
            {nota >= 5 ? ' Aprovat' : ' Suspès'}
          </span>
        </p>
        <p className="avaluacio-detall">
          {nota >= 9
            ? '🏆 Qualificació: Excel·lent'
            : nota >= 7
            ? '🌟 Qualificació: Notable'
            : nota >= 5
            ? '✅ Qualificació: Aprovat'
            : '⚠️ Qualificació: Suspès (Cal reforç)'}
        </p>
      </div>

      <div className="codi-live">
        <div className="codi-header">Codi JSX avaluat:</div>
        <code>
          {`<strong> {nota >= 5 ? ' Aprovat' : ' Suspès'} </strong> -> `}
          <span className={esAprovat ? 'codi-aprovat' : 'codi-suspes'}>
            &quot;{nota >= 5 ? ' Aprovat' : ' Suspès'}&quot;
          </span>
        </code>
      </div>
    </div>
  );
}
