# Instrucciones de Desarrollo para DevTasks

## 1. Arquitectura de Módulos y Separación de Responsabilidades

- Toda la lógica de negocio (cálculos, validaciones y filtrados) debe estar exclusivamente en `js/funciones.js`, utilizando módulos ES6 (`export`).
- Las funciones de `funciones.js` deben ser puras y no deben utilizar `document`, `window` ni `localStorage`.
- La manipulación del DOM, los eventos de la interfaz y la persistencia de datos corresponden exclusivamente a `js/app.js`.
- Cuando una funcionalidad necesite interactuar con la interfaz, `app.js` debe importar y llamar a la función correspondiente de `funciones.js`, en lugar de duplicar la lógica de negocio.

## 2. Pruebas Unitarias con Vitest

- Para cualquier función nueva o modificación realizada en `funciones.js`, se deben crear pruebas unitarias en `tests/app.test.js` utilizando Vitest (`describe`, `it`, `expect`).
- Las pruebas deben importar la función directamente desde `funciones.js` y comprobar su comportamiento sin depender del DOM.
- Se deben comprobar los casos habituales y los casos límite relevantes, y ejecutar `npm test` para verificar que todas las pruebas pasan correctamente.

## 3. Estilo y Calidad del Código

- Utiliza JavaScript moderno (ES6 o superior), funciones claras, nombres de variables descriptivos y evita las variables globales innecesarias.
- No dupliques la lógica de negocio en `app.js` ni en los archivos de pruebas.
- Revisa que los cambios respeten la arquitectura existente antes de darlos por finalizados.