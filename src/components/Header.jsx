import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">
          Portfolio
        </Typography>
        <IconButton edge="end" color="inherit" onClick={goToProfile}>
          <AccountCircle style={{ width: '30px', height: '30px' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;