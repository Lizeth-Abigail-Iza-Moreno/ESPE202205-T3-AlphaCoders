import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PersonsSearch from '../components/PersonsSearch';
import Menu from '../pages/menu'

export default class Users extends Component {
  render() {
    return (
      <div>
        <Menu />
        <PersonsSearch/>
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-6 col-lg-8 ">
              <h3>REGISTRO DE USUARIOS</h3>
              <div class="card">

                <form class="form-card" >
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Cédula<span class="text-danger"> *</span></label> <input type="text" id="txtCedula" name="txtCedula" onChange={this.handleChange} />
                    </div>
                    <div class="row justify-content-center">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                        Nombres<span class="text-danger"> *</span></label> <input type="text" id="txtNombre" name="txtNombre" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                        Apellidos<span class="text-danger"> *</span></label> <input type="text" id="txtApellido" name="txtApellido" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                        Tipo de usuario<span class="text-danger"> *</span></label> <input type="text" id="txtTipo" name="txtTipo" />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                        Usuario<span class="text-danger"> *</span></label> <input type="text" id="txtUsuario" name="txtUsuario" />
                      </div>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Email<span class="text-danger"> *</span></label> <input type="text" id="txtEmail" name="txtEmail" />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Contraseña<span class="text-danger"> *</span></label> <input type="text" id="txtPassword" name="txtPassword" />
                    </div>
                  </div>
                  <br></br>
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Registrar</button> </div>
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