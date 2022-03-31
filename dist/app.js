"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemonsRoute_1 = __importDefault(require("./routes/pokemonsRoute"));
const handleError_1 = __importDefault(require("./middlewares/handleError"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/pokemons', pokemonsRoute_1.default);
app.use(handleError_1.default);
exports.default = app;
