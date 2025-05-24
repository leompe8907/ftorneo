import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Index from './Pages/Index';

import ModalMessage from './Components/Models';
import { useError } from './Components/ErrorContext';
import Torneo from './Pages/Torneo';
import Navbar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';

function App() {

  const { error, clearError } = useError();

  // Función para verificar autenticación
  const isAuthenticated = () => {
    return !!localStorage.getItem('accessToken');
  };

  // Componente de ruta protegida
  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? element : <Navigate to="/signin" />;
  };

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/torneo" element={<ProtectedRoute element={<Torneo/>} />} />
        <Route path="/nav" element={<Navbar/>} />
        <Route path='/fo' element={<Footer/>}/>

      </Routes>
    </Router>
    <ModalMessage message={error} onClose={clearError} />
    </>
  );
}

export default App;
