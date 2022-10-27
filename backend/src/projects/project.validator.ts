import Joi from "joi";

const skillValidator = Joi.object({
  name: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
});

const projectUpdateRequestValidator = Joi.object({
  name: Joi.string().required(),
  userId: Joi.string(),
  description: Joi.string(),
  skills: Joi.array().items(skillValidator),
});

export default {
  projectUpdateRequestValidator,
};
