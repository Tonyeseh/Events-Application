import path from "path";
import dotenv from "dotenv";
import dbClient from "../utils/db";

dotenv.config();

export default class IndexController {
  // static getStatus (req, res) {
  //     res.status(200).json({ status: 'ok' })
  // }

  // static async getStats (req, res) {
  //     const eventsCount = await (await dbClient.eventsCollection()).countDocuments();
  //     const categoriesCount =
  // }

  static async getImage(req, res) {
    const sendFileConfig = {
      root: path.join(process.env.UPLOAD_DIR, "uploads"),
      dotfiles: "deny",
    };
    const { fileName } = req.params;

    if (!fileName) return res.status(404).json({ error: "Image not Found" });

    return res.sendFile(fileName, sendFileConfig, (error) => {
      if (error) {
        console.log(error);
        return res.status(404).json({ error: "Image not Found" });
      }
    });
  }
}
