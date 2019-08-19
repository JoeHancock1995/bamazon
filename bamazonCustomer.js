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
//connect to mysql
//console.log("connected as id " + connection.threadId);
// connection.end();
// delete start
connection.connect(function(err) {
  if (err) throw err;
  start();
});

// displays products for sale
function start(){
    connection.query("SELECT * FROM products" , function(err, results) {
        if (err) throw err;
        console.log(results);
    })
}

/*Asks user for product ID for what they want to purchase
function start() {
    inquirer
    .prompt([
    {
        name: "item",
        type: "input",
        message: "Enter product ID for item you would like to purchase",
    })
    .then(function(answer) {
        connection.query(
            "SELECT "
        )
    }
//Asks user for the amount they want to purchase of that item
    {
        name: "amount",
        type: "input",
        message: "Enter amount you would like to purchase?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
        }
    }
])

// this application then fetches the data of the 10 items ive created in mysql
// display the items*/
