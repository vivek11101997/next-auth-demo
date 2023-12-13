import { MongoClient } from "mongodb";


export async function connectToDatabase() {
 const client =await  MongoClient.connect(
    "mongodb+srv://vivek11101997:admin@cluster0.e3fu8.mongodb.net/auth-demo?retryWrites=true&w=majority")
return client
}