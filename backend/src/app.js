import 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';

class AppController{
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}

export default new AppController().server;