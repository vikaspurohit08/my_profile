import { json } from "body-parser";
import express from "express";
import { errorHandler } from "./common/middleware/errorHandler";
import { userSkillRouter } from "./userSkills/userSkill.controller";
import { userRouter } from "./users/user.controller";
import { projectRouter } from "./projects/project.controller";

const app = express();
app.use(json());
app.use(userRouter);
app.use(userSkillRouter);
app.use(projectRouter);
app.use(errorHandler);

export { app };
