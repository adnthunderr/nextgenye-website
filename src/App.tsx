import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" className="bg-blue-600">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NextGen Youth Empowerment
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Programs</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className="py-8">
        <Box className="text-center mb-8">
          <Typography variant="h2" component="h1" className="text-blue-800 font-bold mb-4">
            Empowering Youth Through Sports, Education, and Robotics
          </Typography>
          <Typography variant="h5" className="text-gray-600">
            A non-profit organization in Washington State dedicated to youth development.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="h-full">
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140?text=Sports"
                alt="Sports"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sports Programs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Encouraging physical activity and teamwork through various sports activities for youth.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="h-full">
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140?text=Education"
                alt="Education"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Education Initiatives
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Providing educational resources and support to help youth succeed academically.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="h-full">
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300x140?text=Robotics"
                alt="Robotics"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Robotics Camps
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Hands-on robotics educational camps to inspire innovation and STEM skills.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box className="mt-8 text-center">
          <Typography variant="h4" className="mb-4">
            Get Involved
          </Typography>
          <Typography variant="body1" className="mb-4">
            Join us in making a difference in the lives of youth in Washington State.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Donate Now
          </Button>
        </Box>
      </Container>
      <Box component="footer" className="bg-gray-800 text-white py-4 mt-8">
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2025 NextGen Youth Empowerment. EIN: 99-0763282. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
