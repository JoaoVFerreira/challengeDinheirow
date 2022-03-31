import { Router } from 'express';

import pokemonsController from '../controllers/pokemonsController';

const router = Router();

const pokemonController = new pokemonsController();

router.get('/', pokemonController.listAll);

export default router;