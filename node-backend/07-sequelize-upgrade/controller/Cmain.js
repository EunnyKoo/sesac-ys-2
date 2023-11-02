const {Customer, Orders, Sequelize} = require("../model")
const Op = Sequelize.Op;

exports.main = async (req, res) => {
    //user의 주문 목록 "custname"과 함께 
    const cust = await Customer.findAll({
        attributes: ["custid","custname"],
        where: {birth: {[Op.gte]:"2000-01-01"}}, //gte: 이상이다
        include: [
            {
                model: Orders,
                attributes: {exclude: ["custid"] },
                //where: {}
            },
        ],
        raw: true
    });

    res.send(cust);
};

exports.main2 = async (req, res) => {
    const ord = await Orders.findAll();

    res.send(ord);
}