import * as redisStore from 'cache-manager-redis-store';

const Cache_Default_Config = {
  store: redisStore,
  host: process.env.REDIS_HOST ?? 'localhost',
  port: 6379,
  ttl: 30, // 30 seconds, because collarStatus updates per minute, so worst case for users is waiting is 30*2 seconds
};

export const getCacheConfig = () => {
  return Cache_Default_Config;
};

export const getTestingDBConfigInMem = (testConnectionName): any => ({
  type: 'sqlite',
  database: ':memory:',
  dropSchema: true,
  entities: [], // setting entities before using this
  synchronize: true,
  logging: false,
  name: testConnectionName,
});
