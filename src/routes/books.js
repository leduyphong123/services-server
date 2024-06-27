import express from "express";

const routerBook = express.Router();

routerBook.get("/books", (req, res) => {
  res.status(200).json("ok");
});

export default routerBook;
