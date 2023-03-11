import express from "express"
import bodyParser from "body-parser"

const app = express()

app.use("/", bodyParser.json({ limit: "250kb" }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PREFIX_API_V1 = "/api/v1"

export default app
