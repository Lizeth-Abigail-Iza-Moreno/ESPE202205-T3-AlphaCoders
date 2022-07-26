import React, { Component } from 'react';
import Client from '../components/cliente';
class VerClient extends Component {
    render() {
        return (
            <div>
                <center><h1>Lista de información de la computadora del cliente</h1></center>
                <Client/>
            </div>
        )
}}
export default VerClient;