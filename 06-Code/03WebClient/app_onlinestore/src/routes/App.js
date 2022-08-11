import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Menu from '../pages/menu'
import Products from '../pages/products';
import Users from '../pages/users';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/menu' element={<Menu/>}/>
        <Route exact path='/users' element={<Users/>}/> 
        <Route exact path='/products' element={<Products/>}/> 
      </Routes>
    </Router>
  );
}
export default App;