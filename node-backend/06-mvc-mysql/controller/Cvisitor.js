const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
    res.render("index");
};

exports.visitor = (req, res) => {
    // const data = Visitor.getVisitors();
    // res.render("visitor", {data: data});
    Visitor.getVisitors((rows)=>{
        res.render("visitor", {data: rows});
    });
};

//POST /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
  //insert할 데이터
  console.log("req.body:",req.body);
  Visitor.insertVisitors(req.body, (id)=>{
    console.log("controller postvisitor", id);
    res.send({
        ...req.body,
        id
    });
  });
};

//delete /visitor => 방명록 delete
exports.deleteVisitor = (req, res) => {
  const id = req.params.id; 
  Visitor.deleteVisitors(id, () => {
      res.send({result: true});
  });
};