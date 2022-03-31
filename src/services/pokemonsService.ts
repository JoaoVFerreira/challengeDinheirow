import pokemonModel from "../database/models/pokemonModel";

export default class pokemonsService {
  constructor() {}

  async listAll() {
    return pokemonModel.findAll()
  }
}