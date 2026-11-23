# Desenvolupament Web amb React per l'Educació - Nivell 1

Repositori amb la resolució completa, estructurada i modular dels continguts i exercicis del dossier **"Desenvolupament Web amb React per l'Educació - Nivell 1"**.

---

## 📚 Objectius Didàctics i Competències

- **Objectiu Didàctic**: Comprendre i assimilar el funcionament bàsic de la biblioteca React.js mitjançant exercicis pràctics i projectes d'exemple desenvolupats amb Vite.
- **Competències Assolides**:
  - Capacitat per llegir, comprendre i estructurar codi React modern basat en components funcionals.
  - Domini de la sintaxi JSX i la interpolació d'expressions JavaScript mitjançant `{}`.
  - Ús de l'operador condicional ternari per a renderitzat condicional.
  - Comprensió del flux modular amb `import` i `export`.
  - Integració de bones pràctiques de desenvolupament, convencions de nomenclatura (PascalCase) i control de versions amb Git mitjançant branques de característiques (*feature branches*).

---

## 📁 Estructura del Projecte

```text
React 1/
├── RESPOSTES_TEORIA.md       # Respostes detallades en català a la teoria i preguntes clau
├── RESPUESTAS_TEORIA.md      # Respuestas detalladas en castellano a la teoría y preguntas clave
├── README.md                 # Documentació general del projecte i instruccions
├── index.html                # Punt d'entrada HTML per a Vite amb contenidor #root
├── package.json              # Configuració de dependències i scripts npm
├── vite.config.js            # Configuració del servidor de desenvolupament Vite i plugin de React
├── public/                   # Recursos estàtics directes
└── src/
    ├── main.jsx              # Punt d'entrada de muntatge de React al DOM (createRoot)
    ├── App.jsx               # Component arrel principal que orquestra la visualització
    ├── App.css               # Estils del component principal
    ├── index.css             # Estils globals de l'aplicació
    └── Ejercicio1.jsx        # Component ComprovarNotes (Pràctica 1 del dossier)
```

---

## 🚀 Pràctica 1: Comprovador de Notes (`Ejercicio1.jsx`)

El component `ComprovarNotes` implementa la lògica condicional de qualificacions escolars mitjançant l'operador ternari:

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

### Conceptes Clau Demostrats:
1. **Fitxers `.jsx`**: Permeten combinar sintaxi JavaScript amb marcatge visual tipus XML/HTML.
2. **Nomenclatura PascalCase**: El component i el fitxer comencen amb majúscula (`Ejercicio1.jsx` / `ComprovarNotes`) perquè React el distingeixi dels elements HTML nadius.
3. **Interpolació amb `{}`**: Permet incrustar valors i expressions de JavaScript dins del marcatge JSX.
4. **Operador Ternari (`condició ? expr1 : expr2`)**: Avalua de forma concisa si la nota és igual o superior a 5 per retornar `' Aprovat'` o `' Suspès'`.
5. **Observació del dossier**: En definir `const nota = 5`, el component és estàtic i retorna sempre el mateix resultat. La continuació natural és dotar-lo d'estat reactiu (`useState`).

---

## 🛠️ Instruccions d'Execució i Desplegament

### 1. Instal·lar dependències
```bash
npm install
```

### 2. Executar el servidor de desenvolupament
```bash
npm run dev
```
Obre el navegador a l'adreça indicada (per defecte `http://localhost:5173`).

### 3. Compilar per a producció
```bash
npm run build
```

### 4. Previsualitzar la compilació
```bash
npm run preview
```

---

## 🌿 Historial de Branques i Git Workflow

El projecte s'ha desenvolupat seguint una estratègia de branques estructurada per funcionalitats (*feature branches*):

- `main`: Branca principal estable amb tot el contingut integrat.
- `feature/init-project`: Inicialització del projecte Vite + React, configuració bàsica i dependències.
- `feature/ejercicio-1-comprovar-notes`: Implementació del component `Ejercicio1.jsx` i integració a `App.jsx`.
- `feature/teoria-documentacio`: Afegit de `RESPOSTES_TEORIA.md`, `RESPUESTAS_TEORIA.md` i `README.md`.
- `feature/interficie-educativa-reactiva`: Millores visuals, comparativa didàctica entre versió estàtica i dinàmica, i targetes explicatives dels conceptes.
