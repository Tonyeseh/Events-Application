import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import eventRouter from './routes/events';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import authRouter from './routes/auth'
import corsOptions from './config/corsOptions';
import credentials from './utils/credentials';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan('tiny'));

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

// routes
app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/events', eventRouter)
// app.use('/categories', categoriesRouter)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port ${PORT}`);
});
