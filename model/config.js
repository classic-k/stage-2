
export const config = {

host: process.env.DBHost,
user: process.env.DBUser,
password: process.env.DBPass,
database: process.env.DB, 
port: process.env.Port || 5432 
}

