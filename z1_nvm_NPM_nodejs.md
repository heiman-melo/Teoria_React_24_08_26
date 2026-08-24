# Guía Completa de NVM en Windows: Instalación, Uso y Buenas Prácticas

> **NVM (Node Version Manager)** es la herramienta definitiva para desarrolladores de JavaScript y React. Te permite instalar, gestionar y alternar entre múltiples versiones de Node.js y npm de forma sencilla en Windows, evitando conflictos cuando un proyecto requiere una versión específica y otro una más moderna.

---

## 1. ¿Qué es NVM y por qué usarlo?
NVM aísla los entornos de Node.js en tu computadora. Esto significa que **no necesitas tener Node instalado previamente** de forma global; NVM se encarga de descargar y administrar las versiones de manera independiente. Si un proyecto antiguo requiere Node 18 y tu proyecto actual usa Node 20, podrás cambiar de versión en la terminal de Windows con un solo comando.

---

## 2. Instalación de NVM en Windows
En Windows se utiliza la versión oficial mantenida por la comunidad llamada **nvm-windows**. Sigue estos pasos para instalarlo:

1. Ve al repositorio oficial de releases en GitHub: [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases).
2. Busca la sección de descargas de la última versión y descarga el archivo comprimido llamado **`nvm-setup.zip`**.
3. Descomprímelo y ejecuta el archivo asistente **`nvm-setup.exe`**. Sigue los pasos indicados en la pantalla para completar la instalación.

> **Nota importante:** Una vez instalado, abre una nueva terminal (PowerShell o Símbolo del sistema) para asegurarte de que los comandos de NVM estén disponibles en tus variables de entorno.

---

## Como usar nvm ---------------------------------------------------------------------------------------------------------------------------------

## 1. Este comando le dice a NVM: "Busca la versión estable más reciente de Node.js y descárgala esto ya viene con npm
nvm install lts // si pasa tiempo y quiero crear un nuevo proyeto para traerme la ultima version de nodejs uso este comando
nvm use lts   use esa version instalada

## 2. otra version para un proyecto especifico
nvm install 18.16.0
nvm use 18.16.0

## 3. Verificar que NVM está instalado correctamente
nvm --version  // 1.2.2 esta es la version del proyecto nvm que se instalo desde la web versiones mas nuevas me pueden ayudar a instalar nuevas funcionalidades esto desde la web

## 4. De forma global para toda la pc
nvm use 18.16.0  // al parecer las dos funcionan igual porque no me tomo versiones diferentes en proyetos diferentes
nvm alias default 18.16.0   // de esta forma le digo a nvm que version de nodejs quiero usar en el proyecto actual para correrlo y que no falle
nvm list // me indica que versiones de (nodejs) tengo en el proyecto

## 5. Comprobar la versión de Node activa actualmente
npm --version o npm -v

## 6. saber que versiones hay disponibles para descargar en internet
nvm list available // me muestra todas las versiones de nodejs disponibles

## 7. saber la version de nodejs
node --version  o node -v

## 8. NPM + nodejs al tener nvm  
NPM se instala de una vez junto con la instalacion de nodejs desde nvm esata es una herramienta que me ayuda a instalar las librerias quye necesita un proyecto
nodejs queda instalado dentro de la pc para ser ejecutado con un servidor local y todas las librerias y codigo jsvascript de un proyecto funcione correctamente



