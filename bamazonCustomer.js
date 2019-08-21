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
        };
// take information from user and SELECT from mysql for product id then  store it 

// take quantity and if quantity greater than input amount allow 'purchase'
// using either UPDATE, MODIFY, or if nothing else works DELETE/ INSERT updated data some how that shows the stock after purchase

// if desired amount exceeds the stock then prompt user that transaction can not be completed because of lack of items,
// restart the quanity inquirer prompt

// Challenge for future: If the quantity of product is less than x amount put a notification asking user to limit to y per order

//ask if theirs any other purchases, if yes restart with updated sql
// if no terminate app
