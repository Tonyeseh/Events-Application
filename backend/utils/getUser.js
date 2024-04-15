import { config } from "dotenv";
import jwt, { decode } from "jsonwebtoken";
import dbClient from "./db";

config();

const getUser = async (req, res, next) => {
  const authHeader = req.get("Authorization") || "";

  try {
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      req.user = await (
        await dbClient.usersCollection()
      ).findOne({ email: decoded.email });
    }
  } catch (error) {}
  next();
};

export default getUser;
