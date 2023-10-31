const { Visitor } = require("../model"); //index.js의 Visitor 객체 불러오기

exports.home = (req, res) => {
  res.render("index");
};

//GET /visitors => 기존 방명록 전체 조회 후 render("visitor.ejs")
exports.visitor = (req, res) => {
    //select * from visitor;
    Visitor.findAll()
    .then((result) => {
        //console.log("finaall result", result);
        //console.log("0 index의 username", result[0].username);  eun
        //기대 : [{id: , username: , comment: },{}]
        res.render("visitor", {data : result})
    })
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment
    }
    // Visitor.create(data).then((result) => {
    //     console.log("create result: ", result);
    //     res.send(result)
    // }).catch(()=>{
        // console.log(err);
        // res.status(500).send("오류발생");
    // })
    const createVisitor = await Visitor.create(data);
    res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.destroy({
        where: {
            id: req.params.id, 
        },
    }).then((result) => {
        console.log("destroy result:", result);
        res.send({result: true});
    });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
    //select * from visitor where id=? limit 1;
    Visitor.findOne({
        where: {
            id: req.params.id
        },
    }).then((result) => {
        res.send(result);
    })
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment
    };
    // update visitor set username='??', comment='??' where id=?;
    Visitor.update(data, {
        where: {
            id: req.body.id,
        },
    }).then((result) => {
        console.log("update: ", result);
        res.send({result: true});
    });
};

exports.getTest = (req, res) => {
    //select username from visitor where id = 2 orderby username asc;
    Visitor.findAll({
        attributes: ["username", "id"],
        // where: {
        //     id: req.params.id
        // },
        order: ["usename", "ASC"]
    }).then((result) => {
        res.send(result);
    });

    //const sql = `위에꺼로 안될거 같을때.. 네이티브 쿼리문 작성해서 하기`;
};