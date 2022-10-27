import { Router, Request, Response } from "express";
import { createValidator, ValidatedRequest } from "express-joi-validation";
import { validateRequest } from "../common/middleware/validateRequest";
import { errorCatch } from "../common/util/error-utils";
import { SkillsEnum } from "./skills.enum";
import { IUserSchema } from "./userSkill.type";
import userSkillsService from "./userSkills.service";
import userSkillsValidator from "./userSkills.validator";

const userSkillRouter = Router({});
const validator = createValidator();

userSkillRouter.get("/skills", async (req, res) => {
  res.status(200).send(Object.values(SkillsEnum));
});

userSkillRouter.patch(
  "/users/:userId/skills",
  validator.params(userSkillsValidator.userIdParamsValidator),
  validator.body(userSkillsValidator.userSkillCreateRequestValidator),
  validateRequest,
  async (req: ValidatedRequest<IUserSchema>, res: Response) => {
    try {
      const { userId } = req.params;
      const response = await userSkillsService.create({ userId, ...req.body });
      res.status(201).send(response);
    } catch (error) {
      errorCatch(error, res);
    }
  }
);

userSkillRouter.get(
  "/users/:userId/skills",
  validator.params(userSkillsValidator.userIdParamsValidator),
  validateRequest,
  async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const response = await userSkillsService.getByUserId(userId);
      res.status(200).send(response);
    } catch (error) {
      errorCatch(error, res);
    }
  }
);

export { userSkillRouter };
