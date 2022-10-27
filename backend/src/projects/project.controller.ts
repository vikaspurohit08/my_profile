import { Router, Request, Response } from "express";
import { createValidator, ValidatedRequest } from "express-joi-validation";
import { errorCatch } from "../common/util/error-utils";
import projectService from "./project.service";
import { IProjectRequestSchema } from "./project.type";
import projectValidator from "./project.validator";

const projectRouter = Router();
const validator = createValidator();

projectRouter.post(
  "/users/projects",
  validator.body(projectValidator.projectUpdateRequestValidator),
  async (req: ValidatedRequest<IProjectRequestSchema>, res: Response) => {
    try {
      const response = await projectService.update(req.body);
      res.status(201).send(response);
    } catch (error) {
      errorCatch(error, res);
    }
  }
);

projectRouter.get(
  "/users/:userId/projects",
  async (req: Request, res: Response) => {
    try {
      const response = await projectService.getByUserId(req.params.userId);
      res.status(200).send(response);
    } catch (error) {
      errorCatch(error, res);
    }
  }
);

export { projectRouter };
