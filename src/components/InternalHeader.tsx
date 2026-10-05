





// PATRÓN ESTÁNDAR: Importaciones de Material UI
import { Box, Tabs, Tab, useTheme, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';

// PATRÓN ESTÁNDAR: Importación de useState
import { useState } from 'react';

// PATRÓN ESTÁNDAR: Importaciones de React Router
// Link SIEMPRE se usa para navegación interna
// useLocation SIEMPRE se usa para obtener la URL actual
// useNavigate SIEMPRE se usa para navegar programáticamente
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Importación de iconos desde material icons previamente instalados
import { Menu as MenuIcon } from '@mui/icons-material'; // as para cambiarle el nombre y el nombre principal no choque con otro nombre

// Importación de datos aqui se importan los datos del MENU
import { reactTopics } from '../data/reactTopics';

//ts PATRÓN ESTÁNDAR: Definición de props que se pasaran al componenete que renderizara el menu
interface InternalHeaderProps {
  currentTopic?: string; // ID del tema actual (opcional)
}

// PATRÓN ESTÁNDAR: Componente funcional con props funcion o componenete genberal de estes archivo
export default function InternalHeader({ currentTopic }: InternalHeaderProps) {
  // PATRÓN ESTÁNDAR: useTheme para acceder al tema de material UI
  const theme = useTheme();

  // PATRÓN ESTÁNDAR: useMediaQuery para responsive material UI
  // down('sm') significa "pantallas más pequeñas que small"
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // PATRÓN ESTÁNDAR: useState para controlar el menú móvil
  // (estado) anchorEl guarda la referencia al elemento del menú 
  // (1) se declara con (const) porque nunca se podra cambiar el valor de la variabe de forma directa la puedo declarar con let pero esto dejara 
  // (1) la posibilidad de cambiar el valor de la variable de forma directa y eso no es lo que queremos en este caso
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // PATRÓN ESTÁNDAR: useLocation para saber la URL actual
  const location = useLocation();

  // PATRÓN ESTÁNDAR: useNavigate para navegar programáticamente
  const navigate = useNavigate();

  // Buscar el tema actual en los datos
  const currentTopicData = reactTopics.find(t => t.id === currentTopic);
 // eslint-disable-next-line no-debugger
  debugger
  // Handler para abrir el menú móvil
  const handleMenuOpen = (evt: React.MouseEvent<HTMLElement>) => {
    // evt.currentTarget se usa para anclar el menú al botón
    const { currentTarget } = evt;
    setAnchorEl(currentTarget);
  };

  // Handler para cerrar el menú móvil
  const handleMenuClose = () => {
    setAnchorEl(null); // Limpia la referencia, cerrando el menú
  };

  // Handler para cambiar de tab en desktop
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    // event se requiere por la API de Tabs aunque no lo usemos
    void event;
    navigate(newValue); // Navega a la nueva ruta
  };

  // Si no hay tema o no tiene subtemas, no renderizar nada
  if (!currentTopicData || !currentTopicData.subtopics) {
    return null;
  }

  // Contenido de tabs para desktop
  const tabsContent = (
    <Tabs
      value={location.pathname} // La ruta actual determina el tab activo
      onChange={handleTabChange} // Se ejecuta al cambiar de tab
      variant="scrollable" // Permite scroll si hay muchos tabs
      scrollButtons="auto" // Muestra botones de scroll automáticamente
      sx={{ borderBottom: 1, borderColor: 'divider' }} // Línea inferior
    >
      {/* PATRÓN ESTÁNDAR: Mapeo para renderizar tabs */}
      {currentTopicData.subtopics.map((subtopic) => (
        <Tab
          key={subtopic.id}
          label={subtopic.title}
          value={subtopic.path}
          to={subtopic.path}
          component={Link} // Convierte el tab en un link
        />
      ))}
    </Tabs>
  );

  // Contenido de menú para móvil
  const mobileMenuContent = (
    <>
      {/* Botón para abrir el menú */}
      <IconButton
        color="inherit"
        onClick={handleMenuOpen}
        sx={{ ml: 'auto' }} // Margen automático a la izquierda (empuja a la derecha)
      >
        <MenuIcon />
      </IconButton>

      {/* Menú desplegable */}
      <Menu
        anchorEl={anchorEl} // Elemento al que está anclado
        open={Boolean(anchorEl)} // Abierto si anchorEl no es null
        onClose={handleMenuClose} // Se cierra al llamar esta función
      >
        {/* PATRÓN ESTÁNDAR: Mapeo para renderizar items del menú */}
        {currentTopicData.subtopics.map((subtopic) => (
          <MenuItem
            key={subtopic.id}
            selected={location.pathname === subtopic.path} // Resalta si es la ruta actual
            onClick={() => {
              navigate(subtopic.path); // Navega a la ruta
              handleMenuClose(); // Cierra el menú
            }}
          >
            {subtopic.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  // RETORNO del componente
  return (
    <Box sx={{ bgcolor: 'background.paper', mb: 2 }}>
      {/* Header con información del tema */}
      <Box sx={{ px: 2, py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Icono y título del tema */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ fontSize: '1.5rem' }}>{currentTopicData.icon}</span>
            <Box>
              <Box sx={{ typography: 'h6', fontSize: '1rem' }}>
                {currentTopicData.title}
              </Box>
              <Box sx={{ typography: 'caption', color: 'text.secondary' }}>
                {currentTopicData.description}
              </Box>
            </Box>
          </Box>

          {/* En móvil, mostrar el botón de menú */}
          {isMobile && mobileMenuContent}
        </Box>
      </Box>

      {/* En desktop, mostrar los tabs */}
      {!isMobile && tabsContent}
    </Box>
  );
}
