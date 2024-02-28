import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

import NotFoundException from './common/exceptions/not-found-exception';
import BaseException from './common/exceptions/base-exception';
import { authRouter, healthRouter } from './routes';


const app = express();
const port = process.env.NODE_PORT || 5000
app.use(express.json());

app.use('/health', healthRouter);
app.use('/auth', authRouter )

app.use('*', (req: Request, res: Response, next: NextFunction) => {
    const error = new NotFoundException(`The route ${req.originalUrl} was not found.`);
    next(error);
});

app.use((err: BaseException, req: Request, res: Response, next: NextFunction) => {
    const errorResponse = {
        message: err.message,
        status: err.statusCode || 500,
    };
    return res.status(err.statusCode || 500).json(errorResponse);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});