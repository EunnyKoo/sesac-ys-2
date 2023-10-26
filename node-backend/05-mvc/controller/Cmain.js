const { commentInfos } = require("../model/Comment")

exports.main = (req, res) => {
    res.render("index");
};

exports.comments = (req, res) => {
    const commentData = commentInfos();
    res.render("comments", {
        commentInfos: commentData,
    });
};