import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Alguém tentando entrar na área restrita...")
  
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Token não fornecido. Acesso negado." });
    return;
  }

 
  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    res.status(401).json({ error: "Erro no formato do token." });
    return;
  }

  const [scheme, token] = parts;

  
  if (!/^Bearer$/i.test(scheme)) {
    res.status(401).json({ error: "Token malformatado." });
    return;
  }

  try {
    const secret = "secret-key";
    
    const decoded = jwt.verify(token, secret);
    
   
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido ou expirado." });
  }
};