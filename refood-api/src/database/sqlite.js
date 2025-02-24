import sqlite3 from 'sqlite3';

const SQLite = sqlite3.verbose();

function execute(comand, params, method = "all"){
    return new Promise((resolve, result) => {
        db[method](comand, params, (err, result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        });
    }
})

const db = new SQLite.DataBase("./src/database/banco.db", SQLite.OPEN_READWRITE, (err) => {
    if(err) {
        return console.log("erro ao conectar banco: " + err.message);
    }
});

export {db};