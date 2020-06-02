import express from 'express';
import Bundler from 'parcel-bundler';
import path from 'path';
import http from 'http';
import socketIOServer from 'socket.io';

import initializeSocketIO from './socket';

const app = express();
const server = new http.Server(app);
const io = socketIOServer(server);
const port = 8080 || process.env.PORT;
const bundler = new Bundler(path.join(__dirname, '../src/client/index.html'));

initializeSocketIO(io);
app.use(bundler.middleware());

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`)
})
