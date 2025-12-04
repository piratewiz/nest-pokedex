export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongobd: process.env.MONGODB,
  port: process.env.PORT || 3002,
  defaultLimit: Number(process.env.DEFAULT_LIMIT) || 8,
});
