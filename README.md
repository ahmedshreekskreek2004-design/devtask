# DevTasks

## Descripción

DevTasks es una aplicación web para gestionar tareas.

La aplicación permite crear y eliminar tareas, marcarlas como completadas, filtrar la lista y consultar estadísticas. Las tareas completadas se muestran tachadas y pueden eliminarse en conjunto. Los datos se guardan en el almacenamiento local del navegador.

El proyecto se ha desarrollado aplicando un flujo de trabajo DevOps con Git, GitHub, GitHub Actions, tests automatizados, Pull Requests, GitHub Pages y Dependabot.

## Instalación

Para instalar las dependencias del proyecto, es necesario tener Node.js instalado.

Desde la carpeta raíz del proyecto, ejecutar:

```bash
npm install
```

## Tests

Los tests automatizados se encuentran en la carpeta `tests/`.

Para ejecutar los tests localmente:

```bash
npm test
```

Los tests comprueban el funcionamiento de las principales funciones de la aplicación, incluyendo:

* `isValidTask`
* `createTask`
* `filterTasks`
* `clearCompletedTasks`
* `getTaskStats`

## GitHub Actions

El proyecto utiliza GitHub Actions para automatizar la integración continua.

El workflow de CI se ejecuta cuando se crea una Pull Request hacia la rama `main`.

El workflow realiza las siguientes tareas:

1. Obtiene el código del repositorio.
2. Configura Node.js.
3. Instala las dependencias.
4. Ejecuta los tests automáticamente.

También existe un workflow de despliegue que permite publicar automáticamente la aplicación en GitHub Pages después de realizar un merge en `main`.

## Pull Requests

El desarrollo del proyecto se realiza mediante ramas de funcionalidad y Pull Requests.

El flujo de trabajo establecido es:

```text
Rama feature
     ↓
Commit
     ↓
Push
     ↓
Pull Request
     ↓
GitHub Actions
     ↓
Tests
     ↓
PASS
     ↓
Merge
     ↓
main
```

La rama `main` está protegida y requiere una Pull Request y que los controles de CI sean correctos antes de realizar el merge.

## Deploy

La aplicación se publica mediante GitHub Pages.

URL de la aplicación:

**[Añadir aquí la URL de GitHub Pages]**

Por ejemplo:

```text
https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/
```

## Dependencias

Las dependencias del proyecto se gestionan mediante npm.

Para instalarlas:

```bash
npm install
```

Las actualizaciones de las dependencias se gestionan mediante Dependabot.

Dependabot comprueba periódicamente las actualizaciones de las dependencias del proyecto y de las GitHub Actions utilizadas cuando corresponde.

## Arquitectura

El proyecto separa la lógica de negocio de la manipulación del DOM.

### `js/app.js`

El archivo `js/app.js` gestiona la interfaz, los eventos, la manipulación del DOM y la persistencia de tareas en `localStorage`. También aplica la clase `completed` a las tareas marcadas, cuyo texto aparece tachado mediante CSS.

### `funcion.js`

El archivo `js/funcion.js` contiene la lógica de negocio independiente del navegador.

Incluye funciones como:

* `createTask`
* `isValidTask`
* `filterTasks`
* `clearCompletedTasks`
* `getTaskStats`

Estas funciones pueden ejecutarse y probarse independientemente de la interfaz gráfica.

### `tests/`

La carpeta `tests/` contiene los tests unitarios de las funciones de `js/funcion.js`.

Los tests se ejecutan con:

```bash
npm test
```

## Estructura del proyecto

```text
DevTasks/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── copilot-instructions.md
│   └── dependabot.yml
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── funcion.js
├── tests/
│   └── app.test.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```
