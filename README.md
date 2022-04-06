# Curso_React
 Curso de React realizado en Udemy

## Secciones o apartados realizados

-01. Introducción al curso

-02.Introducción a React y conceptos generales

-03. Introducción a JavaScript Moderno. (Ya visto en https://github.com/Adrian1998-java/Curso_JavaScript)

-04. Primeros pasos en React 

-05. Pruebas unitarias y de integración - Probando las secciones anteriores

-06. GifExpertApp - Aplicación 

-07. Generando el build de producción y despliegues en Github Pages

-08. Testing - Probando la aplicación de GifExpert 

-09. Profundizando Hooks - Generales (En Proceso... / Video 119)

## Recomendaciones:

- "npm start" dentro de la carpeta para iniciar la aplicación.
- "npm run test" para iniciar los tests
- "npx create-react-app {nombre-de-app}" para crear un nuevo proyecto local donde poder hacer pruebas a tiempo real y producción.
- "npm run build"en la carpeta de tu proyecto para crear un build de tu proyecto
- Después de instalar el paquete NPM con el comando "sudo npm install --global http-server", teclear el comado "http-server -o" en la carpeta build del proyecto.

### Captura(s):

![](https://github.com/Adrian1998-java/Curso_React/blob/3700138eeb66e9eae337d4afbb06aa105282e829/IMAGENES_TYPORA/001.png)

## Enlaces interesantes:

### Animate.css : 

https://animate.style

### NPM Package : 

https://www.npmjs.com/package/http-server

### Enzyme : 

https://enzymejs.github.io/enzyme/

### Enzyme to Json:

https://www.npmjs.com/package/enzyme-to-json

### React-Hooks-Testing-Library:

https://react-hooks-testing-library.com

## Dependencias

### Enzyme : ( https://github.com/wojtekmaj/enzyme-adapter-react-17 )

import Enzyme from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';



Enzyme.configure({ adapter: new Adapter() });

### Enzyme to Json : ( https://www.npmjs.com/package/enzyme-to-json )

import {createSerializer} from 'enzyme-to-json';



expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));



### React-Hooks-Testing-Library: ( https://react-hooks-testing-library.com/installation )

