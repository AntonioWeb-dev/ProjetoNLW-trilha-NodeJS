import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { CustomError } from '../utils/CustomError';

interface Ipayload {
  sub: string;
}

export function ensureAuthenticated (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;
  if (!token) {
    throw new CustomError('Token missing', 401);
  }

  try {
    const { sub }= verify(token.split(' ')[1], process.env.JWT_SECRET) as Ipayload;
    req.user_id = sub;
  } catch (err) {
    throw new CustomError('Email/Password invalid', 401);
  }


  return next();
}
