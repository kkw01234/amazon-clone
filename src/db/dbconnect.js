
const mysql = require('mysql2');
require('dotenv').config();
const DBConnect = {
    pool :  mysql.createPool({
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password :process.env.DB_PASS,
        database : process.env.DB_SCHEMA,
        connectionLimit : 20,
        waitForConnections:false
    }),
    query(query,params = []){
        return new Promise((resolve,reject)=>{
            this.pool.query(query,params,function(err,rows){
                    if(err) reject(err);
                    resolve(rows);
                });
            });
    },
    execute(query,params = []){
        return new Promise((resolve,reject)=>{
            this.pool.execute(query,params,(err,rows)=>{
                if(err) reject(err);
                resolve(rows);
            } 
        )
    });
    }
}

module.exports = {
    DBConnect
}

// DBConnect.connect("SELECT now()",[]).then(res=>console.log(res));
// DBConnect.connect("SELECT now()",[]).then(res=>console.log(res));
