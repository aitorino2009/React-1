export default function ConceptesTeorics() {
  const conceptes = [
    {
      titol: '1. Per què fem servir fitxers .jsx?',
      descripcio:
        'Permeten combinar marcatge HTML/XML amb lògica de JavaScript dins del mateix arxiu. Facilita l\'escriptura declarativa de la interfície i activa la validació i suport d\'eines modernes com Vite.',
      clau: 'JSX = JavaScript + XML',
    },
    {
      titol: '2. Mòduls: import i export',
      descripcio:
        'Utilitzem "export default" a l\'exercici (ex: Ejercicio1.jsx) per exposar el component i "import" a App.jsx per rebre\'l i integrar-lo a la vista.',
      clau: 'Modularitat i separació de responsabilitats',
    },
    {
      titol: '3. Majúscules obligatòries (PascalCase)',
      descripcio:
        'Els components han de començar sempre per majúscula (<ComprovarNotes />). Si s\'escriuen en minúscula, React els tracta com a etiquetes HTML estàndard i no renderitza el component.',
      clau: '<Componente /> vs <div />',
    },
    {
      titol: '4. Operador Condicional Ternari',
      descripcio:
        'Sintaxi simplificada per condicionals: "condició ? expr1 : expr2". A diferència d\'un if tradicional, és una expressió que retorna un valor i es pot incrustar directament dins de { } a JSX.',
      clau: 'nota >= 5 ? "Aprovat" : "Suspès"',
    },
    {
      titol: '5. Virtual DOM i Estat Reactiu',
      descripcio:
        'React manté una còpia en memòria del DOM. Quan l\'estat canvia, calcula les diferències mínimes i actualitza només els elements afectats, sense recarregar la pàgina.',
      clau: 'Rendiment òptim i reactivitat instantània',
    },
  ];

  return (
    <div className="conceptes-container">
      <h3>Conceptes Clau del Nivell 1</h3>
      <p className="conceptes-subtitol">
        Resum didàctic dels conceptes fonamentals explicats al dossier de formació.
      </p>

      <div className="targetes-grid">
        {conceptes.map((item, index) => (
          <div key={index} className="targeta-concepte">
            <div className="targeta-header">
              <h4>{item.titol}</h4>
            </div>
            <p className="targeta-desc">{item.descripcio}</p>
            <div className="targeta-tag">{item.clau}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
