import express, { Request, Response } from "express";
import sortBooks from "./utils/sortBooks";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/sort", (req: Request, res: Response) => {
  try {
    const sortedBooks = sortBooks(req.body);

    res.json(sortedBooks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
