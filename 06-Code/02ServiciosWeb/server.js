const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParameter = 8081
//const EndPoints = require('./api/EndPoints')

var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//http://localhost:8081/clientes/uri
<<<<<<< HEAD
app.use("/Data", EndPoints)

mongoose.connect(
    //"mongodb+srv://admin:admin@cluster0.b6dil.mongodb.net/TiendaOnline?retryWrites=true&w=majority",
    "mongodb+srv://administrador:administrador@cluster0.hlyms.mongodb.net/TiendaOnline?retryWrites=true&w=majority",
=======
//app.use("/clientes", EndPoints)

mongoose.connect(
    //"mongodb+srv://administrador:admi1234@cluster0.hlyms.mongodb.net/ONLINE?retryWrites=true&w=majority",
    "mongodb+srv://administrador:administrador@cluster0.hlyms.mongodb.net/TIENDAONLINE?retryWrites=true&w=majority",
    //"mongodb+srv://admin:admin@cluster0.b6dil.mongodb.net/CLIENTES?retryWrites=true&w=majority",
>>>>>>> 7105ee49aa1e0cb964e69ae606d2be3816bcb8af
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log("Error al conectarse a la base de datos")
        app.listen(portParameter, () => {
            console.log(`server is runnning on port ${portParameter}`)
        })
    }
)