import { ObjectId } from 'mongodb';
import dbClient from "./db";
import redisClient from "./redis";

export const authenticate = async (req, res, next) => {
    const token = req.get('X-Token');

    const userId = await redisClient.get(`auth_${token}`);
  
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const user = await (await dbClient.usersCollection()).findOne({ _id: new ObjectId(userId) });

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  delete user.password

  req.user = user;
  next();
}

export const getUser = async (req, res, next) => {
  const token = req.get('X-Token');

  const userId = await redisClient.get(`auth_${token}`);
  const user = await (await dbClient.usersCollection()).findOne({ _id: new ObjectId(userId) });

  req.user = user;
  next();
}
