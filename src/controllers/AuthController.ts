import { Request, Response } from 'express';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; 
import { initDatabase } from '../config/database.js';

export class AuthController {
  
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, senha } = req.body;

      if (!senha || !email) {
        res.status(400).json({ error: "Email e senha são obrigatórios" });
        return;
      }

      const passwordHash = await bcrypt.hash(senha, 10);
      const db = await initDatabase();

      await db.run(
        "INSERT INTO users (email, password) VALUES (?, ?)", 
        [email, passwordHash]
      );

      res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao processar cadastro" });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, senha } = req.body;
      const db = await initDatabase();

      const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);

      if (!user) {
        res.status(404).json({ error: "Usuário não encontrado" });
        return;
      }

      
      const match = await bcrypt.compare(senha, user.password);

      if (!match) {
        res.status(401).json({ error: "Senha incorreta" });
        return;
      }

      
      const secret = "secret-key";

      const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1d' });

      res.status(200).json({ 
        message: "Login bem-sucedido",
        token: token,
        user: { id: user.id, email: user.email }
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao processar login" });
    }
  }
}

export default new AuthController();