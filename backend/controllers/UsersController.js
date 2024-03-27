import dbClient from "../utils/db"

export default class UsersController {
    static async getProfile (req, res) {
        console.log(req.userEmail)
        if (!req.userEmail) return res.status(403).json({ error: 'Forbidden' });

        const user = await (await dbClient.usersCollection()).findOne({ email: req.userEmail });

        if (!user) return res.status(403).json({ error: 'Forbidden' });
        
        delete user.password

        return res.status(200).json(user)
    }
}