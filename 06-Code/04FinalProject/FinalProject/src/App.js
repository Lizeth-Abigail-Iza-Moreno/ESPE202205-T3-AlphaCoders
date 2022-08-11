import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Button from '@mui/material/Button';

const URI = 'http://3.86.206.55:3003/onlinestore/products';

class Product extends Component {
  state = {
    data: [],
    modalInsert: false,
    modalDelete: false,
    form: {
      _id: '',
      category: '',
      product_Name: '',
      price: '',
      size: '',
      stock: '',
    }
  }

  callGet = () => {
    axios.get(URI).then(response => {
      this.setState({ data: response.data });
    }).catch(error => {
      console.log(error.message);
    })
  }

  callPost = async () => {
    delete this.state.form.id;
    await axios.post(URI, this.state.form).then(response => {
      this.modalInsert();
      this.callGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  callPut = () => {
    axios.put(URI + this.state.form._id, this.state.form).then(response => {
      this.modalInsert();
      this.callGet();
    })
  }

  callDelete = () => {
    axios.delete(URI + this.state.form._id).then(response => {
      this.setState({ modalDelete: false });
      this.callGet();
    })
  }

  modalInsert = () => {
    this.setState({ modalInsert: !this.state.modalInsert });
  }

  selectProduct = (product) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        _id: product._id,
        id: product.id,
        category: product.category,
        product_Name: product.product_Name,
        price: product.price,
        size: product.size,
        stock: product.stock,
      }
    })
  }

  captureData = async data => {
    data.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [data.target.name]: data.target.value
      }
    });
    console.log(this.state.form);
  }

  componentDidMount() {
    this.callGet();
  }


  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <div class="table-responsive-md">
          <table className="table ">
            <thead>
            <h1><center>Productos Registrados</center></h1><br></br>
              <tr>
                <th>ID</th>
                <th>ID</th>
                <th>Category</th>
                <th>Product Name</th>
                <th>price</th>
                <th>size</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map(product => {
                return (
                  <tr>
                    <td>{product._id}</td>
                    <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>{product.product_Name}</td>
                    <td>{product.price}</td>
                    <td>{product.size}</td>
                    <td>{product.stock}</td>

                    <td>
                      <button className="btn btn-primary" onClick={() => { this.selectClient(product); this.modalInsert() }}><FontAwesomeIcon icon={faEdit} /></button>
                      {" "}
                      <button className="btn btn-danger" onClick={() => { this.selectClient(product); this.setState({ modalDelete: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </td>
                  </tr>

                )
              })}
            </tbody>
          </table>
        </div>
        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{ display: 'block' }}>
            <span style={{ float: 'right' }} onClick={() => this.modalInsert()}>x</span>
          </ModalHeader>
          <ModalBody>

            <div className="form-group">
              <label htmlFor="_id">ID</label>
              <input className="form-control" type="text" name="_id" id="_id" readOnly onChange={this.captureData} value={form ? form._id : this.state.data.length + 1} />
              <br />
              <label htmlFor="category">Category</label>
              <input className="form-control" type="text" name="category" id="category" onChange={this.captureData} value={form ? form.category : ''} />
              <br />
              <label htmlFor="product_Name">Product Name</label>
              <input className="form-control" type="text" name="product_Name" id="product_Name" onChange={this.captureData} value={form ? form.product_Name : ''} />
              <br />
              <label htmlFor="price">Price</label>
              <input className="form-control" type="text" name="price" id="price" onChange={this.captureData} value={form ? form.price : ''} />
              <br />
              <label htmlFor="size">Size</label>
              <input className="form-control" type="text" name="size" id="size" onChange={this.captureData} value={form ? form.size : ''} />
              <br />
              <label htmlFor="Stock">Stock</label>
              <input className="form-control" type="text" name="stock" id="stock" onChange={this.captureData} value={form ? form.stock : ''} />
              <br />
            </div>
          </ModalBody>

          <ModalFooter>
            {this.state.tipoModal === 'insertar' ?
              <button className="btn btn-success" onClick={() => this.callPost()}>
                Insertar
              </button> : <button className="btn btn-primary" onClick={() => this.callPut()}>
                Actualizar
              </button>
            }
            <button className="btn btn-danger" onClick={() => this.modalInsert()}>Cancelar</button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modalDelete}>
          <ModalBody>
            Estás seguro que deseas eliminar el product: {form && form.id}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => this.callDelete()}>Sí</button>
            <button className="btn btn-secundary" onClick={() => this.setState({ modalDelete: false })}>No</button>
          </ModalFooter>
        </Modal>
        <Button
          className='login'
          fullWidth
          variant="contained"
          style={{ color: 'white', backgroundColor: "#5DC1B9" }}
          onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsert() }}
        >
          <strong><p>Add product</p></strong>
        </Button>
      </div>
    );
  }
}
export default Product;
