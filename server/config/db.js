const mysql = require('mysql');
 
const db = mysql.createPool({
    host : '3.35.233.217:3306',
    user : 'root',
    password : 'damin',
    database : 'damindb'
});
 
module.exports = db;