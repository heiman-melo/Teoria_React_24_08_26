// PATRÓN ESTÁNDAR: Importaciones de React Router
// Routes, Route, Navigate SIEMPRE se importan desde 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom';

// Importación de las páginas
import HomePage from '../pages/HomePage';
import TopicPage from '../pages/TopicPage';

// PATRÓN ESTÁNDAR: Componente de rutas
// Este componente SIEMPRE contiene la configuración de rutas de la aplicación
export default function AppRoutes() {
  return (
    // Routes: Contenedor que define las rutas de la aplicación
    <Routes>
      {/* PATRÓN ESTÁNDAR: Definición de ruta */}
      {/* path="/" es la ruta raíz (inicio) */}
      {/* element={<HomePage />} es el componente que se renderiza */}
      <Route path="/" element={<HomePage />} />

      {/* PATRÓN ESTÁNDAR: Ruta con parámetros dinámicos */}
      {/* :topicId y :subtopicId son parámetros que varían */}
      {/* Ejemplo: /hooks/usestate, /fundamentos/componentes */}
      <Route path="/:topicId/:subtopicId" element={<TopicPage />} />

      {/* PATRÓN ESTÁNDAR: Ruta comodín (catch-all) */}
      {/* path="*" coincide con cualquier ruta que no coincidió con las anteriores */}
      {/* Navigate redirige a la ruta especificada */}
      {/* replace reemplaza el historial en lugar de agregar una entrada */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
