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
const userModel_1 = __importDefault(require("../database/models/userModel"));
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256'
};
const verifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const userAlreadyExist = yield userModel_1.default.findOne({ where: email });
        if (userAlreadyExist)
            return res.status(409).json({ message: 'User already registered' });
        const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
        req.token = token;
        next();
    }
    catch (e) {
        next(e);
    }
    return next();
});
exports.default = verifyUser;
