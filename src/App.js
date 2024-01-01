import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Companies from './pages/Companies';
import { PrivateRoutes } from './routing/PrivateRoutes';
import { OpenRoutes } from './routing/OpenRoutes';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<OpenRoutes><Register /></OpenRoutes>} />
        <Route path='/dashboard' element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path='/companies' element={<PrivateRoutes><Companies /></PrivateRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
