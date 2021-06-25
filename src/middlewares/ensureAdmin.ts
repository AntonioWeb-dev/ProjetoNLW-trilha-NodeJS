import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';

import { UsersRepositories } from '../repositories/UsersRepositories';
import { CustomError } from '../utils/CustomError';

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
  ) {
  const usersRepositories = getCustomRepository(UsersRepositories);

  const { user_id } = req;


  // verificar user admin
  const { admin } = await usersRepositories.findOne(user_id);

  if (admin) {
    return next();
  }
  throw new CustomError('User is not admin', 401);
}
