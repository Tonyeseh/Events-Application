import { createClient } from 'redis';
import { inspect } from "util";

class RedisClient {
  constructor() {
    this.client = createClient();
    this.isConnected = true;
    this.client.on('error', (error) => {
      console.log(`Connection failed: ${inspect(error)}`);
      this.isConnected = false;
    });
    (async () => await this.client.connect())()
  }

  isAlive() {
    return this.isConnected;
  }

  async get(key) {
    return await this.client.GET(key)
  }

  async set(key, value, duration) {
    await this.client.SETEX(key, duration, value);
  }

  async del(key) {
    await this.client.DEL(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;
