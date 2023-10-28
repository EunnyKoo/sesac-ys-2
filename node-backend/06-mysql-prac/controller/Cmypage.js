const Mypage = require("../model/Mypage");

exports.home = (req, res) => {
    res.render("index");
};

exports.mypage = (req, res) => {
    Mypage.getMypage((rows)=>{
        res.render("mypage", {data: rows});
    });
};

exports.register = (req, res) => {
    res.render("register");
};

exports.addAccount = (req, res) => {
    Mypage.insertAccount(req.body, (id) => {
        res.send({
            ...req.body,
            id
        });
    });
};

exports.login = (req, res) => {
    res.render("login");
}

exports.correctLogin = (req, res) => {
    Mypage.correctLogin((rows) => {
        res.render("login", {data: rows});
    })
}
