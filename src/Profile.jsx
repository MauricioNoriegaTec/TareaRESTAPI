import { Card, CardContent, Typography, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/portfolio');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Box sx={{ backgroundColor: 'grey', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Card sx={{ padding: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Profile
            </Typography>
            <Typography variant="body1">
              Username: {user?.username}
            </Typography>
          </CardContent>
          <Button variant="contained" color="inherit" onClick={handleBackToHome} sx={{ marginTop: 2, backgroundColor: 'black', color: 'white' }}>
            Back to Portfolio
          </Button>
          <Button variant="contained" color="inherit" onClick={handleLogout} sx={{ marginTop: 2, backgroundColor: 'black', color: 'white' }}>
            Logout
          </Button>
        </Card>
      </Container>
    </Box>
  );
}

export default Profile;