import { Request, Response } from 'express';
import { initDatabase } from '../config/database.js';

export class FlightController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { numeroVoo, origem, destino, horarioPartida, horarioChegada, portao, status } = req.body;
      const db = await initDatabase();

      await db.run(
        "INSERT INTO flights (numeroVoo, origem, destino, horarioPartida, horarioChegada, portao, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [numeroVoo, origem, destino, horarioPartida, horarioChegada, portao, status]
      );

      res.status(201).json({ message: "Voo cadastrado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao cadastrar voo" });
    }
  }

  async listAll(req: Request, res: Response): Promise<void> {
    try {
      const db = await initDatabase();
      const flights = await db.all("SELECT * FROM flights");
      res.status(200).json(flights);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar voos" });
    }
  }
}

export default new FlightController();