const express = require('express')
const app = express()
const Contenedor = require('./contenedor')

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`);
})

//PATHS
app.get("/productos", async (req, res) => {
    const allProducts = await Contenedor.getAll()
    res.send(allProducts)
})

app.get("/productoRandom", async (req, res) => {
    const allProducts = await Contenedor.getAll()
    let randomId = Math.floor(Math.random() * (allProducts.length))
    res.send(allProducts[randomId])
    console.log(randomId);
})
