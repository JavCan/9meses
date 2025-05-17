# Regalo One Pager: Galería de Recuerdos para Mi Danna Hermosa ❤️

Este proyecto es una página web especial estilo "One Pager", creada con mucho cariño como un regalo para mi novia, Danna. La intención es celebrar nuestra relación de una forma única y significativa, desbloqueando recuerdos y frases especiales mes a mes, culminando en nuestro primer aniversario.

---

## ✨ Descripción del Proyecto

La página presenta un diseño romántico, limpio y sensible, con el objetivo de evocar emociones y celebrar los momentos compartidos. Está dividida en las siguientes secciones principales:

### 🏠 Página de Bienvenida (Landing Page)

*   Al cargar la web, se muestra una sección inicial con un mensaje de bienvenida personalizado y una imagen de fondo significativa.
*   Incluye un botón que invita a desplazarse suavemente hacia la galería de recuerdos.
*   Utiliza animaciones sutiles con Framer Motion para una entrada elegante.

### 🖼️ Galería de Recuerdos

*   El corazón del proyecto. Muestra una colección de **12 tarjetas**, cada una representando un mes de relación.
*   Inicialmente, **9 tarjetas están desbloqueadas**, mostrando una imagen representativa del recuerdo de ese mes.
*   Las **3 tarjetas restantes** (para los meses 10, 11 y 12) aparecen **bloqueadas** con un ícono de candado.
*   **Desbloqueo Automático:** Cada mes, en la fecha correspondiente a nuestro aniversario mensual, una nueva tarjeta se desbloqueará automáticamente.
*   **Interacción:** Al hacer clic en una tarjeta desbloqueada, esta realiza una animación de "flip" (vuelta) para revelar una frase personalizada o un pensamiento asociado a ese recuerdo.
*   Las tarjetas bloqueadas no son interactivas hasta su fecha de desbloqueo.

### ⏳ Línea de Tiempo y Cuenta Regresiva

*   Ubicada al final de la página, esta sección muestra una **cuenta regresiva** detallada (días, horas, minutos, segundos) hasta nuestro primer aniversario.
*   También incluye una **barra de progreso** visual que indica cuánto tiempo hemos compartido juntos y cuánto falta para el año.
*   Se actualiza en tiempo real.

---

## 🛠️ Tecnologías Usadas

*   **React (v19.1.0)**: Biblioteca principal para construir la interfaz de usuario.
*   **Vite**: Herramienta de desarrollo frontend moderna y rápida.
*   **Framer Motion**: Para animaciones fluidas y atractivas, especialmente en el efecto "flip" de las tarjetas y las transiciones de la landing page.
*   **JavaScript (ES6+)**: Para la lógica de la aplicación, incluyendo el cálculo de fechas y el desbloqueo de tarjetas (utilizando objetos `Date` nativos).
*   **CSS3**: Para los estilos, con un enfoque en diseño responsivo ("mobile-first") y efectos visuales como el "glassmorphism".
*   **HTML5**: Estructura semántica de la página.

---

## 📁 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
Trae

Used 1 context

¡Hola! Entendido, quieres asegurar que toda la aplicación sea completamente responsiva con un enfoque "mobile-first", especialmente para pantallas del tamaño de un iPhone 12 al 16 (alrededor de 390px de ancho de viewport).

He revisado los archivos CSS y la mayoría ya tienen consideraciones para responsividad mediante max-width media queries. El problema más visible, según tu captura de pantalla, está en la sección de bienvenida ( Landing.css ), donde el texto del título es demasiado grande para pantallas móviles.

Vamos a enfocarnos en ajustar esto y asegurar que los demás estilos también se comporten bien en móviles.

1. Ajustes en Landing.css

Modificaremos Landing.css para mejorar la legibilidad y el ajuste del texto en móviles. También corregiré el padding base del botón que es excesivo.

