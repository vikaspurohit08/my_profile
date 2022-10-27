import { CustomError } from "../interfaces/customError";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string, field?: string) {
    super(message, field);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message, field: this.field }];
  }
}
