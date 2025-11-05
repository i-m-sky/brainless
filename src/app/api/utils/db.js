import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default function sql(strings, ...values) {
  return pool.query(strings.join('?'), values);
}

sql.transaction = async (queries) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const results = [];
    for (const query of queries) {
      const result = await client.query(query);
      results.push(result.rows);
    }
    await client.query('COMMIT');
    return results;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};