const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const saltRounds = 10;
const loginDataSchema = Schema({
  login_value: String,
  password_value: String,
});

loginDataSchema.methods.comparepwd = async function (a) {
  console.log(` this password value hashed: ${this.password_value} type: ${typeof this.password_value}`);
  const b = await bcrypt.compare(a, this.password_value);
  console.log(b);
  return b;
};

loginDataSchema.methods.hashingpwd = async function (value) {
  const a = await bcrypt.hash(value, saltRounds);
  // console.log("before: " + this.password_value + " after: a");
  return a;

};
const Users = mongoose.model('Users', loginDataSchema);
module.exports = Users;
