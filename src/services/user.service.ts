import { UserModel, UserDocument } from '../models/user.model';
import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/error.message';

export async function register(req: Request, res: Response): Promise<void> {
  try {
    const user: Partial<UserDocument> = req.body;
    await UserModel.create(user);
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const user: Partial<UserDocument> = req.body;
    const foundUser = await UserModel.findOne({ name: user.name });

    if (foundUser && foundUser.password === user.password) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
}
