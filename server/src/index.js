const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
  res.status(200).send({ message: "OK" })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
