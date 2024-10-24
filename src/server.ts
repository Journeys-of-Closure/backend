import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes";
import { getErrorMessage } from './utils/error.message';

const app = express();

const port = process.env.PORT;

// Enable .env
dotenv.config();

// Middlewares
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("This is the API default route");
});

app.use("/api", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ error: "Internal Server Error", message: err.message });
});

app.listen(port, () => {
  console.log("Server running on port: " + port);
});

