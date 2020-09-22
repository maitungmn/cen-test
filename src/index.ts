import { AppRouter } from './AppRouter';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import './controllers/GenerateNumberController';
import './controllers/RootController';

const app = express();

const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
