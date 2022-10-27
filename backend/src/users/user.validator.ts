import Joi from "joi";

const validateSignUpRequest = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().equal(Joi.ref("password")),
}).label("Request - Sign up");

const validateSignInRequest = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

export default {
  validateSignUpRequest,
  validateSignInRequest,
};
