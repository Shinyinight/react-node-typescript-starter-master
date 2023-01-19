import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/sum', (req: Request, res: Response) => {
  const { firstNumber, secondNumber } = req.body;
  const parsedFirstNumber = parseInt(firstNumber);
  const parsedSeondNumber = parseInt(secondNumber);
  if (parsedFirstNumber && parsedSeondNumber) {
    const sum = parsedFirstNumber + parsedSeondNumber;
    res.send({ result: sum });
  } else {
    res.status(400);
    res.send({ error: 'input should be number' });
  }
});

export { app };