```
// ... existing code ...
.landing-title {
  font-size: 4.5em; /* Reducido ligeramente para desktop, se 
  ajustará más en móviles */
  font-weight: 100;
  color: #ffffff;
  margin-bottom: .2em;
  width: 100%; /* Asegura que ocupe el ancho para la alineación 
  de texto */
  line-height: 1.1; /* Mejorar espaciado entre líneas si el 
  título es largo */
}

.landing-subtitle {
  font-size: 2em; /* Reducido ligeramente para desktop */
  color: #eeeeee;
  max-width: 85%; 
  line-height: 1.6; /* Ajustado para mejor legibilidad */
  margin-bottom: 1em;
}

/* ADD STYLES FOR THE NEW BUTTON */
.scroll-to-gallery-button {
  padding: 0.8em 2em; /* Padding base más razonable para desktop 
  */
  font-size: 1.2em; /* Tamaño de fuente base para desktop */
  font-weight: 500;
// ... existing code ...
}

// ... existing code ...
@media (max-width: 768px) {
  .landing-container {
    padding: 10vh 6vw 5vh 6vw; /* Ajustado para tablets */
    justify-content: space-around; /* Puede ser mejor que 'end' 
    en tablets */
  }
  .landing-title {
    font-size: 2.8em; /* Ajustado para tablets */
    line-height: 1.2;
  }
  .landing-subtitle {
    font-size: 1.3em; /* Ajustado para tablets */
    line-height: 1.5;
    max-width: 90%;
  }
  .scroll-to-gallery-button {
    font-size: 1em; /* Tamaño para tablet */
    padding: 0.8em 1.8em; /* Padding para tablet */
  }
}

/* Media query para móviles (iPhone 12-16, ~390px de ancho) */
@media (max-width: 480px) {
  .landing-container {
    padding: 8vh 5vw 5vh 5vw; /* Padding ajustado para móviles */
    justify-content: space-around; /* Distribuye mejor el espacio 
    vertical */
    background-position: center; /* Centrar la imagen de fondo 
    puede ser mejor en móviles */
  }
  .landing-title {
    font-size: 2em; /* Reducido significativamente para móviles */
    line-height: 1.25;
  }
  .landing-subtitle {
    font-size: 1.1em; /* Reducido para móviles */
    line-height: 1.6;
    max-width: 95%; /* Permitir un poco más de ancho */
  }
  .scroll-to-gallery-button {
    font-size: 0.95em; /* Tamaño de fuente para móvil */
    padding: 0.7em 1.5em; /* Padding para móvil */
    width: auto; /* El botón se ajusta al contenido */
    max-width: 80%; /* Evita que sea demasiado ancho si el texto 
    es corto */
  }
}
```
Explicación de los cambios en Landing.css :

- Estilos Base (Desktop):
  - .landing-title : font-size reducido a 4.5em y line-height añadido.
  - .landing-subtitle : font-size reducido a 2em y line-height ajustado.
  - .scroll-to-gallery-button : padding base corregido a 0.8em 2em y font-size a 1.2em . El padding anterior de 1em 9em era demasiado grande.
- Media Query @media (max-width: 768px) (Tablets):
  - Ajustados los font-size para título y subtítulo, y el padding del contenedor.
  - Cambiado justify-content a space-around para una mejor distribución vertical si el contenido no llena la pantalla.
- Nueva/Ajustada Media Query @media (max-width: 480px) (Móviles):
  - Este bloque es crucial para pantallas como las del iPhone.
  - .landing-container : padding ajustado y background-position: center; para la imagen de fondo, lo que suele ser mejor en retratos móviles.
  - .landing-title : font-size reducido a 2em y line-height ajustado para evitar el mal ajuste de palabras que se veía en la captura.
  - .landing-subtitle : font-size reducido y line-height ajustado.
  - .scroll-to-gallery-button : font-size y padding ajustados para móviles, con width: auto y max-width para un buen ajuste.
2. Revisión de otros archivos CSS:

- src/index.css :
  
  - La regla #root { padding: 20px; } y su reducción a 10px en @media (max-width: 480px) es adecuada.
  - La regla h1 { font-size: 3.2em; } es un estilo base grande. Si tienes elementos <h1> que no están dentro de componentes con estilos más específicos (como Landing.jsx ), podrían verse muy grandes en móvil. Considera reducir este tamaño base o asegurarte de que todos los h1 tengan estilos específicos en sus componentes para móviles.
  - Los estilos base para button son responsivos.
- src/components/Gallery.css :
  
  - El uso de grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); y el cambio a 1fr en @media (max-width: 600px) es una excelente práctica para la responsividad de la galería.
  - El tamaño del título de la galería ( .gallery-title ) también se ajusta. Parece estar bien para móviles.
- src/components/Card.css :
  
  - Las tarjetas tienen un ancho fijo de 280px . Esto funciona bien en una sola columna en móviles (considerando un ancho de pantalla de ~390px).
  - El contenido dentro de las tarjetas (imágenes, texto) parece estar configurado para ser responsivo ( width: 100% , object-fit: cover ).
