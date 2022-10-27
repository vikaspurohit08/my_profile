import Joi from "joi";

const userIdQueryValidator = Joi.object({
  userId: Joi.string().required(),
});

const userSkillCreateRequestValidator = Joi.object({
  name: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
}).label("Request - user skill create request");

export default {
  userIdParamsValidator: userIdQueryValidator,
  userSkillCreateRequestValidator,
};
