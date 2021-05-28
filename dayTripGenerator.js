"use strict."

let transportation = ["a car", "a bus", "a train", "a plane"];
let destination = ["Chicago", "Milwaukee","Madison","Green Bay"];
let restaurant = ["italian food", "chinese food", "burgers", "chicken"];
let entertainment = ["a sporting event", "a concert", "a shopping mall", "the museum"];
let chosenTransportation = (getRandomItem (transportation));
let chosenDestination = (getRandomItem (destination));
let chosenRestaurant = (getRandomItem (restaurant));
let chosenEntertainment = (getRandomItem (entertainment));

function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];

    return item;
}
// console.log (getRandomItem (destination))



let userData1 = prompt ("Welcome to the Day Trip Generator!\nIf you ready for your 1st suggestion, Type 'Yes'"); {
    if (userData1 === "Yes"){ 
        console.log ("Take " + chosenTransportation + " to "+ chosenDestination + " and eat " + chosenRestaurant + " at " + chosenEntertainment + ".");
    }
    else {
        console.log ("Refresh the browser when you want to proceed.")
    }
}
let userDataConfirm = prompt ("Are you satisfied with this suggestion?\nIf so, please type 'confirm'\nIf you would like a completely new suggestion, type 'new suggestion'");
switch (userDataConfirm){
    case "confirm":
        console.log ("Trip Confirmed! Have a great day trip.");
        break;
    case "new suggestion":
        console.log ("Here's a new suggestion!. Take " + chosenTransportation + " to "+ chosenDestination + " and eat " + chosenRestaurant + " at " + chosenEntertainment + ".");
        break;
    default:
        console.log ("You must enter either 'confirm' or 'start over'");
        break;
}



    //     if(userDataConfirm === "confirm") {
//         console.log ("Trip Confirmed! Have a great day trip.");
//     }
//     else if (userDataConfirm === "start over") {
//         console.log ("Here's a new suggestion!.Take " + chosenTransportation + " to "+ chosenDestination + " and eat " + chosenRestaurant + " at " + chosenEntertainment + ".");
//             let userData2 = prompt ("Do you like this suggestion?\nType 'yes' or 'start over'");{
//             if (userData2 === "yes"){
//                 console.log ("Trip Confirmed! Have a great day trip.");
//             }
//             else if (userData2 === "start over");
//                 console.log 
//             }
//     else if (userDataConfirm === "transport") {
//         console.log ("How about " + chosenTransportation +"?");
//     }
//     else if (userDataConfirm === "city") {
//         console.log ("How about " + chosenDestination +"?");
//     }
//     else if (userDataConfirm === "food") {
//         console.log ("How about " + chosenRestaurant +"?");
//     }
//     else if (userDataConfirm === "entertainment") {
//         console.log ("How about " + chosenTransportation +"?");
//     }    
//     else{
//         console.log ("That is not a valid option, please start over by refreshing your browser.")
//     } 
// let newSelectionDestination = prompt ("Do you want a different city?\nPlease type Yes")
//     if (newSelectionDestination = "Yes");
//         console.log ("Here's a new city -" + (getRandomItem (destination))); 


//console log the whole trip

//print an initial trip
//ask user if they like it
//if not, rechoose
//if yes, print the final trip