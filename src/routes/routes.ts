import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import FlightController from '../controllers/FlightController.js';
import AirplaneController from '../controllers/AirplaneController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const routes = Router();

// Rotas de Usuário (Auth)
routes.post('/register', AuthController.register);
routes.post('/login', AuthController.login);

// Rota de Teste de Perfil (Protegida)
routes.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({ message: "Acesso autorizado!" });
});

// Rotas de Aeronaves (Protegidas)
routes.post('/airplanes', authMiddleware, AirplaneController.create);

// Rotas de Voos
routes.post('/flights', authMiddleware, FlightController.create); // Protegida
routes.get('/flights', FlightController.listAll); // Pública

export default routes;