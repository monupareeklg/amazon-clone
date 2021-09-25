module.exports = {
    HOST: "localhost",
    USER: "toor",
    PASSWORD: "toor",
    DB: "amazon",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  