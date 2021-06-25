import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { hash } from 'bcryptjs';

import { CustomError } from '../utils/CustomError';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {

  async execute({ name, email, admin, password} : IUserRequest) {
    const userRepository = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await userRepository.findOne({email});

    if (!email) {
      throw new CustomError('Email incorrect', 400);
    }
    if (userAlreadyExists) {
      throw new CustomError('Email already registered', 400);
    }

    const passwordHash = await hash(password, 8);
    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
