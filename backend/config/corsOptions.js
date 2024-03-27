import allowedOrigns from "./allowedOrigns";

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigns.indexOf(origin) !== -1 || !origin) callback(null, true)

        else callback(new Error('Not allowed by CORS'))
    },
    optionsSuccessStatus: 200
}

export default corsOptions;
