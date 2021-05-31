"use strict."

let transportation = ["a car", "a bus", "a train", "a plane", "a hoverboard"];
let destination = ["Chicago", "Milwaukee","Madison","Green Bay","Sheboygan"];
let restaurant = ["Olive Garden", "Panda Express", "McDonald's", "Popeye's"];
let entertainment = ["a sporting event", "a concert", "a shopping mall", "the museum"];
let chosenTransportation = getRandomItem (transportation);
let chosenDestination = getRandomItem (destination);
let chosenRestaurant = getRandomItem (restaurant);
let chosenEntertainment = getRandomItem (entertainment);

function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];

    return item;
}
// console.log (getRandomItem (destination))

let userData1 = prompt ("Welcome to the Day Trip Generator!\nIf you ready for your 1st suggestion, Type 'Yes'"); {
    if (userData1 === "Yes"){
        chosenTransportation = getRandomItem (transportation);
        chosenDestination = getRandomItem (destination);
        chosenRestaurant = getRandomItem (restaurant);
        chosenEntertainment = getRandomItem (entertainment); 
        console.log ("Take " + chosenTransportation + " to "+ chosenDestination + " to eat " + chosenRestaurant + " at " + chosenEntertainment + ".");
    }
    else {
        alert ("Refresh the browser when you want to proceed.")
    }
}

let userDataConfirm = "new suggestion";
while (userDataConfirm === "new suggestion"){              
userDataConfirm = prompt ("Are you satisfied with this suggestion?\nIf so, please type 'confirm'\nIf you would like a completely new suggestion, type 'new suggestion'");
switch (userDataConfirm){
    case "confirm": {
        console.log ("Trip Confirmed! Have a great day trip. "+ "You will be taking " + chosenTransportation + " to "+ chosenDestination + " to eat " + chosenRestaurant + " at " + chosenEntertainment + ".");
        }
        break;
    case "new suggestion":{         
        chosenTransportation = getRandomItem (transportation);
        chosenDestination = getRandomItem (destination);
        chosenRestaurant = getRandomItem (restaurant);
        chosenEntertainment = getRandomItem (entertainment);
        console.log ("Here's a new suggestion!. Take " + chosenTransportation + " to "+ chosenDestination + " to eat " + chosenRestaurant + " at " + chosenEntertainment + ".");
            userDataConfirm = prompt ("Are you satisfied with this suggestion?\nIf so, please type 'confirm'\nIf you would like a completely new suggestion, type 'new suggestion'");
                if (userDataConfirm === "confirm") {
                    console.log ("Trip Confirmed! Have a great day trip. "+ "You will be taking " + chosenTransportation + " to "+ chosenDestination + " to eat " + chosenRestaurant + " at " + chosenEntertainment + "."); 
            }        
                else if (userDataConfirm === "new suggestion") {
                    chosenTransportation = getRandomItem (transportation);
                    chosenDestination = getRandomItem (destination);
                    chosenRestaurant = getRandomItem (restaurant);
                    chosenEntertainment = getRandomItem (entertainment);
                    console.log ("Here's a new suggestion!. Take " + chosenTransportation + " to "+ chosenDestination + " to eat " + chosenRestaurant + " at " + chosenEntertainment + ".");                   
                }
                else {
                    console.log (userDataConfirm = prompt ("Are you satisfied with this suggestion?\nIf so, please type 'confirm'\nIf you would like a completely new suggestion, type 'new suggestion'"));               
            }        
        }
        break;
    case "confirm new": {
        console.log ("Trip Confirmed! Have a great day trip. "+ "You will be taking " + chosenTransportation + " to "+ chosenDestination + " to eat " + chosenRestaurant + " at " + chosenEntertainment + ".");
            }
        break;
    default: 
        console.log (userDataConfirm = prompt ("Are you satisfied with this suggestion?\nIf so, please type 'confirm'\nIf you would like a completely new suggestion, type 'new suggestion'"));
        break;
    }   
}


//console log the whole trip

//print an initial trip
//ask user if they like it
//if not, rechoose
//if yes, print the final trip