import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VerCliente from './pages/verCliente';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VerCliente />} />
        </Routes>
      </BrowserRouter>
    );
}}
export default App;
