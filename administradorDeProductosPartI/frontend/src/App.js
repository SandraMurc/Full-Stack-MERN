import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ListarProductos from './components/listarProductos/ListarProductos';
import CrearProducto from './components/crearProducto/CrearProducto';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CrearProducto/>}/>
          <Route path='/listado' element={<ListarProductos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
