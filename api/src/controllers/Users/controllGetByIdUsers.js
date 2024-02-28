const { UserModel } = require("../../db.js");

const getUserById = async (id) => {
  let user = await UserModel.findByPk(id);
  return user;
};

module.exports = getUserById;