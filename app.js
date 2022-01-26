const express = require('express')
const app = express()
const port = 3300

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//connection express w/mysql
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "express"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})
