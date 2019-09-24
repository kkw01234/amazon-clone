const {DBConnect} = require("../db/dbconnect.js")
const userQuery = {
    CREATEUSERTABLE : /*SQL*/`CREATE TABLE IF NOT EXISTS user(
        id VARCHAR(20) PRIMARY KEY,
        password VARCHAR(600) NOT NULL,
        name VARCHAR(20) NOT NULL,
        birth DATE,
        gender BOOLEAN,
        email VARCHAR(100),
        phone VARCHAR(100),
        interests TEXT,
        authority VARCHAR(20)
    )`,
    FINDALLUSER : /*SQL*/`SELECT * FROM user`,
    FINDUSER : /*SQL*/`SELECT * FROM user WHERE id = ?`,
    INSERTUSER : /*SQL*/`INSERT INTO user VALUES (?,?,?,?,?,?,?,?,?)`,
    FINDUSERFORIDANDPASSWORD : /*SQL*/`SELECT * FROM user WHERE id = ? ans password = ?`

}
const UserDAO = {
    createUserTable(){
        DBConnect.query(userQuery.CREATEUSERTABLE);
        return this;
    },
    async insertUser(user){
        console.log(user);
        return await DBConnect.query(userQuery.INSERTUSER,[
            user.id,
            user.password,
            user.name,
            user.birth,
            user.gender,
            user.email,
            user.phone,
            user.interests.join(","),
            "5"]);
    },
    update(){

    },
    findAllUser(){

    },
    async findUserForIdAndPassword(id, password){
        return await DBConnect.query(userQuery.FINDUSERFORIDANDPASSWORD,[id,password]);
    },
    async findUser(id){
        const result = await DBConnect.query(userQuery.FINDUSER,[id]);
        return result[0];
    }
    
}

UserDAO.createUserTable();

module.exports = {
    UserDAO
}