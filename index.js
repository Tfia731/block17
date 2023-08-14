//Clean the coffee_data.js file.

    // All prices should be numbers.
    // All items should be strings.
    // Objects and properties should have commas separating them.
    // Connect the coffee_data.js file to the index.js file.
// Print an array of all the drinks on the menu.

// Print an array of drinks that cost 5 and under.

// Print an array of drinks that are priced at an even number.

// Print the total if you were to order one of every drink.

// Print an array with all the drinks that are seasonal.

// Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const coffeeMenu = require ("./coffee_data");

const drinks = [["cappuccino",8], 
                ["espresso",5],
                ["latte",5],
                ["affogato",9],
                ["macchiato",6],
                ["americano",7],
                ["iced coffee",6],
                ["frappe",8],
                 ["cuban espresso",10] ]
console.log(drinks)

//runs successfully//

const drinkAndPrice = (drink) => {
    return [drink.name, drink.price];
}
console.table(coffeeMenu.map(drinkAndPrice));

//runs//

const underfive = (drink) => {
    return drink.price <= 5;
}
const priceUnderfive = coffeeMenu.filter(underfive);
console.table(drinksUnderfive);

//runs

//is even?


const PriceEven = (price) => {
    return price.even === 2;
}
const drinkPriceEven = coffeeMenu.filter(even);
console.table(isEven);

// error? where?


// total cost

const totalcost = (price); {
    return priceArray;
}
const totalPrice = priceArray.reduce(totalPrice);
console.log(totalPrice)

// seasonal bevvs

const seasonal = (drink) => {
    return drink.seasonal = true;
}
const drinksSeasonal = coffeeMenu.filter(seasonal);
console.table(drinksSeasonal);

//with imported beans


