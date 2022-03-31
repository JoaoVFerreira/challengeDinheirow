import { NextFunction, Request, Response } from "express"
import PokemonsService from "../services/pokemonsService"

export default class pokemonsController {
  private pokemonsService: PokemonsService

  constructor() {
    this.pokemonsService = new PokemonsService()
  }

  public listAll = async (_req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
    try {
      const allPokemons = await this.pokemonsService.listAll();
      
      return res.status(200).json(allPokemons);
    } catch (e) {
      next(e)
    }
  }

  public searchByName = async (req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
    try {
      const pokemonName = req.params;

      if (!pokemonName) return res.status(200).json([])

      const pokemon = await this.pokemonsService.getOnePokemon(pokemonName)

      if (!pokemon) return res.status(404).json({ message: `${pokemonName} does not exists in our DB` })

      return res.status(200).json(pokemon)

    } catch (e) {
      next(e)
    }
  }
}