import dbClient from "../utils/db"


export default class IndexController {
    static getStatus (req, res) {
        res.status(200).json({ status: 'ok' })
    }

    static async getStats (req, res) {
        const eventsCount = await (await dbClient.eventsCollection()).countDocuments();
        // const categoriesCount = 
    }
}