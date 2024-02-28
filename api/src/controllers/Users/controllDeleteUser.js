const {UserModel} = require("../../db.js")

const controllDeleteUser = async(id) => {
    const user = await UserModel.findByPk(id);
    if (!user) {
        throw new Error("User not found.");
      }
      await user.destroy();
      return { message: "User deleted successfully." };
    };
    
    module.exports = controllDeleteUser;