import fs from "node:fs";
import path from "node:path";
import sqlite3 from "sqlite3";
import { open, type Database } from "sqlite";

const dataDirectory = path.join(process.cwd(), "data");
const databasePath = path.join(dataDirectory, "nexuzbee.db");

declare global {
  // eslint-disable-next-line no-var
  var __nexuzbeeDb: Promise<Database<sqlite3.Database, sqlite3.Statement>> | undefined;
}

async function initialiseDatabase() {
  fs.mkdirSync(dataDirectory, { recursive: true });

  const db = await open({
    filename: databasePath,
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      service TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  return db;
}

export function getDb() {
  if (!global.__nexuzbeeDb) {
    global.__nexuzbeeDb = initialiseDatabase();
  }

  return global.__nexuzbeeDb;
}

export { databasePath };
