// aqui sera el primer componenete de react que se renderizara en la aplicacion
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Navigation />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - 280px)` },
            mt: '64px',
          }}
        >
          <AppRoutes />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App


// ejemplo de un router sencillo dentro del componente principal de react
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Box, Button, Typography } from '@mui/material';

// // 1. Vistas simuladas
// function Home() {
//   return <Typography variant="h4">Estás en la vista de Inicio (Home)</Typography>;
// }

// function Main() {
//   return <Typography variant="h4">Estás en la vista Principal (Main)</Typography>;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Box sx={{ p: 4 }}>
        
//         {/* BARRA DE NAVEGACIÓN (Principal) (Simulada aquí directamente con botones y Links) */}
//         <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
//           {/* Usamos el componente Link de react-router-dom integrado en un botón de MUI */}
//           <Button component={Link} to="/" variant="contained">
//             Ir a Home
//           </Button>
//           <Button component={Link} to="/main" variant="contained" color="secondary">
//             Ir a Main
//           </Button>
//         </Box>

//         {/* CONTENEDOR DE RUTAS (rutas de la navegacion principal) (Lo que antes tenías en AppRoutes) */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/main" element={<Main />} />
//         </Routes>

//       </Box>
//     </BrowserRouter>
//   );
// }
