const express = require("express")

const server = express()


const express = require("express")
const carRouter = require("./cars/cars-router")
const server = express()

// DO YOUR MAGIC
server.use(express.json())
server.use(carRouter)

module.exports = server
// DO YOUR MAGIC

module.exports = server
