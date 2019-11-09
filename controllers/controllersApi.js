const UsersModel = require('../models/loginData.js');

module.exports.register = async (login, password) => {
  try{
    const users = new UsersModel({
      login_value: login,
    });

    const cryptedpwd = await users.hashingpwd(password);
    users.password_value = cryptedpwd;
    // console.log(password_value.hashingpwd());
    const data = await users.save();
    return data;
  } catch(err){
    if (err) throw err;
  };
}

