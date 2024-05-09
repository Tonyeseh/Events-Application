import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import dbClient from "../utils/db";
import redisClient from "../utils/redis";

config();

const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password)
      return res.status(400).json({ error: "Missing some parameters!" });

    const user = await (await dbClient.usersCollection()).findOne({ email });

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ error: "Unauthorized" });

    const accessToken = jwt.sign(
      { email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const key = `refresh_${refreshToken}`;

    await redisClient.set(key, user._id.toString(), 86400);

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 86400 * 1000,
    });

    delete user.password;

    res.status(200).json({ accessToken, user });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error!");
  }
};

const authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password || !firstName || !lastName) {
    res.status(400).json({ error: "Invalid payload. Missing some fields" });
    return;
  }
  try {
    const existingUser = await (
      await dbClient.usersCollection()
    ).findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: "User with email already exists" });
      return;
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const result = await (
      await dbClient.usersCollection()
    ).insertOne({
      email,
      password: hashedPwd,
      firstName,
      lastName,
      website: "",
      company: "",
      phoneNumber: "",
      address: "",
      profilePics: "",
      profileCover: "",
      city: "",
      country: "",
      following: [],
      eventRSVP: [],
      interests: [],
    });

    const user = await (
      await dbClient.usersCollection()
    ).findOne({ _id: result.insertedId });

    const accessToken = jwt.sign(
      { email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const key = `refresh_${refreshToken}`;

    await redisClient.set(key, user._id.toString(), 86400);

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 86400 * 1000,
    });

    delete user.password;

    res.status(200).json({ accessToken, user });
  } catch (error) {
    res.status(500).json({ error: "Server Internal Error" });
    console.error(error);
  }
};

const authLogout = async (req, res) => {
  // delete access token on client too

  const cookies = req.cookies;
  if (!cookies || !cookies.jwt) return res.status(204);

  const refreshToken = cookies.jwt;

  const userId = await redisClient.get(`refresh_${refreshToken}`);
  if (!userId) return res.status(403).json({ error: "Forbidden" });

  const foundUser = await (
    await dbClient.usersCollection()
  ).findOne({ _id: new ObjectId(userId) });
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, secure: true });
    return res.status(204);
  }

  await redisClient.del(`refresh_${refreshToken}`);
  res.clearCookie("jwt", { httpOnly: true, secure: true });
  res.status(204).json({});
};

const resetPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.send(400).json({ error: "Email missing" });
    return;
  }

  const user = await (await dbClient.usersCollection()).findOne({ email });

  if (!user) {
    res.send(404).json({ error: "No email associated with account" });
    return;
  }

  const token = uuidv4();
  const key = `resetToken_${token}`;

  await redisClient.set(key, user._id.toString(), 300);
  res.status(200).json({ token });
};

const updatePassword = async (req, res) => {
  const { userEmail } = req;
  const { currentPwd, confirmPwd, newPwd } = req.body;

  if (!userEmail) return res.status(403).json({ error: "Forbidden" });

  try {
    const user = await (
      await dbClient.usersCollection()
    ).findOne({ email: userEmail });
    if (!user) return res.status(403).json({ error: "Forbidden" });

    if (!currentPwd || !confirmPwd || !newPwd)
      return res.status(400).json({ error: "Invalid payload" });
    if (!(await bcrypt.compare(currentPwd, user.password)))
      return res.status(401).json({ error: "Unauthorized" });

    if (confirmPwd !== newPwd)
      return res
        .status(400)
        .json({ error: "Confirm Password doesn't match new Password" });

    const hashedPwd = bcrypt.hash(newPwd, 10);

    const result = await (
      await dbClient.usersCollection()
    ).updateOne({ _id: user._id }, { $set: { password: hashedPwd } });

    console.log(result);

    if (result.ok === 1 && result.modifiedCount === 1)
      return res.status(204).json();

    return res
      .status(500)
      .json({ error: "Cannot update password now, try again." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Cannot update password now, try again." });
  }
};

export default {
  authLogin,
  authRegister,
  authLogout,
  resetPassword,
  updatePassword,
};
