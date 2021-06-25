import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import './database';

// import middlewares

import { HandleError } from './middlewares/HandleErrors';

// router

import userRouter from './routes/usersRouters/usersRouters';
import tagsRouter from './routes/tagsRoutes/tagsRouters';
import complimentsRouter from './routes/complimentsRouters/complimentsRouters';
import authenticateRouter from './routes/authenticateRouters/authenticateRouters';


class App {
  app: any;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routers();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(HandleError);
  }
  routers() {
    this.app.use(userRouter);
    this.app.use(tagsRouter);
    this.app.use(complimentsRouter);
    this.app.use(authenticateRouter);
  }
}

export default new App().app;
// http://localhost:3000
