import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://littleboxapi.azurewebsites.net/api/login?email=${username}&password=${password}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });
      const data = await response.json();
      if (data[0]?.Result === 1) {
        localStorage.setItem('user', JSON.stringify({ username }));
        console.log('Login successful');  
        navigate('/portfolio');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container
      maxWidth="100vw"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '300px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="inherit" sx={{ backgroundColor: 'black', color: 'white' }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;