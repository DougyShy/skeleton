const config = {
  env: process.env.NODE_ENV || "dev", // ** CHECK THIS **
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "fossil69",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/skeleton",
};
export default config;
