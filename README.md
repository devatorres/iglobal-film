# iGlobal Film

![Tag](https://img.shields.io/badge/CSS3-f79400?style=flat-square)
![Tag](https://img.shields.io/badge/Context%20·%20Hooks-1b1b1b?style=flat-square)
![Tag](https://img.shields.io/badge/Helmet-fafafa?style=flat-square)
![Tag](https://img.shields.io/badge/i18next-26a69a?style=flat-square)
![Tag](https://img.shields.io/badge/MUI%205-007bf7?style=flat-square)
![Tag](https://img.shields.io/badge/npm%208.1.2-c53635?style=flat-square)
![Tag](https://img.shields.io/badge/Prettier-c693c6?style=flat-square)
![Tag](https://img.shields.io/badge/React%2018-61d9fb?style=flat-square)
![Tag](https://img.shields.io/badge/Rellax-00e9c3?style=flat-square)
![Tag](https://img.shields.io/badge/TMDB-2cbbd1?style=flat-square)
![Tag](https://img.shields.io/badge/TypeScript%204-2f74c0?style=flat-square)
![Tag](https://img.shields.io/badge/WebApp-fbbf47?style=flat-square)

## 📋 Descripción

La prueba consiste en realizar una mini-webapp con un listado de películas con su buscador y formulario de puntaje.

## 🔨 Cómo arrancarlo

Hay una posibilidad de ver una preview desplegada en _Netlify_ [https://creative-smakager-190ad7.netlify.app/](https://creative-smakager-190ad7.netlify.app/). Pero como programador seguro que llama más la atención usar un poco de npm 😉. Es tan sencillo como clonar el proyecto `git clone <url>`, instalar las dependencias `npm install` y ejecutarlo `npm start`.

## 📚 El Por qué de algunas cosas

- Diseñé un logo sencillito porque me hacía ilusión que el proyecto quedara más vistoso.
- Yo uso **Prettier** como _Code formatter_ y me gusta ignorar el formateo de aquel fichero que contiene los _Route_ de **react-router-dom** para poder disponerlas en una sola línea y que se ve más ordenado.
- He incluido mi propio controlador (_Context_ + _Hook_) sobre el selector de tema, en donde por defecto se pone el tema oscuro (y no aparece el localStorage), y si lo cambias a otro, se guarda en el localStorage para saber cual es la preferencia del usuario.
- Lo mismo pasa con el control del idioma pero esta vez mezclo código propietario con la librería **i18next** y **react-i18next**. Las llamadas a la API se adaptan al idioma seleccionado y trae la información correctamente.
- Añadí servicios sencillos como por ejemplo el formateo de las fechas para visualizarlo mejor.
- Mejoré el SEO con el uso de la librería **react-helmet** en donde puedo controlar los _Title_ dependiendo de en cual página entre.
- Añadí la librería **just-debounce-it** para controlar el número de peticiones. El buscador de películas contiene un _Infinite Loading_ y cuando llegas abajo puede pasar que alguien haga un gesto extraño con el scroll y solicitar varias búsquedas a más películas. Por ello si me llegan 20 peticiones, la librería lo ignora y solo manda una.
- Gracias a la librería **Rellax** puedo hacer un effecto _Parallax_ al logotipo central muy vistoso.
- Con **MUI**, las películas contienen una _"LinearProgress"_ modificada para ser usada como puntuación. Con la variante **determinate** puedes añadir un valor en concreto, y el color se adapta a la puntuación porque puse un array que contiene los className correspondientes dependiendo del rango de valores.

## 💻 Cómo se ha desarrollado

Si se mira las carpetas del proyecto puede parecer que es un proyecto grande, y la razón es que está desarrollado con mucho **code splitting** (reutilizando componentes y ordenando cada parte en su carpeta), con un **well code** donde los _Layout_ limitan su código al control de _Handles_ y renderizado de elementos; ya que todo el resto lo controlan los _Contexts_, _Hooks_, servicios... Los estilos generales se encuentran en una carpeta styles concreta y el resto se encuentra en cada componente.

Los controladores más sencillos son con `useState` y los más complejos son con `useReducer`. El _Infinite Loading_ usa _Observables_ para saber cuando llegas al final de la página. Si intentas entras en `/mylist` o votar una película y no has iniciado sesión te saldrá un **Dialog** avisandote de que debes iniciar sesión para poder interactuar.

[![modal.png](https://i.postimg.cc/cLXRN9fZ/modal.png)](https://postimg.cc/6842rhH1)

## Espero que os guste, lo he hecho con mucha ilusión y he disfrutado del progreso 😊
