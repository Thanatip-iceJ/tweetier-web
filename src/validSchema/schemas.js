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

export const loginSchema = Joi.object({
  emailOrUsername: Joi.alternatives([
    Joi.string().email({ tlds: { allow: false } }),
    Joi.string()
      .trim()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  ]),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

export const editProfileSchema = Joi.object({
  firstName: Joi.string().trim().required().max(30),
  lastName: Joi.string().trim().required().max(30),
  bio: Joi.string().allow("").optional().max(100),
});

export const postSchema = Joi.object({
  postContent: Joi.string().required().max(300),
});
