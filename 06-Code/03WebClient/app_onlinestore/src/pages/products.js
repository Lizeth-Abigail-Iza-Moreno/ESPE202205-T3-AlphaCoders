import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class Users extends Component {  
    render() {
    return (
      <div>
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-4 col-lg-8 ">
              <h3>REGISTRO PRODUCTOS</h3>
              <div class="card">

                <form class="form-card" >
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Categoria<span class="text-danger"> *</span></label> <input type="text" id="txtCedula" name="txtCedula" onChange={this.handleChange} />
                    </div>             
                    <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Nombre Producto<span class="text-danger"> *</span></label> <input type="text" id="txtNombre" name="txtNombre"  onChange={this.handleChange} /> 
                    </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Talla<span class="text-danger"> *</span></label> <input type="text" id="txtApellido" name="txtApellido"  onChange={this.handleChange} /> 
                      </div>
                      </div>
                    <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                      Precio<span class="text-danger"> *</span></label> <input type="text" id="txtTipo" name="txtTipo"  onChange={this.handleChange} /> 
                      </div>
                      </div>
                      <div class="row justify-content-center">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">
                    Stock:<span class="text-danger"> *</span></label> <input type="text" id="txtUsuario" name="txtUsuario" onChange={this.handleChange} />
                    </div>
                  </div>
                  </div>
                  <br></br>
                  <div class="row justify-content-center">
                    <div class="form-group col-sm-6"> <button onClick={() => this.putStudent()} type="submit" class="btn-block btn-primary">Registrar</button> </div>
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