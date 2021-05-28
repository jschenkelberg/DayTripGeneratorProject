"use strict."

let destination = ["Chicago", "Milwaukee","Madison","Green Bay"];
let restaurant = ["italian food", "chinese food", "burgers", "chicken"];
let transportation = ["car", "bus", "train", "plane"];
let entertainment = ["a sporting event", "a concert", "a shopping mall", "the museum"];

function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];

    return item;
}
// console.log (getRandomItem (destination))

let userData1 = prompt ("Are you ready to take a day trip?\nIf so, Type 'Yes'"); {
    if (userData1 === "Yes"){ 
        console.log ("Take a " +(getRandomItem (transportation)) + " to "+ (getRandomItem (destination)) + " and eat " + (getRandomItem(restaurant)) + " at " + (getRandomItem (entertainment)) + ".");
    }
    else (userData1 !=="Yes");{
        console.log ("Please refresh the browser if you want another suggestion.")
    }
}
// let newSelectionDestination = prompt ("Do you want a different city?\nPlease type Yes")
//     if (newSelectionDestination = "Yes");
//         console.log ("Here's a new city -" + (getRandomItem (destination))); 
let userDataConfirm = prompt ("Are you satisfied with this suggestion?\nIf so, please type 'confirm'");{
    if(userDataConfirm === "confirm") {
        console.log ("Trip Confirmed! Have a great day trip.");
    }
    else {
        console.log ("Here's a new suggestion!. Take a " +(getRandomItem (transportation)) + " to "+ (getRandomItem (destination)) + " and eat " + (getRandomItem(restaurant)) + " at " + (getRandomItem (entertainment)) + ".");
    }
}