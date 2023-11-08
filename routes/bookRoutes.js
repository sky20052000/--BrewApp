const express = require("express");
const bookController = require("../controller/bookController");
const bookRouter = express.Router();
const Role = require("../middleware/auth");
bookRouter.use(express.json());
bookRouter.use(express.urlencoded({ extended: true }));

bookRouter.post("/addbook",Role([1]),bookController.addBook);
bookRouter.get("/getbooklist",Role([1]),bookController.getBookList);
bookRouter.get("/getbookdetail/:id",Role([1]),bookController.getBookDetail);
bookRouter.delete("/deletebook/:id",Role([1]),bookController.deleteBook);
bookRouter.put("/updatebook",Role([1]),bookController.updateBook);


module.exports = bookRouter;