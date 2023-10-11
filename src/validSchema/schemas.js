import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().max(30),
  lastName: Joi.string().trim().required().max(30),
  email: Joi.string().email({ tlds: { allow: false } }),
  username: Joi.string().trim().required().max(16),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});
