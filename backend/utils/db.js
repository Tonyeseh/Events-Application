import { MongoClient } from "mongodb";

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || "eventify";

class DBClient {
  constructor() {
    this._client = new MongoClient(
      `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
      { useUnifiedTopology: true }
    );

    this._client.connect((err, client) => {
      if (!err) {
        this._db = client;
      } else {
        console.error(err);
        this._db = false;
      }
    });
  }
  isAlive() {
    if (this._db) {
      return true;
    }
    return false;
  }
  async usersCollection() {
    return this._client.db().collection("users");
  }
  async eventsCollection() {
    return this._client.db().collection("events");
  }
  async categoriesCollection() {
    return this._client.db().collection("categories");
  }
  async interestedCollection() {
    return this._client.db().collection("interested");
  }
}

const dbClient = new DBClient();

export default dbClient;
