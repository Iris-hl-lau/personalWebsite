let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pretty15gitl"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS mydb", function(err, result) {
        if(err) throw err;
        console.log("Database created");
    });

    con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pretty15gitl",
    database: "mydb"
    });

    // con.query("DROP TABLE tblQuiz", function(err, result) {
    //     if(err) throw err;
    //     console.log("Table created");
    // });

    let tbl = "CREATE TABLE IF NOT EXISTS tblQuiz ("
               + "question VARCHAR(200) NOT NULL,"
               + "selection1 BOOLEAN NOT NULL, choice1 VARCHAR(100) NOT NULL," 
               + "selection2 BOOLEAN NOT NULL, choice2 VARCHAR(100) NOT NULL," 
               + "selection3 BOOLEAN NOT NULL, choice3 VARCHAR(100) NOT NULL,"
               + "PRIMARY KEY(question))";
    con.query(tbl, function(err, result) {
        if(err) throw err;
        console.log("Table created");
    });
});

