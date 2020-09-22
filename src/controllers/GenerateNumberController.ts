import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('/gen')
class GenerateNumberController {
  // @ts-ignore
  @get('/number')
  getNumber(req: Request, res: Response): void {
    const randomValue = Math.floor(Math.random() * (9 * (Math.pow(10, 14)))) + (Math.pow(10, 14))
    res.status(200).send({
      cardNO: randomValue
    });
  }
}