# Respostes Teòriques - Desenvolupament Web amb React per l'Educació (Nivell 1)

Aquest document recull les respostes explicades i fonamentades a tots els conceptes teòrics, preguntes i exercicis de reflexió plantejats a la unitat **Nivell 1: Iniciació a React amb Vite**.

---

## 1. Què és React i per què s'utilitza?

### 1.1 Definició
**React** és una biblioteca de JavaScript de codi obert desenvolupada inicialment per Facebook (Meta) l'any 2013 per a la construcció d'interfícies d'usuari (UI) interactives, declaratives i basades en components. El seu propòsit principal és facilitar el desenvolupament d'aplicacions web d'una sola pàgina (**Single Page Applications** o **SPA**), on les dades canvien i s'actualitzen amb gran freqüència.

### 1.2 Aportacions clau
1. **Desenvolupament basat en components**: Tota la interfície es divideix en blocs autònoms, independents i reutilitzables. Cadascun d'aquests blocs gestiona el seu propi contingut, lògica i estil.
2. **Virtual DOM (VDOM)**: React manté una representació virtual a la memòria del DOM real del navegador. Quan l'estat d'un component canvia, React calcula les diferències de forma eficient (*reconciliation* / algorisme de *diffing*) i només actualitza al DOM real els nodes que han canviat, evitant recàrregues completes costoses.
3. **Flux de dades unidireccional (*One-way data binding*)**: Les dades flueixen de components pares a fills a través de propietats (*props*), fent el codi molt més predictible i senzill de depurar.
4. **Estat reactiu (*State*)**: L'estat representa la situació de les dades d'un component en un instant concret. En modificar l'estat, React renderitza de nou automàticament la part visual afectada en temps real (per exemple, un comptador de *likes* o la qualificació escolar).

---

## 2. Entorn de Treball i Eines: Node.js, npm i Vite

### 2.1 Per què cal instal·lar Node.js?
Node.js és un entorn d'execució multiplataforma que permet executar JavaScript fora del navegador web (al costat del servidor o a la màquina de desenvolupament). Gràcies a Node.js podem:
- Utilitzar gestors de paquets com **npm** per instal·lar llibreries, dependències i eines de construcció.
- Executar servidors de desenvolupament local ràpids.
- Compilar, optimitzar i empaquetar el codi JSX i ES6+ modern per fer-lo compatible amb qualsevol navegador.

### 2.2 Què és Vite i per què el preferim davant altres eines?
**Vite** és una eina de construcció (*build tool*) de nova generació que substitueix solucions més antigues i lentes (com Create React App basat en Webpack). Proporciona:
- Arrencada gairebé instantània del servidor de desenvolupament utilitzant mòduls ES nadius al navegador.
- Reemplaçament de mòduls en calent (**Hot Module Replacement** o **HMR**) ultra ràpid: quan deses un canvi, la vista s'actualitza al moment sense perdre l'estat ni recarregar tota la pàgina.
- Empaquetat de producció altament optimitzat mitjançant Rollup.

### 2.3 Estructura bàsica de carpetes d'un projecte Vite + React
- `index.html`: És el punt d'entrada principal de l'aplicació al navegador (a diferència d'altres eines on s'amaga a carpetes públiques). Conté el contenidor `<div id="root"></div>` i importa `main.jsx`.
- `src/main.jsx`: Punt d'entrada de JavaScript/React on s'utilitza `createRoot` de `react-dom/client` per muntar el component arrel (`<App />`) al DOM real.
- `src/App.jsx`: Component arrel principal on s'estructuren i s'importen els exercicis i components de la nostra aplicació.
- `src/index.css` i `src/App.css`: Fitxers d'estils globals i específics de l'aplicació.
- `public/`: Carpeta per a recursos estàtics directes (icones, favicons, imatges estàtiques) que no són processats per l'empaquetador.
- `node_modules/`: Conté tot el codi de les dependències descarregades per npm. **Mai no s'ha de modificar ni pujar al control de versions (Git)**, motiu pel qual s'inclou al fitxer `.gitignore`.

---

## 3. Preguntes Clau del Dossier (Nivell 1)

