import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { reactTopics } from '../data/reactTopics';

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          📚 Sistema de Aprendizaje React
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          Tu guía interactiva para aprender React y Material UI
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 3 
      }}>
        {reactTopics.map((topic) => (
          <Box key={topic.id}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box sx={{ fontSize: '3rem', mb: 2, textAlign: 'center' }}>
                  {topic.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom align="center">
                  {topic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
                  {topic.description}
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    variant="outlined"
                    component={Link}
                    to={topic.subtopics?.[0]?.path || '/'}
                    size="small"
                  >
                    Explorar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 6, p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h5" gutterBottom>
          🎯 Cómo usar este sistema
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Este sistema está diseñado para ayudarte a aprender React de manera interactiva.
          Cada tema contiene:
        </Typography>
        <ul>
          <li>Teoría detallada con ejemplos</li>
          <li>Código funcional que puedes ver y modificar</li>
          <li>Visualización en tiempo real de los conceptos</li>
          <li>Navegación fácil entre temas relacionados</li>
        </ul>
      </Box>
    </Container>
  );
}
