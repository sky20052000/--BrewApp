const express = require("express");
const userController = require("../controller/userController");
const userRouter = express.Router();
userRouter.use(express.json());
userRouter.use(express.urlencoded({ extended: true }));

userRouter.post("/register", userController.regsiterUSer);
userRouter.post("/login", userController.loginUser);



module.exports = userRouter;