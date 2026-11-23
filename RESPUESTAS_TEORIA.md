# Respuestas Teóricas - Desarrollo Web con React para la Educación (Nivel 1)

Documento con las explicaciones detalladas y respuestas fundamentadas a todos los conceptos teóricos, preguntas clave y ejercicios prácticos del dossier **Nivel 1: Iniciación a React con Vite**.

---

## 1. ¿Qué es React y cuáles son sus ventajas fundamentales?

### 1.1 Definición
**React** es una biblioteca de JavaScript de código abierto desarrollada originalmente por Meta (Facebook) para la creación de interfaces de usuario interactivas, declarativas y basadas en componentes. Su diseño está orientado a optimizar aplicaciones web de una sola página (**Single Page Applications** o **SPA**), permitiendo actualizar la interfaz de manera fluida cuando los datos cambian.

### 1.2 Principales ventajas
1. **Enfoque basado en componentes**: Permite estructurar la interfaz en bloques independientes, aislados y reutilizables. Cada componente maneja su propia lógica de presentación y ciclo de vida.
2. **DOM Virtual (VDOM)**: React almacena una copia ligera del DOM del navegador en memoria. Al ocurrir un cambio de estado, calcula la diferencia mínima necesaria (*reconciliación / diffing*) y actualiza únicamente los nodos modificados en el DOM real, garantizando un rendimiento óptimo.
3. **Flujo de datos unidireccional**: Los datos se transfieren de componentes superiores a inferiores mediante *props*, facilitando la trazabilidad del estado y la depuración del código.
4. **Estado reactivo (*State*)**: Representa la información interna de un componente en un instante determinado. Al modificar el estado, React re-renderiza automáticamente la vista afectada sin recargar la página completa.

---

## 2. Entorno y Herramientas: Node.js, npm y Vite

### 2.1 Utilidad de Node.js en el desarrollo con React
Node.js es un entorno de ejecución de JavaScript fuera del navegador. Aunque el código final de React se ejecuta en el navegador del usuario cliente, Node.js es imprescindible en desarrollo para:
- Ejecutar el gestor de paquetes **npm** para instalar librerías, dependencias y plugins.
- Servir la aplicación en local con servidores de desarrollo rápidos.
- Transformar y compilar código moderno (JSX, ESNext) a sintaxis estándar compatible con todos los navegadores.

### 2.2 ¿Qué es Vite y por qué se utiliza?
**Vite** es una herramienta de compilación y empaquetado de última generación que mejora drásticamente la experiencia de desarrollo:
- Utiliza módulos ES nativos para iniciar el servidor de desarrollo casi de inmediato.
- Incorpora **Hot Module Replacement (HMR)** instantáneo, refrescando únicamente los módulos modificados en pantalla sin perder el estado de la aplicación.
- Compila a producción con Rollup produciendo ficheros altamente optimizados y ligeros.

### 2.3 Estructura básica de archivos de un proyecto Vite + React
- `index.html`: Punto de entrada HTML principal en la raíz del proyecto. Contiene `<div id="root"></div>` y enlaza con el script principal.
- `src/main.jsx`: Punto de entrada de JavaScript/React que monta el componente raíz (`<App />`) en el elemento `#root` del DOM.
- `src/App.jsx`: Componente principal contenedor de la aplicación.
- `src/Ejercicio1.jsx`: Componente modular donde se resuelve la práctica del dossier.
- `src/index.css` / `src/App.css`: Archivos de estilo globales y de componentes.
- `public/`: Recursos estáticos que se sirven directamente (iconos, fuentes, imágenes fijas).
- `node_modules/`: Carpeta de dependencias generada por npm (debe ignorarse en Git).

---

## 3. Preguntas Clave del Dossier (Nivel 1)

### Pregunta 1: ¿Por qué usamos archivos `.jsx`?
**Respuesta**:
Usamos la extensión `.jsx` (**JavaScript XML**) porque permite combinar sintaxis similar a HTML con código JavaScript dentro del mismo archivo.
- Permite escribir interfaces visuales de forma declarativa e intuitiva.
- Facilita la interpolación de expresiones y lógica de JavaScript usando llaves `{}`.
- Permite a los editores de código (como VS Code) y a herramientas de construcción (como Vite y Babel/SWC) aplicar resaltado de sintaxis, validaciones y optimizaciones específicas para JSX.

### Pregunta 2: ¿Cómo funcionan `import` y `export`?
**Respuesta**:
Corresponden al estándar de módulos de JavaScript (ES Modules):
- **`export default` / `export`**: Permite al archivo de origen (`Ejercicio1.jsx`) hacer accesible su componente o función hacia otros archivos del proyecto.
- **`import`**: Permite al archivo consumidor (`App.jsx`) traer e incorporar dicho componente para utilizarlo en su jerarquía visual.
- Esto promueve la modularidad, la separación de responsabilidades y la reutilización de código limpio.

### Pregunta 3: ¿Por qué los nombres de componentes siempre deben empezar con Mayúscula (PascalCase)?
**Respuesta**:
React utiliza esta convención para diferenciar componentes personalizados de elementos HTML nativos:
- Las etiquetas que inician con minúscula (como `<div />`, `<span />`, `<p />`) son interpretadas por JSX como elementos HTML estándar del DOM.
- Las etiquetas que inician con mayúscula (como `<ComprovarNotes />` o `<App />`) son interpretadas como componentes React definidos por el desarrollador.
- Si se escribe `<comprovarNotes />` con minúscula inicial, React intentará buscar una etiqueta HTML con ese nombre y no ejecutará la función del componente, generando un error de renderizado.

### Pregunta 4: ¿Cómo funciona el operador ternario?
**Respuesta**:
El operador condicional ternario es la forma abreviada de una estructura `if-else` que se evalúa como una expresión:
```javascript
condición ? expresión_si_verdadero : expresión_si_falso
```
En el ejercicio:
```jsx
<strong> {nota >= 5 ? ' Aprovat' : ' Suspès'}</strong>
```
1. Evalúa si `nota >= 5`.
2. Si la condición es verdadera (`true`), devuelve `' Aprovat'`.
3. Si la condición es falsa (`false`), devuelve `' Suspès'`.
- Dado que en JSX no se pueden colocar sentencias de control `if-else` completas directamente dentro de las llaves `{}` del marcado, el operador ternario es la solución idónea para renderizado condicional en línea.

---

## 4. Conclusión de la Práctica 1: De la Constante al Estado Reactivo

En el código base de la práctica:
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
Tal como indica el documento:
> *"Podemos observar que siempre retorna el mismo resultado ya que hemos definido una constante."*

Al definir `const nota = 5`, el valor no cambia en tiempo de ejecución. Para permitir que el usuario cambie la calificación dinámicamente y el componente se actualice en pantalla, en React se emplea el hook de estado `useState`, permitiendo enlazar la entrada de datos del usuario con el renderizado automático del componente.
