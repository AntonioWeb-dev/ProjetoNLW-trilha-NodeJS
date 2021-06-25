import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";
import { CustomError } from "../../utils/CustomError";



class ListTagsService {

  async execute() {
    const TagRepositories = getCustomRepository(TagsRepositories);

    let tags = await TagRepositories.find();
    if (!tags) {
      throw new CustomError('tags not found', 400);
    }


    return classToPlain(tags);
  }
}

export { ListTagsService };
