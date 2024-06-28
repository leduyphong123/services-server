import express from "express";
import * as bookController from "../controller/bookController"

const routerBook = express.Router();

routerBook.get("/books", bookController.getBooks);

export default routerBook;
