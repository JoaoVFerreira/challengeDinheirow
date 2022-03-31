import { Op } from 'sequelize';
import pokemonModel from "../database/models/pokemonModel";
import IPokemons from "../interfaces/allPokemons";

export default class pokemonsService {
  constructor() {}

  public async listAll(): Promise<IPokemons[]> {
    const pokemons = await pokemonModel.findAll()
    return pokemons as IPokemons[]
  }

  public async getOnePokemon(pokemon: any): Promise<IPokemons> {
    const name = pokemon;

    const onePokemon = await pokemonModel.findOne({ where: { Name: {[Op.like]: name }}})
    return onePokemon as IPokemons
  }
}