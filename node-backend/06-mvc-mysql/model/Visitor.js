const mysql = require("mysql");

//createConnection: mysql 연결 정보를 받아서 mysql과 연결
//db 연결한다 > host(ip), user, password, database이름
const conn = mysql.createConnection({
	host: 'localhost',   
	user: 'user',                          
	password: '55555!',                     
	database: 'sesac_test'               
})

// exports.getVisitors = () => {
//     return [
//         {id: 1, username: "eun", comment: "maplestory"}, 
//         {id: 1, username: "dan", comment: "pizza night"},
//     ];
// };

exports.getVisitors = (cb) => {
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        //err 변수가 빈 값이 아니라면, err가 발생했다는 것.
        if(err) {
            throw err;
        }

        console.log('visitor', rows);
        cb(rows);
    });
};

exports.insertVisitors = (data, cb) => {
    //insert into visitor (username, comment) values (????,????);
    const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;

    conn.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log('visitor insert', result);
        cb(result.insertId);
    })
}

exports.deleteVisitors = (id, cb) => {
    const sql = `DELETE FROM visitor WHERE id = ${id}`;

    conn.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        console.log(`Visitor with ID ${id} deleted.`);
        cb(); 
    });
};