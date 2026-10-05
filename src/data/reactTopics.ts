// PATRÓN ESTÁNDAR: Definición de interfaces TypeScript
// Las interfaces SIEMPRE se definen con 'interface' cuando se modelan objetos
// El '?' indica que la propiedad es OPCIONAL (puede ser undefined)
export interface Topic {
  id: string;           // Identificador único del tema
  title: string;        // Título visible del tema
  icon: string;         // Emoji o icono del tema
  description: string;  // Descripción breve del tema
  subtopics?: Subtopic[]; // Array de subtemas (opcional)
}

// PATRÓN ESTÁNDAR: Otra interfaz TypeScript
// Esta interfaz SIEMPRE se usa cuando se define la estructura de subtemas
export interface Subtopic {
  id: string;    // Identificador único del subtema
  title: string; // Título visible del subtema
  path: string;  // Ruta URL para React Router
}

// PATRÓN ESTÁNDAR: Exportación de constante (datos)
// 'export const' SIEMPRE se usa para exportar datos que no cambian
// 'reactTopics' es el nombre de la constante que contiene todos los temas
export const reactTopics: Topic[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos',
    icon: '🏗️',
    description: 'Conceptos básicos de React',
    subtopics: [
      { id: 'componentes', title: 'Componentes', path: '/fundamentos/componentes' },
      { id: 'props', title: 'Props', path: '/fundamentos/props' },
      { id: 'state', title: 'Estado (State)', path: '/fundamentos/state' },
      { id: 'jsx', title: 'JSX', path: '/fundamentos/jsx' },
    ]
  },
  {
    id: 'hooks',
    title: 'Hooks',
    icon: '🪝',
    description: 'Hooks de React',
    subtopics: [
      { id: 'usestate', title: 'useState', path: '/hooks/usestate' },
      { id: 'useeffect', title: 'useEffect', path: '/hooks/useeffect' },
      { id: 'usecontext', title: 'useContext', path: '/hooks/usecontext' },
      { id: 'usereducer', title: 'useReducer', path: '/hooks/usereducer' },
      { id: 'usememo', title: 'useMemo', path: '/hooks/usememo' },
      { id: 'usecallback', title: 'useCallback', path: '/hooks/usecallback' },
      { id: 'useref', title: 'useRef', path: '/hooks/useref' },
    ]
  },
  {
    id: 'ciclos-vida',
    title: 'Ciclos de Vida',
    icon: '🔄',
    description: 'Ciclos de vida de componentes',
    subtopics: [
      { id: 'mounting', title: 'Mounting', path: '/ciclos-vida/mounting' },
      { id: 'updating', title: 'Updating', path: '/ciclos-vida/updating' },
      { id: 'unmounting', title: 'Unmounting', path: '/ciclos-vida/unmounting' },
    ]
  },
  {
    id: 'estado-avanzado',
    title: 'Estado Avanzado',
    icon: '⚡',
    description: 'Gestión avanzada de estado',
    subtopics: [
      { id: 'context', title: 'Context API', path: '/estado-avanzado/context' },
      { id: 'reducers', title: 'Reducers', path: '/estado-avanzado/reducers' },
      { id: 'zustand', title: 'Zustand', path: '/estado-avanzado/zustand' },
    ]
  },
  {
    id: 'forms',
    title: 'Formularios',
    icon: '📝',
    description: 'Manejo de formularios',
    subtopics: [
      { id: 'controlled', title: 'Controlled Components', path: '/forms/controlled' },
      { id: 'uncontrolled', title: 'Uncontrolled Components', path: '/forms/uncontrolled' },
      { id: 'validation', title: 'Validación', path: '/forms/validation' },
    ]
  },
  {
    id: 'rendimiento',
    title: 'Rendimiento',
    icon: '🚀',
    description: 'Optimización de rendimiento',
    subtopics: [
      { id: 'memo', title: 'React.memo', path: '/rendimiento/memo' },
      { id: 'lazy', title: 'Code Splitting', path: '/rendimiento/lazy' },
      { id: 'virtualization', title: 'Virtualización', path: '/rendimiento/virtualization' },
    ]
  },
  {
    id: 'material-ui',
    title: 'Material UI',
    icon: '🎨',
    description: 'Componentes Material UI',
    subtopics: [
      { id: 'basicos', title: 'Componentes Básicos', path: '/material-ui/basicos' },
      { id: 'layout', title: 'Layout Components', path: '/material-ui/layout' },
      { id: 'inputs', title: 'Inputs & Forms', path: '/material-ui/inputs' },
      { id: 'theme', title: 'Theming', path: '/material-ui/theme' },
    ]
  },
  {
    id: 'configuracion',
    title: 'Configuración',
    icon: '⚙️',
    description: 'Configuración del entorno',
    subtopics: [
      { id: 'nvm', title: 'NVM & Node.js', path: '/configuracion/nvm' },
      { id: 'git', title: 'Git & GitHub', path: '/configuracion/git' },
      { id: 'vercel', title: 'Vercel', path: '/configuracion/vercel' },
    ]
  }
];
