import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/CustomError';

export const HandleError = (err: CustomError, req: Request, res: Response, next:NextFunction) => {

  if (err instanceof Error) {
    return res.status(err.status).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: 'Error',
    error: 'Internal error',
  });
};
