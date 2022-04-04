import express from 'express';

import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import cors from 'cors';

import pokemonsRouter from './routes/pokemonsRoute';

import userRouter from './routes/userRegisterRoute';

import loginRouter from './routes/loginRoute';

import appError from './middlewares/handleError';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/pokemons', pokemonsRouter)

app.use('/register', userRouter)

app.use('/login', loginRouter)

app.use(appError);

export default app;