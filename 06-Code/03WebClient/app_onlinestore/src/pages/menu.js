import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css'
class menu extends Component {
  cerrarSesion = () => {
    window.location.href = './'
  }
  users = () => {
    window.location.href = './users'
  }
  products = () => {
    window.location.href = './products'
  }
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Tienda Online</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.cerrarSesion()} href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.users()} href="#">Registrar Usuario</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.products()} href="#">Registrar Productos</a>
            </li>
            <li className="nav-item">
              <button className='btn btn-primary' onClick={() => this.cerrarSesion()}>Cerrar Sesión</button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default menu;