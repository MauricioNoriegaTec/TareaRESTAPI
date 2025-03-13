import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Container, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
      setName(loggedInUser.name);
      setEmail(loggedInUser.email);
    }
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        setIsEditing(false);
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <Box sx={{ backgroundColor: '', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Card sx={{ padding: 4, backgroundColor: 'transparent', boxShadow: 'none' }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
              Profile
            </Typography>
            {user && (
              isEditing ? (
                <>
                  <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{
                      style: { color: 'white' },
                      sx: { '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }
                    }}
                  />
                  <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ mt: 2 }}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="body1" sx={{ color: 'white' }}>Name: {user.name}</Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>Email: {user.email}</Typography>
                  <Button variant="contained" color="primary" onClick={() => setIsEditing(true)} sx={{ mt: 2, backgroundColor: 'orange', color: 'white'}}>
                    Edit Profile
                  </Button>
                </>
              )
            )}
          </CardContent>
          <Button variant="contained" color="inherit" onClick={() => navigate('/portfolio')} sx={{ mt: 2, backgroundColor: 'orange', color: 'white' }}>
            Back to Portfolio
          </Button>
          <Button variant="contained" color="inherit" onClick={handleLogout} sx={{ mt: 2, backgroundColor: 'orange', color: 'white' }}>
            Logout
          </Button>
        </Card>
      </Container>
    </Box>
  );
}

export default Profile;
