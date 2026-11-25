# Arka Digital

Landing page de Arka Digital migrada a Vue 3 con Vite.

## Requisitos

- Node.js `^22.18.0` o `>=24.12.0`
- npm

## Desarrollo

```sh
npm install
npm run dev
```

Para generar y previsualizar la versión de producción:

```sh
npm run build
npm run preview
```

## Estructura

- `src/App.vue`: composición general y animaciones de entrada.
- `src/components/`: encabezado, pie, página Conócenos y secciones independientes de la página de inicio (hero, foco, servicios, proyectos, metodología, equipo y contacto). `HomePage.vue` las compone.
- `src/stores/landing.js`: idioma, navegación, filtro de proyectos y estado del formulario con Pinia.
- `src/stores/translations.js`: textos en español e inglés.
- `src/composables/useLandingNavigation.js`: navegación entre secciones y páginas.

Los botones y campos de contacto usan componentes de PrimeVue. El formulario mantiene el comportamiento de demostración de la landing original; para enviar mensajes reales hay que conectarlo a un servicio o API.
