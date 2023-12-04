import express, { Request, Response } from "express";
import sortController from "@/controllers/sort";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/sort", sortController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
