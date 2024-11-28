import express from "express";
import { evaluateController } from "./evaluate.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", evaluateController);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
