import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../../repositories/TagsRepositories";
import { CustomError } from '../../utils/CustomError';

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new CustomError('Name incorrect', 400);
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name });
    if (tagAlreadyExists) {
      throw new CustomError('Tag already exists', 400);
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);
    return tag;
  }
}

export { CreateTagService };
