export default () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),

  nodeEnv: process.env.NODE_ENV ?? 'development',

  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:5173',

  database: {
    url: process.env.DATABASE_URL,
  },

  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
});
