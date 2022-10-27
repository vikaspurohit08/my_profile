import { CustomError } from "../interfaces/customError";

export class InternalServerError extends CustomError {
  statusCode = 500;

  constructor(message: string = "Internal Server Error") {
    super(message);

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return [{ message: "Internal Server Error" }];
  }
}
