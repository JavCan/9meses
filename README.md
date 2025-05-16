# Regalo One Pager: Galería de Recuerdos

Este proyecto es un regalo especial diseñado como una **página web estilo One Pager** para mi novia. La intención es celebrar nuestra relación de una forma única y significativa a lo largo del tiempo, desbloqueando recuerdos y frases mes a mes hasta cumplir un año juntos.

---

## ✨ Descripción del Proyecto

La página tiene un diseño romántico, limpio y sensible, dividido en las siguientes secciones principales:

### 🏠 Landing Page

* Al abrir la web, aparece una pequeña **sección inicial de bienvenida** con un mensaje lindo o una animación suave.
* Esta parte sirve como introducción antes de descubrir la galería.

### 🖼️ Galería de Recuerdos

* Contiene **12 tarjetas**, cada una con una foto distinta.
* Solo **9 están desbloqueadas inicialmente**, mientras que las otras 3 aparecerán como **bloqueadas**.
* **Cada mes** (a partir del inicio de la relación), se **desbloqueará una nueva tarjeta automáticamente**.
* Al hacer **click en una tarjeta**, esta se **da vuelta (flip)** y revela una pequeña **frase personalizada** relacionada con el recuerdo.

### ⏳ Línea de Tiempo

* Al final de la página se muestra una **línea o contador de tiempo** que indica cuánto falta para cumplir un año juntos.
* Se actualiza en tiempo real, día a día.

---

## 🛠️ Tecnologías Usadas

* [React](https://reactjs.org/) - Framework principal.
* [Framer Motion](https://www.framer.com/motion/) - Para animaciones suaves al hacer flip en las tarjetas.
* [Day.js](https://day.js.org/) o [date-fns](https://date-fns.org/) - Para manejo de fechas y calcular el tiempo restante.

---

## 📁 Estructura del Proyecto

```
📦src
 ┣ 📂assets/           # Imágenes y archivos multimedia
 ┣ 📂components/       # Tarjetas, galería, contador, landing
 ┣ 📂utils/            # Funciones para calcular fechas, desbloqueos
 ┣ 📜App.jsx           # Estructura principal
 ┣ 📜main.jsx          # Punto de entrada
 ┗ 📜data.js           # Información de cada tarjeta (foto + frase + fecha de desbloqueo)
```

---

## 📌 Lógica de Desbloqueo

* Define una **fecha de aniversario inicial** (`startDate`).
* Cada tarjeta contiene una **fecha de desbloqueo mensual** (ej: 1 mes, 2 meses, ..., 12 meses desde `startDate`).
* El sistema comprueba la **fecha actual** y muestra las tarjetas desbloqueadas en función de ello.

---

## 🧠 Personalización

Puedes modificar fácilmente:

* Las **fotos y frases** en `data.js`.
* La **fecha de inicio de la relación**.
* Los **estilos y colores** para que coincidan con sus gustos personales.

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona este repositorio:

    `git clone https://github.com/tuusuario/regalo-galeria.git`
    `cd regalo-galeria`

2. Instala las dependencias:

    `npm install`

3. Ejecuta el servidor de desarrollo:

    `npm run dev`

4. Abre `http://localhost:5173` (o el puerto indicado) en tu navegador.

---

## 🌐 Publicación

Puedes desplegar fácilmente este proyecto en:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* [GitHub Pages](https://pages.github.com/) (con configuración adicional)

---

## ❤️ Créditos

Creado con mucho amor como un regalo personal.
Desarrollado por Javier Canella Ramos.

---
