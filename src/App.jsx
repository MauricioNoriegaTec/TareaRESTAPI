import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Portfolio';
import Profile from './Profile';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;