import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UsuariosPage from './pages/Usuarios';

const App = function() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/Usuarios" element={<UsuariosPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
