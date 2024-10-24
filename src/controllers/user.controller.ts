import express, { Request, Response, RequestHandler } from 'express';
import * as userService from '../services/user.service';
import { getErrorMessage } from '../utils/error.message';

export const loginOne: RequestHandler = async (req: Request, res: Response) => {
  try {
    const foundUser = await userService.login(req, res);
    res.status(200).send(foundUser);
  } catch (err) {
    return res.status(500).send(getErrorMessage(err));
  }
}

export const registerOne: RequestHandler = async (req: Request, res: Response) => {
  try {
    await userService.register(req, res);
    res.status(200).send("User Created Successfully!");
  } catch (err) {
    return res.status(500).send(getErrorMessage(err));
  }
}
