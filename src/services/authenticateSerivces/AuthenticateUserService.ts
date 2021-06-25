import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


import { CustomError } from "../../utils/CustomError";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UsersRepositories);
    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new CustomError('Email or password incorrect', 400);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new CustomError('Email or password incorrect', 400);
    }
    const token = sign({
      email: user.email,
    }, process.env.JWT_SECRET, {
      subject: user.userId,
      expiresIn: process.env.JWT_EXPIRATION
    });

    return token;
  }
}

export { AuthenticateUserService };
