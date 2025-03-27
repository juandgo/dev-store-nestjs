
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  console.log(process.env.POSTGRES_PORT);
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    postgres: { // 👈 add config
      dbName: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT|| "5432", 10),
      // port: process.env.POSTGRES_PORT,
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
    },
    apiKey: process.env.API_KEY,
  };
});