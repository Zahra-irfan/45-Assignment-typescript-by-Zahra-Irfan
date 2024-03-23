//Question no.01;
/*NODE JS, TYPESCRIPT AND VSCODE SUCCESSFULLY INSTALLED.
=> ENVIRONMENT SETUP COMPLETED.*/
//Question no.02;
let Name = "Zahra";
console.log("Hey, " + Name + " would you] like to learn some typescript today?");
//Question no.03;
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
function titleCase(string) {
    return string.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
console.log(titleCase(Name));
//Additional function.
function toggleCase(str) {
    return str.toUpperCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toLowerCase());
    }).join(' ');
}
console.log(toggleCase(Name));
//Question no.04;
let famousQoute = "Scott Hawkins once said,“Peace of mind is not the absence of conflict, but the ability to cope with it.”";
console.log(famousQoute);
console.log("Scott Hawkins once said,“Peace of mind is not the absence of conflict, but the ability to cope with it.");
//Question no.05;
let famousPerson = "Scott Hawkins";
let qoute = "“Peace of mind is not the absence of conflict, but the ability to cope with it.”";
console.log(famousPerson.concat(" once said,").concat(qoute));
//Question no.06;
let person1 = "  \t  Indlus  \n  \n   ";
console.log(person1);
console.log(person1.trim());
//Question no.07;
console.log(5 + 3, 4 * 2, 16 / 2, 45 - 37);
//Question no.08;
console.log(5 + 3);
console.log(4 * 2);
console.log(16 / 2);
console.log(45 - 37);
//Question no.09;
let favNumber = 25;
console.log("My favorite number is= " + favNumber + ".");
//Question no.10; 
/* Comments are added throughout the progrsm at different places. Hence, completed.
*/
//Question no.11;
let names = ['Barza', 'Samia', 'Malaika', 'Daniyal', 'Ayaan'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
//or
names.forEach(string => {
    console.log(string);
});
//Question no.12;
let greetings = "Assalamualaikum! I wholeheartedly welcome my friend, ";
console.log(greetings.concat(names[0]).concat("."));
console.log(greetings.concat(names[1]).concat("."));
console.log(greetings.concat(names[2]).concat("."));
console.log(greetings.concat(names[3]).concat("."));
console.log(greetings.concat(names[4]).concat("."));
//or 
names.forEach(friends => {
    console.log('Assalamualaikum, greetings to you, ' + friends + ' dear.');
});
//Question no.13;
let favoriteTransport = ['Jaguar E-type', 'Nissan Z', 'Porsche', 'Corvette'];
favoriteTransport.forEach(Transport => {
    console.log("My favorite transport is " + Transport + ".");
});
//Question no.14;
//Guest list:
let guestList = ['Newton', 'Eunhyeok', 'Lady Medea', 'Chat Noir'];
guestList.forEach(invites => {
    console.log("I feel immense pleasure to invite " + invites + " to my tea party at my summer house.");
});
//Question no.15;
//one of guests won't be able to make it to my tea party.
guestList[3] = 'Luka';
guestList.forEach(invitesModified => {
    console.log("\n I feel immense pleasure to invite " + invitesModified + " to my tea party at my summer house.");
    console.log("One of our guests won't be able to make it. Hence, Luka would be attending in his place.");
});
//Question no.16;
//Adding a few more guests to our guest list;
console.log("We have successfully arranged an extra table for our tea party!");
//Adding at the last;
guestList.push("Iseop");
//Adding at the middle;
guestList.splice(2, 0, "Zeray");
//Adding at the last;
guestList.unshift("Donald Duck");
guestList.forEach(invitesEditted => {
    console.log("I feel immense pleasure to invite " + invitesEditted + " to my tea party at my summer house.");
    console.log("An additional table has been arranged.");
});
//Question no.17;
//Shrinking the list :'( i'm poor now
//let's just say I've had a change of heart ^_^
console.log("\nOnly two guest shall be invited to my tea party ^<o>^");
console.log("Sorry, You are no longer invited to my tea party, " + guestList.shift() + ". \nI apologize for the inconvenience.");
console.log("Sorry, You are no longer invited to my tea party, " + guestList.pop() + ". \nI apologize for the inconvenience.");
console.log("Sorry, You are no longer invited to my tea party, " + guestList.splice(2, 1) + ". \nI apologize for the inconvenience.");
console.log("Sorry, You are no longer invited to my tea party, " + guestList.shift() + ". \nI apologize for the inconvenience.");
console.log("Sorry, You are no longer invited to my tea party, " + guestList.pop() + ". \nI apologize for the inconvenience.");
guestList.forEach(invitesShrinked => {
    console.log("\tI feel immense pleasure to invite " + invitesShrinked + " to my tea party at my summer house.");
    console.log("Consider it an honor, only two guests have been shortlisted!");
});
guestList.splice(0, 2);
console.log("My guest list is now empty :( " + guestList);
//Question no.18;
//five places I'd like to visit:
let places = ["Fairy Meadows", "Sydney", "Alaska", "Paris", "Machu Pichu"];
console.log("Original order: \n" + places);
let alphabeticalOrder = [...places].sort();
console.log("List in the alphabetical order without modification of the original list: \n" + alphabeticalOrder);
console.log("List: " + places);
let reverseAlphabeticalOrder = [...places].sort().reverse();
console.log("List in the reverse alphabetical order without modification of the original list: \n" + reverseAlphabeticalOrder);
console.log("List: " + places);
let reversedOrder = [...places].reverse();
console.log("List in the reversed order without modification of the original list: \n" + reversedOrder);
console.log("List: " + places);
places.sort();
console.log("Alphabetically modified list: \n" + places);
places.reverse();
console.log("Reversed alphabetically modified list: \n" + places);
//Question no.19;
console.log("The number of people invited to my tea party are " + guestList.length + "." +
    "\n \t Since all the guests had already been removed in the earlier tasks.");
//Question no.20;
let favoriteWebtoons = ["Your Throne", "Iseop's Romance", "Serena", "Forever After", "My Boo", "Couple Breaker"];
console.log("My favorite Webtoon series are: \n" + favoriteWebtoons + ".");
//Question no.21;
let car = {
    Brand: "Toyota",
    Model: 2579,
    Price: 2300000,
    Owner: { First_Name: "Serena", Last_Name: "Grayan" }
};
console.log("The car parked in the lot is of Brand " + car.Brand + ". Its model is: " + car.Model + ", costs about " + car.Price + "PKR. The owner of the car is " + car.Owner);
//Question no.22;
let shoes = ["High Heels", "Flats", "Boots", "Sports Shoes"];
console.log(shoes[4]); //Intenstional error i.e index start from 0 and 4 doesn't exist in the array.
console.log(shoes[2]); //Error fixed.
//Question no.23;
let cakes = "sweet";
console.log("Is cakes == 'sweet'? I predict it to be True.");
console.log(cakes == "sweet");
console.log("Is cakes == 'bitter'? I predict it to be False.");
console.log(cakes == "bitter");
let luckyNumber = 25;
console.log("Is luckyNumber == 45? I predict it to be False.");
console.log(luckyNumber == 45);
console.log("Is luckyNumber == 25? I predict it to be True.");
console.log(luckyNumber == 25);
console.log("Is luckyNumber == 78? I predict it to be False.");
console.log(luckyNumber == 78);
//this was a practice over variables.
//Question no.24;
let vegetables = ["Carrot", "Potato", "Onion", "Cabbage"];
console.log("Is 'Potato' included in vegetables? I predict True. ");
console.log(vegetables.includes("Potato"));
console.log("Is 'Brocoli' included in vegetables? I predict False. ");
console.log(vegetables.includes("Brocoli"));
console.log("Is 'Potato' not included in vegetables? I predict False. ");
console.log(!vegetables.includes("Potato"));
console.log("Is 'Brocoli' not included in vegetables? I predict True. ");
console.log(!vegetables.includes("Brocoli"));
export {};
//# sourceMappingURL=assignment.js.map