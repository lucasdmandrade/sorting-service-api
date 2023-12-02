import express, { Request, Response } from "express";
import sortBooks from "./utils/sortBooks";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/sort", (req: Request, res: Response) => {
  try {
    const sortingOptions = JSON.parse(
      fs.readFileSync(__dirname + "/sortingConfig.json", "utf-8")
    );

    const sortedBooks = sortBooks(sortingOptions);

    res.json(sortedBooks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
