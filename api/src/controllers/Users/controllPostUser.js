const { UserModel } = require("../../db.js");


const controllPostUser = async (req) => {
  const { clerkId, user, fullName } = req.body;

  let emailAddress = user.emailAddresses[0].emailAddress;

  
 
  const [newUser, created] = await UserModel.findOrCreate({
    where: {
      clerkId,
      fullName,
      emailAddress,
    },
  });

  if (created) {
    alert('Usuario creado exitosamente')
  }

  return newUser;
};

module.exports = controllPostUser;