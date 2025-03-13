import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import MoonXLogo from '../assets/MoonX.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/portfolio');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <Box sx={{ textAlign: 'center' }}>
        <img src={MoonXLogo} alt="MoonX Logo" style={{ width: '150px', marginBottom: '16px' }} />
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
              sx: { '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
              sx: { '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: 'orange',
              '&:hover': {
                backgroundColor: 'darkorange',
              },
            }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2, color: 'white' }}>
          Not registered? <Link to="/register" style={{ color: 'orange' }}>Register here</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
