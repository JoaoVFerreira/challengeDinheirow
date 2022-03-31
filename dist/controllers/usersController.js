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
const usersService_1 = __importDefault(require("../services/usersService"));
const userModel_1 = __importDefault(require("../database/models/userModel"));
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256'
};
class usersController {
    constructor() {
        this.registerUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const userAlreadyExist = yield userModel_1.default.findOne({ where: { email } });
                if (userAlreadyExist)
                    return res.status(409).json({ message: 'User already registered' });
                const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
                this.userService.registerUser(req.body);
                return res.status(201).json({ token });
            }
            catch (e) {
                next(e);
            }
        });
        this.loginUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const verifyUser = yield userModel_1.default.findOne({ where: { email } });
                if (!verifyUser)
                    return res.status(400).json({ message: 'Invalid fields' });
                const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
                return res.status(200).json({ token });
            }
            catch (e) {
                next(e);
            }
        });
        this.userService = new usersService_1.default();
    }
}
exports.default = usersController;
