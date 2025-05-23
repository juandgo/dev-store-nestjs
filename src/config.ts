import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  console.log(process.env.POSTGRES_PORT);
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    postgres: {
      // 👈 add config
      dbName: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
    },
    mysql: {
      // 👈 add config
      dbName: process.env.MYSQL_DB,
      port: parseInt(process.env.MYSQL_PORT || '3306', 10),
      password: process.env.MYSQL_ROOT_PASSWORD,
      user: process.env.MYSQL_USER,
      host: process.env.MYSQL_HOST,
    },
    apiKey: process.env.API_KEY,
  };
});
