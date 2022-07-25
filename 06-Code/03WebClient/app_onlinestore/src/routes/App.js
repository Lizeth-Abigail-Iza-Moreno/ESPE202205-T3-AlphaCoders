import '../css/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from '../pages/login';
import Menu from '../pages/menu';
import Products from '../pages/products';
import Users from '../pages/users';
import Journal from '../pages/journal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='journal' element={<Journal />} />
          <Route path='*' element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;