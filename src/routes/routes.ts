import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js'; 

const routes = Router();

routes.post('/register', AuthController.register);
routes.post('/login', AuthController.login);


routes.get('/profile', authMiddleware, (req, res) => {
  console.log("✅ Token validado! Enviando resposta..."); 
  res.status(200).json({ message: "Acesso autorizado! Você está dentro do sistema." });
});

export default routes;