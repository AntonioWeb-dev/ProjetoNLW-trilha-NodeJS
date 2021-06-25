import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { TagsRepositories } from '../repositories/TagsRepositories';
import { getCustomRepository } from 'typeorm';
import { CustomError } from '../utils/CustomError';

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    if (user_sender === user_receiver) {
      throw new CustomError('User receiver and User sender must be different', 400);
    }

    const userReceiver = await usersRepositories.findOne(user_receiver);

    if (!userReceiver) {
      throw new CustomError('User receiver is incorrect', 400);
    }
    const tag = await tagsRepositories.findOne(tag_id);
    if (!tag) {
      throw new CustomError('Tag does not exist', 400);
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await complimentsRepositories.save(compliment);
    return compliment;
  }
}

export { CreateComplimentService };
