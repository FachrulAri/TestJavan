const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "javan"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("MySql DB Connected!");
    });




module.exports = connection;

            