"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
const registerValidation_1 = __importDefault(require("../middlewares/registerValidation"));
const router = (0, express_1.Router)();
const userController = new usersController_1.default();
router.post('/', registerValidation_1.default, userController.registerUser);
exports.default = router;
