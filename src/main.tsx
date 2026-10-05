// (1) este es el archivo js principal que se llama desde el index.html
// (2) como es un archivo type = module ya podemos hacer uso de los modulos de js y ts, por lo que podemos importar y exportar modulos de js y ts

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import './index.css'
import App from './App.tsx'

// PATRÓN ESTÁNDAR: Creación del tema de Material UI
// Esto SIEMPRE se hace así cuando usas Material UI
// createTheme() crea un objeto de configuración para todo el sistema de diseño
const theme = createTheme({
  palette: {
    mode: 'light', // 'light' o 'dark' - define el modo de color global
  },
})

// PATRÓN ESTÁNDAR: Renderizado de React
// createRoot(document.getElementById('root')!) SIEMPRE se usa así
// El signo ! es TypeScript para decir "confío que este elemento existe"
createRoot(document.getElementById('root')!).render(
  //  (3)esto se usa para verificar errores en la aplicacion y que se renderize correctamente
  //  (3)en desarrollo por eso vemos doble renderizado de los componentes por ende doble pegue a las apis 
  //  (3) en produccion este efecto se elimina y no se ve doble renderizado de los componentes ni doble pegue a las apis
  <StrictMode>
    {/* ThemeProvider: PROVEE el tema a toda la aplicación
        Esto es OBLIGATORIO cuando usas hooks como useTheme, useMediaQuery, etc.
        Sin esto, los componentes que usan estos hooks fallarán */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline: Normaliza los estilos CSS del navegador
          Esto es RECOMENDADO siempre que uses Material UI
          Elimina diferencias entre navegadores y aplica estilos base */}
      <CssBaseline />
      <App /> {/*aqui ya llamamos al primer componenete de react*/}
    </ThemeProvider>
  </StrictMode>,
)
