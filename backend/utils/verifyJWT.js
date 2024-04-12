import { config } from "dotenv";
import jwt, { decode } from "jsonwebtoken";

config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) console.log(true);
    if (err) return res.status(403).json({ error: "Forbidden" });
    req.userEmail = decoded.email;
    next();
  });
};

export default verifyJWT;
