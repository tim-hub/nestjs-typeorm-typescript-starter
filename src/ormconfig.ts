import { ConnectionOptions } from 'typeorm';
import dotEnvExtended from 'dotenv-extended';

dotEnvExtended.load(); // load for db migration, not import through main.ts

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ? process.env.DB_HOST : 'localhost',
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  username: process.env.DB_USER ? process.env.DB_USER : 'postgres',
  password: process.env.DB_PWD ? process.env.DB_PWD : '',
  database: process.env.DB_NAME ? process.env.DB_NAME : 'postgres',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore config for nest, not typeorm
  autoLoadEntities: true,
  synchronize: false,
  migrationsRun: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*.{ts,js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    // make cli migration works
    migrationsDir: 'src/migrations',
  },
};

export = connectionOptions;
