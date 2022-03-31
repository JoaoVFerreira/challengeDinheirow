import Joi, { ObjectSchema } from 'joi';

const registerSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(5).empty().required()
    .messages({
      'any.required': '400|Name is required',
      'string.base': '422|Name must be a string',
      'string.min': '422|Name must be longer than 4 characters',
      'string.empty': '422|Name is not allowed to be empty',
    }),
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

export default registerSchema;