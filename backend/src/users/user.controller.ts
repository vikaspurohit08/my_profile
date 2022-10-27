import { Router, Response } from "express";
import { createValidator, ValidatedRequest } from "express-joi-validation";
import { validateRequest } from "../common/middleware/validateRequest";
import { errorCatch } from "../common/util/error-utils";
import userService from "./user.service";
import { IAuthInputRequest } from "./user.type";
import userValidator from "./user.validator";

const userRouter = Router();
const validator = createValidator({});

userRouter.post(
  "/users/signup",
  validator.body(userValidator.validateSignUpRequest),
  validateRequest,
  async (req: ValidatedRequest<IAuthInputRequest>, res: Response) => {
    try {
      const input = req.body;
      const user = await userService.signUp(input);
      res.status(201).send(user);
    } catch (error) {
      errorCatch(error, res);
    }
  }
);

userRouter.post(
  "/users/signin",
  validator.body(userValidator.validateSignInRequest),
  validateRequest,
  async (req: ValidatedRequest<IAuthInputRequest>, res: Response) => {
    try {
      const input = req.body;
      const user = await userService.signIn(input);
      res.status(200).send(user);
    } catch (error) {
      errorCatch(error, res);
    }
  }
);

export { userRouter };
