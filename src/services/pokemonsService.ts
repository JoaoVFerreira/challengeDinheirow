import { Op } from 'sequelize';
import pokemonModel from "../database/models/pokemonModel";
import IPokemons from "../interfaces/allPokemons";

export default class pokemonsService {
  constructor() {}

  public async listAll(): Promise<IPokemons[]> {
    const pokemons = await pokemonModel.findAll()
    return pokemons as IPokemons[]
  }

  public async getPokemonByName(pokemon: string): Promise<IPokemons> {
    const onePokemon = await pokemonModel.findOne({ where: { Name: {[Op.like]: pokemon }}})
    return onePokemon as IPokemons
  }

  public async getPokemonByType(pokemon: string): Promise<IPokemons[]>{
    const pokemonTypes = await pokemonModel.findAll({ where: { Type_1: {[Op.like]: pokemon }}})
    return pokemonTypes as IPokemons[]
  }
}