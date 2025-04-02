import { DataSource } from 'typeorm';


// export const appDataSource = new DataSource({
//   type: 'postgres',
//   // url: process.env.DATABASE_URL,
//   url: 'postgres://juan:admin123@localhost:5432/my_store',
//   synchronize: false,
//   logging: true,
//   // entities: ['src/**/*.entity*.entity{.js,.ts}'],
//   entities: ['src/products/entities/*.entity{.js,.ts}'],

//   // entities: ['src/**/*.entity.ts'],
//   migrations: ['src/database/migrations/*.{js,ts}'],
//   // migrations: ['src/database/migrations/*.ts'],
//   migrationsTableName: 'migrations',
// });

export const appDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://juan:admin123@localhost:5432/my_store',
  synchronize: false,
  logging: true,
  entities: ['src/products/entities/*.entity{.js,.ts}'],
  migrations: ['src/database/migrations/*.{js,ts}'],
  migrationsTableName: 'migrations',
});

