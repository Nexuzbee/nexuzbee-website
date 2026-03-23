import { Pool } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var __nexuzbeePool: Pool | undefined;
  // eslint-disable-next-line no-var
  var __nexuzbeeSchemaReady: Promise<void> | undefined;
}

function createPool() {
  const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("Missing POSTGRES_URL or DATABASE_URL environment variable.");
  }

  return new Pool({
    connectionString
  });
}

export function getPool() {
  if (!global.__nexuzbeePool) {
    global.__nexuzbeePool = createPool();
  }

  return global.__nexuzbeePool;
}

export async function ensureSchema() {
  if (!global.__nexuzbeeSchemaReady) {
    const pool = getPool();

    global.__nexuzbeeSchemaReady = pool
      .query(`
        CREATE TABLE IF NOT EXISTS enquiries (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          company TEXT,
          service TEXT NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
      `)
      .then(() => undefined);
  }

  return global.__nexuzbeeSchemaReady;
}
