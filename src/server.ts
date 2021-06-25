import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import './database';

// import middlewares
import { router } from './routes';
import { HandleError } from './middlewares/HandleErrors';


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(HandleError);

// http://localhost:3000
app.listen(3000, () => {
  console.log('port:3000');
});