### Pregunta 1: Per què fem servir fitxers `.jsx`?
**Resposta**:
Fem servir l'extensió `.jsx` (**JavaScript XML**) perquè és una extensió de sintaxi per a JavaScript que permet escriure codi de marcatge d'estil HTML directament dins del codi JavaScript.
- Facilita la creació d'elements visuals de forma visualment familiar i declarativa.
- Permet intercalar expressions de JavaScript mitjançant claus `{}` directament a la plantilla.
- Ajuda a eines com Vite, compiladors (Babel/SWC) i editors de text (VS Code) a reconèixer que el fitxer conté sintaxi JSX, oferint autocompletat, ressaltat de sintaxi i anàlisi de tipus òptim.

### Pregunta 2: Com funciona `import` i `export`?
**Resposta**:
Són les paraules clau dels mòduls estàndard d'ECMAScript (ES Modules) per modularitzar el codi:
- **`export` (o `export default`)**: S'utilitza al fitxer on s'ha definit el component o funció (`Ejercicio1.jsx`) per "exposar-lo" o fer-lo públic cap a altres fitxers.
- **`import`**: S'utilitza al fitxer consumidor (`App.jsx`) per "rebre", carregar i poder utilitzar aquest component dins de la seva jerarquia de renderitzat.
- Separar components en fitxers individuals i interconnectar-los amb `import`/`export` afavoreix el principi de responsabilitat única, la reutilització i el manteniment del projecte.

### Pregunta 3: Per què els components de React han de començar obligatòriament amb Majúscula (*PascalCase*)?
**Resposta**:
React utilitza la convenció de majúscules per distingir entre:
1. **Elements HTML nadius**: Noms en minúscula com `<div>`, `<p>`, `<span>`, `<h1>`. React els transforma directament a etiquetes estàndard del navegador.
2. **Components personalitzats de React**: Noms que comencen amb majúscula com `<ComprovarNotes />` o `<App />`. Quan el compilador JSX veu una majúscula, sap que ha d'instanciar una funció o classe de component definida en el nostre codi i no pas buscar una etiqueta HTML nativa.
- Si s'escriu `<comprovarNotes />` en minúscules, el navegador i React intentaran renderitzar una etiqueta HTML `<comprovarNotes>`, la qual no existeix com a component React, provocant un error o comportament inesperat.

### Pregunta 4: Com funciona l'operador condicional ternari?
**Resposta**:
L'operador ternari és una estructura concisa per avaluar condicions en una sola expressió. La seva sintaxi és:
```javascript
condició ? expressió_si_cert : expressió_si_fals
```
A l'exercici:
```jsx
<strong>{nota >= 5 ? ' Aprovat' : ' Suspès'}</strong>
```
1. S'avalua la condició booleana `nota >= 5`.
2. Si és certa (la nota és 5 o superior), retorna l'expressió posterior al signe `?`, en aquest cas `' Aprovat'`.
3. Si és falsa (la nota és estrictament inferior a 5), retorna l'expressió posterior als dos punts `:`, en aquest cas `' Suspès'`.
- És fonamental en React perquè, a diferència de la sentència `if (...) { ... } else { ... }`, l'operador ternari és una **expressió** que retorna un valor, i per tant pot ser inserit directament dins de les claus `{}` del JSX.

---

## 4. Anàlisi de la Pràctica 1: Limitació de la Constant i Introducció a l'Estat

A la pràctica inicial es defineix:
```jsx
export default function ComprovarNotes() {
  const nota = 5;
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h2>Comprovador de notes</h2>
      <p>
        La nota es un {nota}:
        <strong> {nota >= 5 ? ' Aprovat' : ' Suspès'}</strong>
      </p>
    </div>
  );
}
```
Com assenyala encertadament el dossier al final de la pàgina 9:
> *"Podem observar que sempre retorna el mateix resultat ja que hem definit una constant."*

### Per què ocorre i quina és la solució en React?
- Com que `nota` està definida com una constant fixa (`const nota = 5`), el component sempre avalua `5 >= 5` com a cert i renderitza `' Aprovat'`. No hi ha cap mecanisme perquè l'usuari pugui alterar aquest valor ni perquè React detecti que cal refrescar la vista.
- **La solució pedagògica de React és el concepte d'Estat (`useState`)**: En convertir `nota` en una variable d'estat reactiva mitjançant `const [nota, setNota] = useState(5)`, cada vegada que l'usuari canvia la nota (mitjançant un desplegable, camp de text o botó), React re-renderitza automàticament el component mostrant el canvi entre *Aprovat* i *Suspès* a l'instant.
