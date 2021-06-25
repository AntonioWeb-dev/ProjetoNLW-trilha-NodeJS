import { Request, Response } from 'express';
import { ListTagsService } from '../../services/tagsServices/ListTagsService';


class ListTagsController {

  async handle(req: Request, res: Response) {
    const listTagsService = new ListTagsService();
    const tags = await listTagsService.execute();

    return res.json(tags);
  }
}

export default new ListTagsController();
