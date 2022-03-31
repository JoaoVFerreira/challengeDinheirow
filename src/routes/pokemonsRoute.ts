import { Router } from 'express';

import pokemonsController from '../controllers/pokemonsController';

import  validateJWt  from '../middlewares/validateJWT'

const router = Router();

const pokemonController = new pokemonsController();

router.get('/:search', validateJWt, pokemonController.searchByName);
router.get('/', validateJWt, pokemonController.listAll);

export default router;