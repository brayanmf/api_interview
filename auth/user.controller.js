const sendToken = require("../utils/jwtToken");
const sendResponse = require("../utils/sendResponse");
const { addUser, findUser, cleanCookie } = require("./user.services");
/**
 * @description: register user
 * @param {req} request object
 * @returns {json}}
 * @author : Brayanmf
 */
exports.registerUser = async (req, res, next) => {
  try {
    const user = await addUser(req.body, next);

    if (user) sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};
/**
 * @description: login user
 * @param {req} request object
 * @returns {json}}
 * @author : Brayanmf
 */
exports.loginUser = async (req, res, next) => {
  try {
    const user = await findUser(req.body, next);
    if (user) sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};
/**
 *@description:logout user
 *@returns {json}}
 *@author : Brayanmf
 */
exports.logout = async (req, res) => {
  try {
    const response = await cleanCookie(res);
    sendResponse(null, "Logout SuccessFully", 200, response);
  } catch (err) {
    next(err);
  }
};
