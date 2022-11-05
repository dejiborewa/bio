import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { ArithmeticOperation } from "./const/const";
import bodyParser from "body-parser";
import { RequestBodyType } from "./types/types";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post("/", async (req: Request, res: Response) => {
  let result: null | number = null;

  const { x, y, operation_type } = (await req.body) as RequestBodyType;

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
  } else {
    return res.json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
