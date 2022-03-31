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
require('dotenv').config();
const userModel_1 = __importDefault(require("../database/models/userModel"));
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const jwtValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token)
        return res.status(401).json({ message: 'Token not found' });
    try {
        jwt.verify(token, JWT_SECRET, (err) => {
            if (err)
                res.status(401).json({ message: 'Expired or invalid token' });
        });
        const decode = jwt.verify(token, JWT_SECRET);
        const user = yield userModel_1.default.findOne({ where: { email: decode.email } });
        req.user = user;
        next();
    }
    catch (e) {
        next(e);
    }
});
exports.default = jwtValidation;
