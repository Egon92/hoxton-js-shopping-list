// - Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, 
//   Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriate data structures we've studied so far

let meals = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready meals"];
let prices = [1.20, 2.00, 2.00, 2.00, 2.50, 5.00];

// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)

meals.push(prompt("What are you adding?"))
prices.push(Number(prompt("How much does it cost?")))

// - Output a list displaying each item and its price

for (meal of meals){
    console.log(meal);
}
for(price of prices){
    console.log(price)
}

// THE SECOND WAY WITH A FOR withoyt OF

let i=0;

for (let i=0; i<meals.length; i++){
   console.log(`The price of ${meals[i]} is ${prices[i]}`) 
}

// - Output the total at the end
// We are making the sum of all prices

let sum = 0;

for (let i=0; i<prices.length; i++){
    sum += prices[i]
}
console.log(`The total cost is £${sum}`)


// WE CAN DO IT AS WELL WITH A DOUBLE FOR LOOP AND A NESTED ARRAY

let list = [
    ["Milk", 1.20],
    ["Cocoa", 2.00],
    ["Salad", 2.00],
    ["Carrots", 2.00],
    ["Tomatoes", 2.50],
    ["Ready meals", 5.00]
]
let newMeal = prompt("What are you adding?")
let newPrice = Number(prompt("How much does it cost?"))
let newItem = [newMeal, newPrice]
list.push(newItem)

for(let i=0; i< list.length; i++){
    let mealItem = list[i]
       for(let j=0; j<mealItem.length; j++){
            console.log(`${mealItem[0]} price is £ ${mealItem[1]}`)
}
}