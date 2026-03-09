import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db = await open({
  filename: path.join(__dirname, 'database.sqlite'),
  driver: sqlite3.Database
});

console.log('\n========== BANCO DE DADOS: database.sqlite ==========\n');

const users = await db.all('SELECT id, email, password FROM users');
console.log('--- USERS (Usuários) ---');
console.table(users);

const airplanes = await db.all('SELECT * FROM airplanes');
console.log('\n--- AIRPLANES (Aeronaves) ---');
console.table(airplanes);

const flights = await db.all('SELECT * FROM flights');
console.log('\n--- FLIGHTS (Voos) ---');
console.table(flights);

await db.close();
console.log('\n======================================================\n');
