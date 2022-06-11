const User = require("./user.model");
const errorHandler = require("../utils/errorHandler");

exports.addUser = async ({ userName, password, ...data }, next) => {
  if (!userName || !password) {
    return next(new errorHandler("User name and password are required", 400));
  }

  const user = await User.create({
    userName,
    password,
    ...data,
  });

  return user;
};

exports.findUser = async ({ userName, password }, next) => {
  if (!userName || !password) {
    return next(new errorHandler("User name and password are required", 400));
  }
  const user = await User.findOne({ userName }).select("+password");
  if (!user) {
    return next(new errorHandler("Invalid User name", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new errorHandler("Invalid password", 401));
  }

  return user;
};
exports.cleanCookie = async (res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  return res;
};
