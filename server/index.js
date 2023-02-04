const mysql = require('mysql');

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
});

