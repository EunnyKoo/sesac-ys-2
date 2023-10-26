const User = require("../model/User");
// User = { getUser: () => {}}

exports.main = (req, res) => {
  res.render("index");
};

exports.login2 = (req, res) => {
  res.render("login");
}

exports.login = (req, res) => {
//   const id = "koo";
//   const pw = "55555";
const userData = User.getUser();
  let data;

  if(req.body.id == userData.id && req.body.pw == userData.pw) {
    data = {
      isSuccess: true,
      msg: "로그인 성공!"
    }
  }else {
    data = {
      isSuccess: false,
      msg: "로그인 실패ㅠㅠ"
    }
  }
    //console.log(req.body);
    res.send(data);
};

exports.register2 = (req, res) => {
  res.render("register");
}

exports.register = (req, res) => {
  console.log(req.query);
  res.send(req.query);
}

  