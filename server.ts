import app from "./app.js"

const PORT = process.env.APP_PORT || 5000

const { log } = console

app.listen(PORT, async () => {
    log(`listening on PORT ${PORT}`)
})
