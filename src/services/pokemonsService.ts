import pokemonModel from "../database/models/pokemonModel";
import IPokemons from "../interfaces/allPokemons";

export default class pokemonsService {
  constructor() {}

  public async listAll(): Promise<IPokemons[]> {
    const pokemons = await pokemonModel.findAll()
    return pokemons as IPokemons[]
  }
}