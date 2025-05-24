Aplicación web construida con React que permite la autenticación de usuarios y la gestión de torneos. Incluye navegación protegida, componentes reutilizables y diseño modular.

## 🧰 Tecnologías

- **React 19**: Librería para construir interfaces de usuario.
- **React Router DOM**: Manejo de rutas y navegación.
- **SASS**: Preprocesador CSS.
- **Axios**: Cliente HTTP para interactuar con APIs.
- **FontAwesome**: Íconos escalables para la interfaz.
- **Testing Library**: Pruebas unitarias y de integración.

## 🚀 Funcionalidades

- Autenticación (Inicio de sesión y registro).
- Rutas protegidas según estado de autenticación.
- Manejo de errores con contexto global.
- Componentes reutilizables: Navbar, Footer, Modal, etc.
- Páginas principales:
  - `/` → Página principal.
  - `/signin` → Inicio de sesión.
  - `/signup` → Registro.
  - `/torneo` → Gestión de torneo (ruta protegida).

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/ftorneo.git
   cd ftorneo

2. Instala las dependencias:
    bash
    Mostrar siempre los detalles
    npm install

3. Inicia el servidor de desarrollo:
    bash
    Mostrar siempre los detalles
    npm start

📁 Estructura del Proyecto
css
Mostrar siempre los detalles

src/
├── App.js
├── index.js
├── Pages/
│   ├── SignIn.jsx
│   ├── SignUp.jsx
│   ├── Index.jsx
│   └── Torneo.jsx
├── Components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   ├── Models.jsx
│   └── ErrorContext.jsx
├── App.css
🔐 Rutas protegidas
Se utilizan componentes de orden superior para proteger rutas que requieren autenticación. Se verifica la existencia de un accessToken en localStorage.
