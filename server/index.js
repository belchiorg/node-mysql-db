const mysql = require('mysql');
const express = require('express');

const app = express();

const db = mysql.createConnection({
    host:"database-testing.cgce2poywla6.eu-west-3.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"password",
    database:"test_db"
})

db.connect((err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Database connected.");

    //Create a Table
    // var sql = "CREATE TABLE customers (name CHAR(50), address CHAR(50))";
    // db.query(sql, (err, result) => {
    //     if (err) {
    //         console.log(err.message);
    //     }
    //     else {
    //         console.log("Table created");
    //     }
    // })

    //Query a new file
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("1 record inserted");
        }
    })
});


