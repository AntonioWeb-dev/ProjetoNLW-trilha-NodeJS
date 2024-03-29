import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories";


class ListUserSendComplimentsService {

  async execute(user_id) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      relations: ['userSender', 'tag'],
    });
    return compliments;
  }
}

export { ListUserSendComplimentsService }
