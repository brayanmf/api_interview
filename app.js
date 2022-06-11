const express = require("express");

const errorMiddleware = require("./middleware/error");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(errorMiddleware);
module.exports = app;
