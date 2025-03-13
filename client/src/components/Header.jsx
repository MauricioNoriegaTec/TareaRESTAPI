import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import MoonXLogo from '../assets/MoonX.png';

function Header() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <img src={MoonXLogo} alt="MoonX Logo" style={{ width: '100px' }} />
        </Box>
        <IconButton edge="end" sx={{ color: 'white' }} onClick={goToProfile}>
          <AccountCircle style={{ width: '40px', height: '40px' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;