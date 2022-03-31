import express from 'express';

import pokemonsRouter from './routes/pokemonsRoute';

import appError from './middlewares/handleError';

const app = express();

app.use(express.json());

app.use('/pokemons', pokemonsRouter)

app.use(appError);

export default app;