const User = require("../modules/user");
exports.getLogin = (req, res) => {
  return res.render("login", {
    allUser: [],
  });
};
exports.postUser = (req, res) => {
  let user = new User({
    name: req.body.userName,
    age: req.body.age,
  });
  user.save();
};
exports.getProfile = (req, res) => {
  let user = req.params.userName;
  console.log(user);
};
