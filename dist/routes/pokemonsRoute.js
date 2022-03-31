"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemonsController_1 = __importDefault(require("../controllers/pokemonsController"));
const router = (0, express_1.Router)();
const pokemonController = new pokemonsController_1.default();
router.get('/', pokemonController.listAll);
exports.default = router;
