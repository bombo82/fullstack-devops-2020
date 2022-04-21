import HttpController from './controller/HttpController';
import express from 'express';
import * as config from '../server-config.json'

class HttpServer {
    constructor() {
        const server = express();

        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', config.cors);
            res.header('Access-Control-Allow-Methods', 'GET');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

        new HttpController(server);

        server.listen(config.port);
    }
}

new HttpServer();
