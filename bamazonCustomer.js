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

//connect to mysql and display products for sale and initiates start function
connection.query("SELECT id, productName, departmentName, price FROM products" , function(err, results) {
  if (err) throw err;
  console.log(results);
  start();
});

function start(){
//Asks user for product ID for what they want to purchase
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "Enter product ID for item you would like to purchase",
            },
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

}
