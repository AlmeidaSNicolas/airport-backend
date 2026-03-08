import express from 'express';

import routes from './routes/routes.js'; 

const app = express();

app.use(express.json());
app.use(routes); 

app.listen(3333, () => {
  console.log('Servidor decolou em http://localhost:3333');
});