"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginSchema_1 = __importDefault(require("../schemas/loginSchema"));
const loginAuth = (req, _res, next) => {
    const { error } = loginSchema_1.default.validate(req.body);
    if (error) {
        const [status, message] = error.message.split('|');
        const handleError = { status: Number(status), message };
        return next(handleError);
    }
    return next();
};
exports.default = loginAuth;
