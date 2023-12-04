import fs from "fs";
import { Request, Response } from "express";
import sortBooks from "@/utils/sortBooks";

const sortController = (req: Request, res: Response) => {
  try {
    const sortingOptions = !Object.keys(req.body).length
      ? JSON.parse(fs.readFileSync("./src/sortingConfig.json", "utf-8"))
      : req.body;

    const sortedBooks = sortBooks(sortingOptions);

    res.json(sortedBooks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default sortController;
