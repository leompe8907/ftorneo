import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {

  // Función para verificar autenticación
  const isAuthenticated = () => {
    return !!localStorage.getItem('accessToken');
  };

  // Componente de ruta protegida
  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? element : <Navigate to="/signin" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
