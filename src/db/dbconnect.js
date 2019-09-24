
const mysql = require('mysql2');

const DBConnect = {
    pool :  mysql.createPool({
        host : '106.10.35.161',
        user : 'kkw01234',
        password : 'Rjsdnr4809!!',
        database : 'amazon',
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
