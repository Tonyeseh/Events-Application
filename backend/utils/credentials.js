import allowedOrigns from "../config/allowedOrigns";

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigns.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next()
}

export default credentials;
