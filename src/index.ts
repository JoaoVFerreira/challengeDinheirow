require('dotenv').config()

import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(
  `Server is running on ${PORT}`,
));

// BONUS => DOCKER, CI/CD, LIMITER