import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { ObjectId } from "mongodb";
import redisClient from "../utils/redis";
import dbClient from "../utils/db";

config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies || !cookies.jwt)
    return res.status(401).json({ error: "Unauthorized" });

  const refreshToken = cookies.jwt;

  const userId = await redisClient.get(`refresh_${refreshToken}`);
  if (!userId) return res.status(403).json({ error: "Forbidden" });

  const foundUser = await (
    await dbClient.usersCollection()
  ).findOne({ _id: new ObjectId(userId) });
  if (!foundUser) return res.status(403).json({ error: "Forbidden" });

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (error, decoded) => {
      if (error || foundUser.email !== decoded.email)
        return res.status(403).json({ error: "Forbidden" });
      const accessToken = jwt.sign(
        { email: foundUser.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      res.json({
        accessToken,
        email: foundUser.email,
        id: foundUser._id.toString(),
      });
    }
  );
};

export default { handleRefreshToken };
