const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'http://3.35.233.217',
    user: 'root',
    password: 'damin',
    database: 'damindb',
    port: '3306'
});

connection.connect(err => {
    console.log('it connected')
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    var query = "select * from damintable";
    connection.query(query, function(err, results) {
        if(err) {
            console.log(JSON.stringify(err));
            res.json({"Error" : 1, "Message" : "Error while getting the data from Remote DataBase motherofall.org"});
        }
        else {
            res.json({"Error" : 0, "Message" : "Success", "Articles" : results});
        }
    });
 
})

app.listen(5000)