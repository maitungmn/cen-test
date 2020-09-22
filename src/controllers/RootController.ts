import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('')
class RootController {
  // @ts-ignore
  @get('/')
  getRoot(req: Request, res: Response) {
    res.status(200).send('Hello World!')
  }
}
