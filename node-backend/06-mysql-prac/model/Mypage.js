const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',   
	user: 'user',                          
	password: '',                     
	database: 'sesac_test'               
})

exports.getMypage = (cb) => {
    conn.query(`SELECT * FROM user`, (err, rows) => {
        //err 변수가 빈 값이 아니라면, err가 발생했다는 것.
        if(err) {
            throw err;
        }

        console.log('visitor', rows);
        cb(rows);
    });
};

exports.insertAccount = (data, cb) => {
    const sql = `insert into user (name, userid, pw) values  ('${data.name}', '${data.userid}', '${data.pw}')`;
    conn.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log('user insert', result);
        cb(result.insertId);
    })
}

exports.correctLogin  = (cb) => {
    conn.query(`SELECT * FROM user where userid=${data.userid} and pw=${data.pw}`, (err, rows) => {
        //err 변수가 빈 값이 아니라면, err가 발생했다는 것.
        if(err) {
            throw err;
        }

        cb(rows);
    });
};