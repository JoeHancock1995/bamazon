var mysql = require("mysql");
var inquirer = require("inquirer");

// connect to mysql.
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});
function start() {
    inquirer
    .prompt({
        name: "idInput",
        type: "input",
        message: "Enter product ID for item you would like to purchase",
    })
    .then(function(product) {
        
    })
}
// this application then fetches the data of the 10 items ive created in mysql
// display the items
