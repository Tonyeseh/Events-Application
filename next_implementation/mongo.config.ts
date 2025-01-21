import { MongoClient } from "mongodb";

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || "eventify";

let client;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);

clientPromise = client.connect();

export default clientPromise;
