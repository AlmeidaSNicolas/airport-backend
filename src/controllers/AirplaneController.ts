import { Request, Response } from 'express';
import { initDatabase } from '../config/database.js';
import { AirPlane } from '../models/airPlane.js';

export class AirplaneController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { modelo, prefixo, capacidade, companhia, emManutencao } = req.body;
      const db = await initDatabase();

      // SQLite salva boolean como 0 ou 1
      const manutencaoValue = emManutencao ? 1 : 0;

      await db.run(
        "INSERT INTO airplanes (modelo, prefixo, capacidade, companhia, emManutencao) VALUES (?, ?, ?, ?, ?)",
        [modelo, prefixo, capacidade, companhia, manutencaoValue]
      );

      res.status(201).json({ message: "Aeronave cadastrada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao cadastrar aeronave" });
    }
  }
}

export default new AirplaneController();