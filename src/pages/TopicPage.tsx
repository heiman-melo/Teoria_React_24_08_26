import { Box, Container, Typography, Card, CardContent, Paper, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { reactTopics } from '../data/reactTopics';
import InternalHeader from '../components/InternalHeader';

export default function TopicPage() {
  // con este hook useParams() podemos obtener los parametros de la URL, en este caso el topicId y subtopicId
  const { topicId, subtopicId } = useParams();
// eslint-disable-next-line no-debugger
debugger
  // Encontrar el tema actual
  const currentTopic = reactTopics.find(t => t.id === topicId);
  const currentSubtopic = currentTopic?.subtopics?.find(s => s.id === subtopicId);

  if (!currentTopic || !currentSubtopic) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4">Tema no encontrado</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <InternalHeader currentTopic={topicId} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {currentSubtopic.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {currentTopic.title} → {currentSubtopic.title}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
        {/* Sección de Teoría */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              📖 Teoría
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 2 }}>
              Esta es la sección de teoría para <strong>{currentSubtopic.title}</strong>.
              Aquí se explicará el concepto en detalle.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              [Contenido de teoría para {currentSubtopic.title} - por agregar]
            </Typography>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              💡 Puntos clave
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <ul>
              <li>Punto clave 1 sobre {currentSubtopic.title}</li>
              <li>Punto clave 2 sobre {currentSubtopic.title}</li>
              <li>Punto clave 3 sobre {currentSubtopic.title}</li>
            </ul>
          </Paper>
        </Box>

        {/* Sección de Ejemplos */}
        <Box sx={{ flex: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                💻 Ejemplo Interactivo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Ejemplo funcional de {currentSubtopic.title}
              </Typography>
              
              <Box sx={{ 
                p: 2, 
                bgcolor: 'background.default', 
                borderRadius: 1, 
                border: '1px solid',
                borderColor: 'divider',
                minHeight: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="body2" color="text.secondary">
                  [Ejemplo interactivo de {currentSubtopic.title} - por implementar]
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Código:
                </Typography>
                <Box sx={{ 
                  p: 2, 
                  bgcolor: 'grey.900', 
                  borderRadius: 1, 
                  color: 'grey.100',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  overflow: 'auto'
                }}>
                  {`// Ejemplo de código para ${currentSubtopic.title}
// Código por implementar
`}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
