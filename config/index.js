const mongoose = require("mongoose");

const { MONGODB_URI, MONGODB_URI_TEST, NODE_ENV, MONGODB_URI_PROD } =
  process.env;

let connectionString = NODE_ENV === "test" ? MONGODB_URI_TEST : MONGODB_URI;
if (NODE_ENV === "production") {
  connectionString = MONGODB_URI_PROD;
}

const connectDatabase = () => {
  mongoose
    .connect(connectionString)
    .then(() =>
      console.log("Successfully connected to DB <{", connectionString, "}>")
    )
    .catch((err) =>
      console.log(
        "Couldn't connect to DB <{",
        connectionString,
        "}>. Error: ",
        err
      )
    );
};
module.exports = connectDatabase;
