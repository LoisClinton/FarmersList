// Import Classes Here
let Product = require("./classes/Product.js");
let Cart = require("./classes/Cart.js");
let Customer = require("./classes/Customer.js");
let Auth = require("./classes/Auth.js");

// DO NOT EDIT BELOW THIS LINE
try {
  module.exports = {
    Product,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
    Auth,
  };
} catch (e) {}

// Stretch: Enhance Your FarmersList! 🚀
// Business is booming! Here are few extensions you can add to your existing code:

// 1)Add a getTotal method to the Cart class that returns the total price of all items in the cart.

// 2)Add a clear method to the Cart class that clears all products from the cart and sets total back to 0.

// 3)Add a rewardPoints property to the Product class constructor that denotes how many reward points each item gets. In the Customer class:
//         Create a rewardPoints property that initializes with a value of zero.
//         Create a getRewardPoints method that goes through the orderHistory and updates rewardPoints with the number of rewardsPoints that the customer has earned based on their order history.

// 4) Add a removeItemByName method to the Cart class that removes a specified item from the cart. This method should take in a Product name as an argument and remove that item from the cart.

// 5) quantity: We have more than 1 of many items in stock. Do the following:
//         Update Product constructor to accept a property of quantity.
//         Update the Cart method addProduct(product, quantity) to accept a quantity argument. The method should:
//             Check that the product has enough quantity to complete the command. If the amount requested is greater than the amount available return I'm sorry there are only QUANTITY of this product left.
//             If there is enough of the quantity, add the item to the cart, increase the total, and then decrease the products quantity.
//             Check if product now has a quantity of 0. If it does, set inStock to false.
//             Return the updated Product.
