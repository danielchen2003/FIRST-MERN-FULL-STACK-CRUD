const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const routes = require("./routes")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors()) // cross origin read blocking

app.use(logger("dev"))

app.use("/api", routes)

module.exports = app
