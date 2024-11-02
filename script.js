
let travels = prompt("Enter travel type (flight, train, bus): ");
let mode = prompt("Enter travel mode: ");

switch (travels) {
    case "flight":
        switch (mode) {
            case "economy":
                console.log("Economy");
                break;
            case "business":
                console.log("Business");
                break;
            default:
                console.log("Please enter a valid flight mode.");
                break;
        }
        break;

    case "train":
        switch (mode) {
            case "sleeper":
                console.log("Sleeper");
                break;
            case "ac":
                console.log("AC Class");
                break;
            default:
                console.log("Please enter a valid train mode.");
                break;
        }
        break;

    case "bus":
        switch (mode) {
            case "standard":
                console.log("Standard");
                break;
            case "luxury":
                console.log("Luxury");
                break;
            default:
                console.log("Please enter a valid bus mode.");
                break;
        }
        break;

    default:
        console.log("Please enter a valid travel type.");
        break;
}



let movie = prompt('Enter movie genre (action, comedy, drama):').toLowerCase();
let seat = prompt('Enter seat type (standard or vip):').toLowerCase();

switch (movie) {
    case "action":
        switch (seat) {
            case "standard":
                console.log("Price: 10 Rs");
                break;
            case "vip":
                console.log("Price: 20 Rs");
                break;
            default:
                console.log("Please enter a valid seat type.");
                break;
        }
        break;

    case "comedy":
        switch (seat) {
            case "standard":
                console.log("Price: 30 Rs");
                break;
            case "vip":
                console.log("Price: 40 Rs");
                break;
            default:
                console.log("Please enter a valid seat type.");
                break;
        }
        break;

    case "drama":
        switch (seat) {
            case "standard":
                console.log("Price: 50 Rs");
                break;
            case "vip":
                console.log("Price: 60 Rs");
                break;
            default:
                console.log("Please enter a valid seat type.");
                break;
        }
        break;

    default:
        console.log("Please enter a valid movie genre.");
        break;
}





let category=prompt('enter category').toLowerCase();
let product=prompt('enter product').toLowerCase();
switch(category){
    case"electronic":
        console.log((product=="mobile")?"5%":(product==="laptop")?"10%":"no more product")
        break;
    case"clothing":
        console.log((product==="clothing")?"15%":"20%")
        break;
    case"grocery":
        console.log((product==="fruits")?"15%":"20%")
        break;
           
default:console.log('invalid')
}