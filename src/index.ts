import express, { Request, Response } from "express";
import { SortingService } from "./sortingService";

const app = express();
const port = 3000;

app.use(express.json());

const sortingService = new SortingService();

app.post("/sort", (req: Request, res: Response) => {
  try {
    const sortedBooks = sortingService.sortBooks(req.body);
    console.log("RESPONSE: ", sortedBooks);
    res.json(sortedBooks);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
