# bamazon

[![N|screenshot1](https://github.com/JoeHancock1995/bamazon/blob/master/screenshots/screenthree.png)](https://nodesource.com/products/nsolid)
[![N|screenshot2](https://github.com/JoeHancock1995/bamazon/blob/master/screenshots/screenone.png)](https://nodesource.com/products/nsolid)

[![N|screenshot3](https://github.com/JoeHancock1995/bamazon/blob/master/screenshots/screentwo.png)](https://nodesource.com/products/nsolid)


## Overview

In this activity, i attempted to create an Amazon-like storefront with MySQL skills. The app will take in orders from customers and deplete stock from the store's inventory.

## About  MySQL database

1.  included is MySQL Database called `bamazon` 

2. included in the database is a table inside called `products`.

3. The products table has each of the following columns:

* item_id (unique id for each product)

* product_name (Name of product)

* department_name

* price (cost to customer)

* stock_quantity (how much of the product is available in stores)

## Node instructions

1. Included is a file called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Including the ids, names, and prices of products for sale.

2. The app should then prompts users with two messages.

* The first asks for the ID of the product they would like to buy.
* The second message asks how many units of the product they would like to buy.

---------- For Future develoment--------

3. Once the customer has placed the order, your application will check if your store has enough of the product to meet the customer's request.

* If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

4. However, if your store _does_ have enough of the product, the order will be fulfilled.
* This triggers mySQL to update the remaining quantity.
* Once the update goes through,  the customer is presented the total cost of their purchase.

