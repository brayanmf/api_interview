const express = require("express");
const auth = require("./auth");

const errorMiddleware = require("./middleware/error");
const app = express();
const cors = require("cors");
const corsOptions = {
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  origin: process.env.FRONTEND_ENDPOINT,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1", auth);
app.use(errorMiddleware);
module.exports = app;
