/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadeController } from '../controllers/CidadeController';

const router = Router();
const cidadeController = new CidadeController();

router.get('/', () => console.log('olá mundo'));

router.post(
  '/cidades',
  cidadeController.createBodyValidation,
  cidadeController.create,
);

export { router };
