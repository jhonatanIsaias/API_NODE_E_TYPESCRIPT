import express from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { router } from './routes';
import 'dotenv/config';
const server = express();
server.use(express.json());
server.use(router);

export { server };
