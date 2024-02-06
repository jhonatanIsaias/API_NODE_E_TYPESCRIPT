import { NextFunction, Request, Response } from 'express';
import { Icidade } from '../interfaces/Cidade';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

export class CidadeController {
  // eslint-disable-next-line @typescript-eslint/ban-types
  async create(req: Request<{}, {}, Icidade>, res: Response) {
    console.log(req.body);
    return res.send('estou funcinanodo pelo controller');
  }
  async createBodyValidation(
    // eslint-disable-next-line @typescript-eslint/ban-types
    req: Request<{}, {}, Icidade>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      await bodyValidation.validate(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      const yupError = error as yup.ValidationError;
      const validationErrors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        if (!error.path) return;
        validationErrors[error.path] = error.message;
      });
      return res.status(StatusCodes.BAD_REQUEST).json({
        errors: validationErrors,
      });
    }
  }
}
const bodyValidation: yup.Schema<Icidade> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required(),
});
