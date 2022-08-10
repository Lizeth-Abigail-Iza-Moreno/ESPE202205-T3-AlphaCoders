const port = 3003
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://administrador:administrador@cluster0.hlyms.mongodb.net/TiendaOnline?retryWrites=true&w=majority`, { useNewUrlParser: true })

const db = mongoose.connection;

db.on("error", (error) => crossOriginIsolated.error(error));
db.once("open", () => console.log("System connected to MongoDB Database"));

app.use(express.json());

const productRouter = require("./routes/productsRoutes");
const personRouter = require("./routes/personsRoutes");
app.use("/onlinestore", productRouter);
app.use("/onlinestore", personRouter);

app.listen(port, () => console.log('Server is running  on port --> ' + port));