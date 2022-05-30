import './App.css';
//import { Button } from 'react-bootstrap';
import Main from './pages/Main';
import Login from './pages/Login';
import Guia from './pages/Guia/guide';
import Erro from './pages/Erro';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from  'react-router-dom';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Guia' element={<Guia/>} />
        <Route path='*' element={<Erro/>} />
        </Routes>    
    </BrowserRouter></div>
    );
}
  
export default App;
