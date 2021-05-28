"use strict."

let destination = ["Chicago", "Milwaukee","Madison","Green Bay"];
let restaurant = ["Italian", "Chinese", "Burgers", "Chicken"];
let transportation = ["Car", "Bus", "Train", "Airplane"];
let entertainment = ["Sporting Event", "Concert", "Shopping", "Visit Museum"];

function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];

    return item;
}
console.log (getRandomItem (destination))

