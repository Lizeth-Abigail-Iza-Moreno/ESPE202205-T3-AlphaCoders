import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Menu from '../pages/menu'

export default class Users extends Component {  
    render() {
    return (
      <div>
        <Menu/>
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-6 col-lg-8 ">
              <h3>Iniciar sesión en su cuenta</h3>
              <div class="card">

                <form class="form-card" >
                      <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Usuario<span class="text-danger"> *</span></label> <input type="text" id="txtUsuario" name="txtUsuario" />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Contraseña<span class="text-danger"> *</span></label> <input type="text" id="txtPassword" name="txtPassword" />
                    </div>
                  </div>
                  <br></br>
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Ingresar</button> </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}