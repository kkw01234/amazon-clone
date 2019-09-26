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
        authority_level INT NOT NULL
    )`,
    CREATEAUTHORITYTABLE : /*SQL*/`CREATE TABLE IF NOT EXISTS authority(
        authority_level INT PRIMARY KEY,
        authority_name VARCHAR(20) NOT NULL
    )`,
    FINDALLUSER : /*SQL*/`SELECT id,name,birth,gender,email,phone,authority_level FROM user`,
    FINDUSER : /*SQL*/`SELECT * FROM user WHERE id = ?`,
    INSERTUSER : /*SQL*/`INSERT INTO user VALUES (?,?,?,?,?,?,?,?,?)`,
    FINDUSERFORIDANDPASSWORD : /*SQL*/`SELECT * FROM user WHERE id = ? and password = ?`,
    FINDAUTHORITYLEVEL : /*SQL*/`SELECT authority_level FROM authority WHERE authority_name = ?`,
     
}
const UserDAO = {
    createUserTable(){
        DBConnect.query(userQuery.CREATEUSERTABLE);
    },
    createAuthorityTable(){
        DBConnect.query(userQuery.CREATEAUTHORITYTABLE);
    },
    async insertUser(user){
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
    async findAllUser(){
        return await DBConnect.query(userQuery.FINDALLUSER);
    },
    async findUserForIdAndPassword(id, password){
        // return new Promise((resolve,reject)=>{
        //     DBConnect.query(userQuery.FINDUSERFORIDANDPASSWORD,[id,password]).then(res=>{
        //         if(res.length > 0){
        //             resolve(res);
        //         }else
        //             resolve(false);
        //     });
        // })
        const users = await DBConnect.query(userQuery.FINDUSERFORIDANDPASSWORD,[id,password]);
        return users.length > 0 ? users[0] : false;
    },
    async findUser(id){
        const users = await DBConnect.query(userQuery.FINDUSER,[id]);
        return users.length > 0 ? users[0] : false;
    },
    async findAuthorityLevel(authority_name){
        const admins = await DBConnect.query(userQuery.FINDAUTHORITYLEVEL,[authority_name]);
        return admins.length > 0 ? admins[0].authority_level : undefined;
    }
    
}

UserDAO.createUserTable();
UserDAO.createAuthorityTable();

module.exports = {
    UserDAO
}