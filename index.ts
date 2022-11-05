import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { ArithmeticOperation, person } from "./const/const";
import bodyParser from "body-parser";
import { RequestBodyType } from "./types/types";

dotenv.config();
const app = express();
const port = process.env.PORT;

const toJSON = bodyParser.json();

app.post("/", toJSON, async (req: Request, res: Response) => {
  let result: null | number = null;

  const { x, y, operation_type } = req.body as RequestBodyType;

  if (operation_type === ArithmeticOperation.Addition) {
    result = x + y;
  } else if (operation_type === ArithmeticOperation.Multiplication) {
    result = x * y;
  } else if (operation_type === ArithmeticOperation.Subtraction) {
    result = x - y;
  }

  if (result) {
    return res
      .status(200)
      .json({ slackUsername: "dejiborewa", operation_type: operation_type, result: result });
  }
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