- src/components/Timeline.css :
  
  - Este archivo ya tiene media queries para 768px y 480px que ajustan los tamaños de fuente y espaciados. Los valores parecen adecuados para móviles.
Enfoque "Mobile-First": Mencionaste un enfoque "mobile-first". La estructura actual de tus CSS utiliza principalmente un enfoque "desktop-first" (estilos base para escritorio, max-width media queries para pantallas más pequeñas). Cambiar esto a un verdadero "mobile-first" (estilos base para móvil, min-width media queries para pantallas más grandes) sería un refactor más grande.
Los ajustes que he proporcionado se centran en asegurar que los estilos para las pantallas más pequeñas (definidos en los bloques @media (max-width: 480px) o similares) sean robustos y se vean bien, lo cual cumple el objetivo de que se vea excelente en el celular de tu novia.

Con estos cambios, especialmente en Landing.css , la página debería adaptarse mucho mejor a los tamaños de pantalla de los móviles modernos. Te recomiendo probar estos cambios en el simulador de tu navegador para la resolución del iPhone 16 (aproximadamente 390px o 430px de ancho de viewport) para confirmar.

JavCan

Copy

Delete

genera un README explicando el proyecto entero, principalmente con sus funcionalidades específicas y su estructura, puedes modificar README.md Workspace

Trae

27 context(s) used

Workspace

README.md

README.md 36-36

Gallery.jsx 1-31

Card.css 1-59

Timeline.css 1-67

... More ( 21 +)

¡Claro! He preparado un README.md más completo y descriptivo para tu proyecto, basándome en la información que me diste y la estructura de archivos que he podido observar.

Aquí tienes el contenido actualizado para tu archivo `README.md` :

