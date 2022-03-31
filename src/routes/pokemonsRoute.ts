import { Router } from 'express';

import pokemonsController from '../controllers/pokemonsController';

import  validateJWt  from '../middlewares/validateJWT'

const router = Router();

const pokemonController = new pokemonsController();

router.get('/', validateJWt, pokemonController.listAll);
router.get('/:search', validateJWt, pokemonController.searchByName);

export default router;