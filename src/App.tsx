import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Stack,
  Grid,
  Chip,
} from '@mui/material';
import sportsImage from './assets/sports-recreation-cricket.png';

const theme = createTheme({
  palette: {
    primary: { main: '#0ea5e9' },
    secondary: { main: '#0f766e' },
    background: {
      default: '#f5f7fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", sans-serif',
    h3: { fontWeight: 800, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

function App() {
  const programs = [
    {
      title: 'Sports & Recreation',
      subtitle: 'Team sports, clinics, confidence building',
      copy: 'Encouraging physical activity and teamwork through accessible leagues and clinics for every skill level.',
      accent: '#0ea5e9',
    },
    {
      title: 'STEM Education',
      subtitle: 'Robotics, coding, hands-on labs',
      copy: 'Providing STEM education and robotics volunteer opportunities that spark curiosity and career pathways.',
      accent: '#0f766e',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          sx={{
            borderBottom: '1px solid',
            borderColor: 'divider',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ py: 1 }}>
              <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800, color: 'primary.main' }}>
                NextGen Youth Empowerment
              </Typography>
              <Stack direction="row" spacing={1.5}>
                <Button color="inherit" sx={{ color: 'text.primary' }}>Home</Button>
                <Button color="inherit" sx={{ color: 'text.primary' }}>About</Button>
                <Button color="inherit" sx={{ color: 'text.primary' }}>Programs</Button>
                <Button color="inherit" sx={{ color: 'text.primary' }}>Contact</Button>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        <Box
          component="main"
          sx={{
            background: 'linear-gradient(135deg, #0ea5e91a 0%, #d9f2ff 50%, #ecfdf3 100%)',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Chip
                  label="Empowerment through play and STEM"
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 2, fontWeight: 700 }}
                />
                <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
                  Empowering Youth Through Sports & Recreation, and STEM
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                  A Washington State non-profit dedicated to creating safe spaces, strong teams, and future-ready skills for every young person we meet.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button variant="contained" size="large">Get involved</Button>
                  <Button variant="outlined" color="secondary" size="large">Our programs</Button>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ mt: 5 }}>
                  <Box>
                    <Typography variant="h4" color="primary.main">500+</Typography>
                    <Typography variant="body2" color="text.secondary">Hours of coaching delivered</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" color="secondary.main">120</Typography>
                    <Typography variant="body2" color="text.secondary">Students served this season</Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card
                  elevation={6}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(15, 23, 42, 0.15)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="320"
                    image={sportsImage}
                    alt="Youth playing cricket"
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={700}>
                      Where skills and confidence grow together
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                      Inclusive programming that meets youth where they are, led by coaches and mentors who care deeply about community.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
          <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
            <Typography variant="overline" color="secondary.main" sx={{ letterSpacing: 1 }}>
              Programs
            </Typography>
            <Typography variant="h4">Volunteer Opportunities</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              We run volunteer based Sports & Recreation programs and also provide volunteer opportunities in STEM.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {programs.map((program) => (
              <Grid size={{ xs: 12, md: 4 }} key={program.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 18px 35px rgba(15, 23, 42, 0.08)',
                  }}
                >
                  <Box
                    sx={{
                      height: 6,
                      background: program.accent,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" color="secondary.main" sx={{ mb: 1 }}>
                      {program.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {program.copy}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ py: { xs: 7, md: 9 }, backgroundColor: '#0b1120' }}>
          <Container maxWidth="lg">
            <Card
              sx={{
                borderRadius: 4,
                padding: { xs: 4, md: 6 },
                background: 'linear-gradient(135deg, #0ea5e9, #0f766e)',
                color: '#f8fafc',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              }}
              elevation={0}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    Ready to champion the next generation?
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#e0f2fe' }}>
                    Partner, volunteer, or donate to keep programs affordable or minimum cost.
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="flex-end">
                    <Button variant="contained" color="inherit" size="large" sx={{ color: '#0f172a' }}>
                      Donate now
                    </Button>
                    <Button variant="outlined" color="inherit" size="large" sx={{ borderColor: '#f8fafc', color: '#f8fafc' }}>
                      Volunteer
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </Box>

        <Box component="footer" sx={{ py: 4, bgcolor: '#0b1120', color: '#e2e8f0' }}>
          <Container maxWidth="lg">
            <Typography variant="body2" align="center">
              (c) 2026 NextGen Youth Empowerment. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