```
# Regalo One Pager: Galería de Recuerdos para Mi Danna Hermosa ❤️

Este proyecto es una página web especial estilo "One Pager", 
creada con mucho cariño como un regalo para mi novia, Danna. La 
intención es celebrar nuestra relación de una forma única y 
significativa, desbloqueando recuerdos y frases especiales mes a 
mes, culminando en nuestro primer aniversario.

---

## ✨ Descripción del Proyecto

La página presenta un diseño romántico, limpio y sensible, con el 
objetivo de evocar emociones y celebrar los momentos compartidos. 
Está dividida en las siguientes secciones principales:

### 🏠 Página de Bienvenida (Landing Page)

*   Al cargar la web, se muestra una sección inicial con un 
mensaje de bienvenida personalizado y una imagen de fondo 
significativa.
*   Incluye un botón que invita a desplazarse suavemente hacia la 
galería de recuerdos.
*   Utiliza animaciones sutiles con Framer Motion para una 
entrada elegante.

### 🖼️ Galería de Recuerdos

*   El corazón del proyecto. Muestra una colección de **12 
tarjetas**, cada una representando un mes de relación.
*   Inicialmente, **9 tarjetas están desbloqueadas**, mostrando 
una imagen representativa del recuerdo de ese mes.
*   Las **3 tarjetas restantes** (para los meses 10, 11 y 12) 
aparecen **bloqueadas** con un ícono de candado.
*   **Desbloqueo Automático:** Cada mes, en la fecha 
correspondiente a nuestro aniversario mensual, una nueva tarjeta 
se desbloqueará automáticamente.
*   **Interacción:** Al hacer clic en una tarjeta desbloqueada, 
esta realiza una animación de "flip" (vuelta) para revelar una 
frase personalizada o un pensamiento asociado a ese recuerdo.
*   Las tarjetas bloqueadas no son interactivas hasta su fecha de 
desbloqueo.

### ⏳ Línea de Tiempo y Cuenta Regresiva

*   Ubicada al final de la página, esta sección muestra una 
**cuenta regresiva** detallada (días, horas, minutos, segundos) 
hasta nuestro primer aniversario.
*   También incluye una **barra de progreso** visual que indica 
cuánto tiempo hemos compartido juntos y cuánto falta para el año.
*   Se actualiza en tiempo real.

---

## 🛠️ Tecnologías Usadas

*   **React (v19.1.0)**: Biblioteca principal para construir la 
interfaz de usuario.
*   **Vite**: Herramienta de desarrollo frontend moderna y rápida.
*   **Framer Motion**: Para animaciones fluidas y atractivas, 
especialmente en el efecto "flip" de las tarjetas y las 
transiciones de la landing page.
*   **JavaScript (ES6+)**: Para la lógica de la aplicación, 
incluyendo el cálculo de fechas y el desbloqueo de tarjetas 
(utilizando objetos `Date` nativos).
*   **CSS3**: Para los estilos, con un enfoque en diseño 
responsivo ("mobile-first") y efectos visuales como el 
"glassmorphism".
*   **HTML5**: Estructura semántica de la página.

---

## 📁 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
/REGALOS PARA MI DANNA HERMOSA/9meses
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/             # Contiene las imágenes para las tarjetas y landing page
│   │   └── react.svg           # Logo de React (ejemplo de Vite)
│   ├── components/
│   │   ├── Card.jsx            # Componente para cada tarjeta individual (con lógica de flip)
│   │   ├── Card.css
│   │   ├── Gallery.jsx         # Componente que muestra la cuadrícula de tarjetas
│   │   ├── Gallery.css
│   │   ├── Landing.jsx         # Componente para la sección de bienvenida
│   │   ├── Landing.css
│   │   ├── Timeline.jsx        # Componente para la cuenta regresiva y línea de tiempo
│   │   └── Timeline.css
│   ├── utils/
│   │   └── dateUtils.js        # Funciones para calcular fechas y lógica de desbloqueo
│   ├── App.jsx                 # Componente principal que ensambla las secciones
│   ├── App.css
│   ├── data.js                 # Archivo con los datos de cada tarjeta (ID, mes, frase, imagen)
│   ├── index.css               # Estilos globales y reseteos
│   └── main.jsx                # Punto de entrada de la aplicación React
├── .gitignore
├── eslint.config.js            # Configuración de ESLint
├── index.html                  # Plantilla HTML principal
├── package.json                # Metadatos del proyecto y dependencias
├── package-lock.json
└── README.md                   # Este archivo
---

## 📌 Lógica de Desbloqueo de Tarjetas

*   Se define una **fecha de inicio de la relación** en `src/data.js` (variable `relationshipStartDate`).
*   Cada tarjeta en `src/data.js` tiene una propiedad `monthToUnlock` que indica cuántos meses después de `relationshipStartDate` debe desbloquearse.
*   Las funciones en `src/utils/dateUtils.js` calculan la fecha exacta de desbloqueo para cada tarjeta y comparan con la fecha actual para determinar si una tarjeta está `unlocked` o `locked`.
*   La interfaz de usuario se actualiza dinámicamente para reflejar el estado de cada tarjeta.

---

## 🧠 Personalización

Este proyecto está diseñado para ser fácilmente personalizable:

*   **Fotos y Frases:** Modifica las imágenes (colocándolas en `src/assets/images/`) y las frases directamente en el archivo `src/data.js`. Asegúrate de que las rutas de las imágenes en `data.js` coincidan con los nombres de archivo.
*   **Fecha de Inicio:** Cambia la `relationshipStartDate` en `src/data.js` para que coincida con tu fecha especial.
*   **Estilos y Colores:** Ajusta los archivos CSS en `src/components/` y `src/index.css` para cambiar la apariencia, colores y fuentes según tus gustos.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1.  **Clona el repositorio** (si aún no lo has hecho):
    ```bash
    git clone https://github.com/tuusuario/regalo-galeria.git # Reemplaza con tu URL de repo
    cd regalo-galeria
    ```

2.  **Instala las dependencias** del proyecto:
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Esto iniciará la aplicación en modo de desarrollo, generalmente en `http://localhost:5173`. La URL exacta se mostrará en la terminal.

4.  Abre la URL proporcionada en tu navegador para ver la página.

---

## 🌐 Publicación / Despliegue

Puedes desplegar fácilmente este proyecto en plataformas de hosting estático como:

*   [Vercel](https://vercel.com/)
*   [Netlify](https://www.netlify.com/)
*   [GitHub Pages](https://pages.github.com/) (puede requerir configuración adicional en `vite.config.js` para la ruta base si se despliega en un subdirectorio).

Generalmente, el proceso implica:
1.  Construir el proyecto para producción:
    ```bash
    npm run build
    ```
2.  Subir el contenido de la carpeta `dist` generada a la plataforma de hosting elegida.

---

## ❤️ Créditos

Creado con muchísimo amor como un regalo personal para Danna.

Desarrollado por: Javier Canella Ramos.

---