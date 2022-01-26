// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE departements (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(255), description VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//     var usr = "CREATE TABLE users (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255),password VARCHAR(255),id_depart INTEGER, FOREIGN KEY (id_depart) REFERENCES departements (id))";
//     con.query(usr, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });