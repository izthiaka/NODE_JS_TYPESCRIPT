import { MongoDb } from "./MongoDb"

export class DbAdapter {
    database: MongoDb
    constructor() {
        this.database = new MongoDb()
    }

    async connectDatabase() {
        this.database.connect()
    }

    async closeDatabase() {
        this.database.close()
    }
}
