import { MongoClient } from 'mongodb';

export default class Database {
    constructor(uri, database) {
        this.uri = uri
        this.database = database
        this.options =  { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }        
    }

    async connectTo(collection) {
        try {
           const connection = await MongoClient.connect(this.uri, this.options);
           const db = connection.db(this.database)
           return db.collection(collection)
            
        } catch (error) {
            throw error

        }  
    }    
}
