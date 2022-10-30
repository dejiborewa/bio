import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

const person = {
  slackUsername: "dejiborewa",
  backend: true,
  age: 26,
  bio: "I'm Ayodeji, a software engineer with interest in building applications that are performant, reliable and scalable.",
};

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json(person);
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
