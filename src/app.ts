import express from 'express';

import pokemonsRouter from './routes/pokemonsRoute';

import userRouter from './routes/userRegisterRoute';

import loginRouter from './routes/loginRoute';

import appError from './middlewares/handleError';

const app = express();

app.use(express.json());

app.use('/pokemons', pokemonsRouter)

app.use('/register', userRouter)

app.use('/login', loginRouter)

app.use(appError);

export default app;