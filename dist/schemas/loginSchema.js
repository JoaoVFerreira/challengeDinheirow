"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().empty().required().email()
        .messages({
        'any.required': '400|Email is required',
        'string.empty': '422|Email is not allowed to be empty',
        'string.email': '422|Email must be a valid one',
    }),
    password: joi_1.default.string().min(10).empty().required()
        .messages({
        'any.required': '400|Password is required',
        'string.base': '422|Password must be a string',
        'string.min': '422|Password must be longer than 9 characters',
        'string.empty': '422|Password is not allowed to be empty',
    }),
});
exports.default = loginSchema;
