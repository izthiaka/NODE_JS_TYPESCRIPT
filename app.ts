import dotenv from "dotenv"

import app from "./routes/app_route_v1.js"

import { DbAdapter } from "./services/database/mongo/DbAdapter.js"

dotenv.config()

const PORT = process.env.APP_PORT || 8080
const URL = process.env.APP_URL
const { APP_NAME } = process.env

const database = new DbAdapter()
database.connectDatabase()

app.use((req, res) => {
    res.status(404)
    res.json({
        statusCode: 404,
        success: false,
        message: "404 NOT FOUND",
    })
})

export default app
