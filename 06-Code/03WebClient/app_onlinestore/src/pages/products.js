//import '../css/App.css'
import 'styled-components'
import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

const Products = () => {
  //1 - Configurar los hooks
  const [products, setProducts] = useState([])

  //2 - Función para mostrar los datos con fetch
  const URL = 'http://35.173.221.196:3003/onlinestore/products'
  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    showData()
  }, [])

  //3 - Configuramos las columns para Datatable
  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'Categoria',
      selector: row => row.category
    },
    {
      name: 'Nombre del producto',
      selector: row => row.product_Name
    },
    {
      name: 'Talla',
      selector: row => row.size
    },
    {
      name: 'precio',
      selector: row => row.price
    },
    {
      name: 'Stock',
      selector: row => row.stock
    },

  ]

  //personalizar temas
   createTheme('custom', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');


  //4 - Mostramos la data en DataTable
  return (
    <div className="App">
      <h1>Tabla de Productos Registrados</h1>
      <DataTable
        columns={columns}
        data={products}
        theme='custom' //habilitar esta linea y descomentar createTheme()
        pagination />
    </div>
  );
}
export default Products;