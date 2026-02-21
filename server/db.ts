import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/postgres'
const sql = postgres(connectionString)

export default sql