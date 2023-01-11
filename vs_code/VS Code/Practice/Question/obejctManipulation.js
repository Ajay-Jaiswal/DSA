
// You are given an array of multiple items in an order. Find the total bill amount for all items in the order.
// A flat tax will be added to the bill based on the following conditions:
// If the item is a pizza, the tax will be 5% of the item's price.
// If the item is a drink, the tax will be 18% of the item's price.
// If the item is a snack, the tax is already included in the item's price.

// Output the subtotal, tax amount, and grand total for the order.

const order = {
    customer: {
        name: "John",
        address: {
            street: "123 Main Street",
            city: "Anytown",
            state: "California",
        },
        phone: "555-555-5555",
    },
    items: [
        { name: "Margherita", price: 277.25, type: "pizza" },
        { name: "Mineral Water", price: 20, type: "drink" },
        { name: "Pepperoni", price: 540.1, type: "pizza" },
        { name: "Chicken Wings", price: 200.0, type: "snack" },
        { name: "Coffee", price: 300.0, type: "drink" },
    ],
    date: "June 27, 2022",
};











let arr = order.items
let sum = 0
let tax = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price
    if (arr[i].type == "pizza") {
        tax = tax + (arr[i].price * 5) / 100
    }
    if (arr[i].type == "drink") {
        tax = tax + (arr[i].price * 18) / 100
    }
    if (arr[i].type == "snack") {
        tax = tax + (arr[i].price * 0) / 100
    }
}

console.log("subtotal  : " + sum)
console.log("tax  : " + tax)
console.log("Grand Total  : " + (sum + tax))


//--------------------------------------


let min = arr[0].price
for (let i = 0; i < arr.length; i++) {
    if (arr[i].price <= min) {
        min = arr[i].price
    }
}
console.log("Minimum price ------ : " + min)