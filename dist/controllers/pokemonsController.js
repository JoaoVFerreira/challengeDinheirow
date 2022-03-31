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
const pokemonsService_1 = __importDefault(require("../services/pokemonsService"));
class pokemonsController {
    constructor() {
        this.listAll = (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allPokemons = yield this.pokemonsService.listAll();
                return res.status(200).json(allPokemons);
            }
            catch (e) {
                next(e);
            }
        });
        this.searchByName = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemonName = req.params.search;
                if (!pokemonName)
                    return res.status(200).json([]);
                const pokemon = yield this.pokemonsService.getOnePokemon(pokemonName);
                if (!pokemon)
                    return res.status(404).json({ message: `${pokemonName} does not exists in our DB` });
                return res.status(200).json(pokemon);
            }
            catch (e) {
                next(e);
            }
        });
        this.pokemonsService = new pokemonsService_1.default();
    }
}
exports.default = pokemonsController;
