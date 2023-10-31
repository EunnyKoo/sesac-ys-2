//테이블의 구조를 정의
//orm은 객체와 db의 table을 매핑하는 기술
//sequelize를 이용해서 table의 구조를 정의할 필요가 있음

function Visitor(Sequelize, DataTypes) {
    return Sequelize.define( //모델(테이블) 정의, sequelize 객체의 define 메소드를 이용해서
        "visitor", //테이블 이름
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, //true가 기본 값
                primaryKey: true, //false가 기본 값
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING(10),
                allowNull: false, //true가 기본 값
            },
            comment: {
                type: DataTypes.TEXT("medium"),
            }
        },  //컬럼 정의
        {
            tableName: "visitor",
            freezeTableName: true,
            //sequelize에서 간혹 단수로 지정해둔 테이블 이름을 sql문을 날릴 때 복수로 변경을 시켜서 visitors
            //insert into visitor을 create() => insert into
            timestamps: false,
            //insert, update시에 그 시간을 자동으로 저장하겠다.  -> 기본값 
            //저장하지 마! => false로 지정
            //createAt, updateAt 
        }   
    );
}

module.exports = Visitor;
