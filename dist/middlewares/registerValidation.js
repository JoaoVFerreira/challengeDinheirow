"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerSchema_1 = __importDefault(require("../schemas/registerSchema"));
const registerValidate = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = registerSchema_1.default.validate(req.body);
    if (error) {
        const [status, message] = error.message.split('|');
        const handleError = { status: Number(status), message };
        return next(handleError);
    }
    return next();
});
exports.default = registerValidate;
