import { Router } from 'express';

import pokemonsController from '../controllers/pokemonsController';

import  validateJWt  from '../middlewares/validateJWT'

const router = Router();

const pokemonController = new pokemonsController();

router.get('/name/:search', validateJWt, pokemonController.searchByName);
router.get('/type/:search', validateJWt, pokemonController.searchByType);
router.get('/', validateJWt, pokemonController.listAll);

export default router;