import { Request, Response } from 'express';
import { ListUserReceiveComplimentsService } from '../../services/complimentsService/ListUserReceiveComplimentsService';

class ListUserReceiveComplimentsController {

  async handle( req: Request, res: Response) {
    const { user_id } = req;

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(user_id);

    return res.json(compliments);
  }
}

export default new ListUserReceiveComplimentsController();
