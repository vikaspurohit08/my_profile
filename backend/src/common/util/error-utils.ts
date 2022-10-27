import { Response } from "express";
import { CustomError } from "../interfaces/customError";

const errorCatch = (error: any, res: Response) => {
  if (error instanceof CustomError) {
    res.status(error.statusCode).send(error.serializeErrors());
  } else {
    res.status(500).send({ message: "Something went wrong" });
  }
};

export { errorCatch };
