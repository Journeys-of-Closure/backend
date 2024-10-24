import * as userController from "../controllers/user.controller";
import express, { Request, Response, Router } from "express";
const router = Router();

router.post("/login", userController.loginOne);
router.post("/register", userController.registerOne);

export {router as userRouter};
