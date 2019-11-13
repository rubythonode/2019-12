import * as express from 'express';
import cookieParser = require('cookie-parser');

// Router Imports
import userRouter from './routes/v1/api/user';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRouter);

export default app;
