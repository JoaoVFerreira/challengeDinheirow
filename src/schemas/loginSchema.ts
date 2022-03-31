import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object({
  email: Joi.string().empty().required().email()
    .messages({
      'any.required': '400|Email is required',
      'string.empty': '422|Email is not allowed to be empty',
      'string.email': '422|Email must be a valid one',
    }),
  password: Joi.string().min(10).empty().required()
    .messages({
      'any.required': '400|Password is required',
      'string.base': '422|Password must be a string',
      'string.min': '422|Password must be longer than 9 characters',
      'string.empty': '422|Password is not allowed to be empty',
    }),
});

export default loginSchema;