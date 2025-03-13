import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import MoonXLogo from '../assets/MoonX.png';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        navigate('/login');
      } else {
        alert('Failed to register');
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
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            Register
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2, color: 'white' }}>
          Already have an account? <Link to="/login" style={{ color: 'orange' }}>Login here</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Register;
