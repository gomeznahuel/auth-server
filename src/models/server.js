const express = require('express');
const app = express();
const CORS = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {
  constructor() {
    this.app = app;
    this.port = process.env.PORT;
    this.homePath = '/';
    this.authPath = '/api/auth';
    this.connectToDB();
  }

  middlewares() {
    // CORS
    this.app.use(CORS());

    // Read and parse body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.homePath, require('../routes/home.route'));
    this.app.use(this.authPath, require('../routes/auth.route'));
  }

  async connectToDB() {
    await dbConnection();
  }

  execute() {
    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Start server
    this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`));
  }
}

module.exports = Server;
