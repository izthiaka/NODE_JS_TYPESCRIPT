import mongoose from "mongoose"

export class MongoDb {
    database: typeof mongoose
    constructor(database = mongoose) {
        this.database = database
    }

    connect() {
        try {
            const DATABASE_NAME = process.env.DB_URL_MONGO
            this.database.set("strictQuery", false)
            this.database.connect(`${DATABASE_NAME}`, {
                retryWrites: true,
                w: "majority",
            })
            console.log(`Connected To Database : ${DATABASE_NAME}`)
        } catch (error) {
            throw Error(`${error}`)
        }
    }

    close() {
        this.database.connection.close()
    }
}
