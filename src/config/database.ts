import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

export const initDatabase = async (): Promise<Database> => {
    const db = await open({
        filename: path.join(process.cwd(), 'database.sqlite'),
        driver: sqlite3.Database
    });

    // 1. Tabela de Usuários
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    `);

    // 2. Tabela de Voos (Flight)
    await db.exec(`
        CREATE TABLE IF NOT EXISTS flights (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numeroVoo TEXT NOT NULL,
            origem TEXT NOT NULL,
            destino TEXT NOT NULL,
            horarioPartida TEXT NOT NULL,
            horarioChegada TEXT NOT NULL,
            portao TEXT NOT NULL,
            status TEXT NOT NULL
        )
    `);

    // 3. Tabela de Aeronaves (AirPlane)
    await db.exec(`
        CREATE TABLE IF NOT EXISTS airplanes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            modelo TEXT NOT NULL,
            prefixo TEXT NOT NULL UNIQUE,
            capacidade INTEGER NOT NULL,
            companhia TEXT NOT NULL,
            emManutencao INTEGER NOT NULL DEFAULT 0 
        )
    `);

    console.log("Tabelas do aeroporto prontas para decolagem!");
    return db;
};
