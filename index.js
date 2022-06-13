require("dotenv").config({
  path: ".env",
});
const app = require("./app");

const connectDatabase = require("./config/index");
const server = app.listen(process.env.PORT || 8000, () => {
  connectDatabase();
});
module.exports = server;
