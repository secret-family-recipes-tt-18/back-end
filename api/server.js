require('dotenv').config()
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const authRouter = require("./auth/auth-router")
const cookRouter = require("./cookBook/cookbook-router")
const restricted = require("./middleware/restricted-middleware")


const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use("/api/auth", authRouter)
server.use("/api/cook", restricted, cookRouter)

server.get("/", (_, res) => {
    res.status(200).json("API IS ONLINE")
})

module.exports = server