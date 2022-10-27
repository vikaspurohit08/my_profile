export abstract class CustomError extends Error {
  abstract statusCode: number;
  field?: string;

  constructor(message: string, field?: string) {
    super(message);
    this.field = field;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
