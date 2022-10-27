import { Request, Response, NextFunction } from "express";
import { CustomError } from "../interfaces/customError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("error", err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
};
