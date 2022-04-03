import { NextFunction, Request, Response } from "express"
import PokemonsService from "../services/pokemonsService"

export default class pokemonsController {
  private pokemonsService: PokemonsService

  constructor() {
    this.pokemonsService = new PokemonsService()
  }

  public listAll = async (req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
    try {
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);
      const allPokemons = await this.pokemonsService.listAll();

      if (page && limit) {
        const startIndex: number = Number((page - 1) * limit);
        const endIndex: number = Number(page * limit);
        const paginatedPokemons = allPokemons.slice(startIndex, endIndex);
        
        return res.status(200).json(paginatedPokemons);
      }

      return res.status(200).json(allPokemons)
     
    } catch (e) {
      next(e)
    }
  }

  public searchByName = async (req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
    try {
      const pokemonName = req.params.search;

      if (!pokemonName) return res.status(200).json([])

      const pokemon = await this.pokemonsService.getPokemonByName(pokemonName)

      if (!pokemon) return res.status(404).json({ message: `${pokemonName} does not exists in our DB` })

      return res.status(200).json(pokemon)

    } catch (e) {
      next(e)
    }
  }

  public searchByType = async (req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> => {
    try {
      const pokemonType = req.params.search;

      if (!pokemonType) return res.status(200).json([])

      const pokemon = await this.pokemonsService.getPokemonByType(pokemonType)

      if (!pokemon) return res.status(404).json({ message: `${pokemonType} does not exists in our DB` })

      return res.status(200).json(pokemon)

    } catch (e) {
      next(e)
    }
  }
}