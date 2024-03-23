//Question no.01;
/*NODE JS, TYPESCRIPT AND VSCODE SUCCESSFULLY INSTALLED.
=> ENVIRONMENT SETUP COMPLETED.*/

//Question no.02;
let Name: string = "Zahra";
console.log(
  "Hey, " + Name + " would you] like to learn some typescript today?"
);

//Question no.03;
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
function titleCase(string: string) {
  return string
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}
console.log(titleCase(Name));

//Additional function.
function toggleCase(str: string) {
  return str
    .toUpperCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toLowerCase());
    })
    .join(" ");
}

console.log(toggleCase(Name));

//Question no.04;
let famousQoute: string =
  "Scott Hawkins once said,“Peace of mind is not the absence of conflict, but the ability to cope with it.”";
console.log(famousQoute);
console.log(
  "Scott Hawkins once said,“Peace of mind is not the absence of conflict, but the ability to cope with it."
);

//Question no.05;
let famousPerson: string = "Scott Hawkins";
let qoute: string =
  "“Peace of mind is not the absence of conflict, but the ability to cope with it.”";
console.log(famousPerson.concat(" once said,").concat(qoute));

//Question no.06;
let person1: string = "  \t  Indlus  \n  \n   ";
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
let favNumber: number = 25;
console.log("My favorite number is= " + favNumber + ".");

//Question no.10;
/* Comments are added throughout the progrsm at different places. Hence, completed.
 */

//Question no.11;
let names: string[] = ["Barza", "Samia", "Malaika", "Daniyal", "Ayaan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
//or
names.forEach((string) => {
  console.log(string);
});

//Question no.12;
let greetings: string = "Assalamualaikum! I wholeheartedly welcome my friend, ";
console.log(greetings.concat(names[0]).concat("."));
console.log(greetings.concat(names[1]).concat("."));
console.log(greetings.concat(names[2]).concat("."));
console.log(greetings.concat(names[3]).concat("."));
console.log(greetings.concat(names[4]).concat("."));
//or
names.forEach((friends) => {
  console.log("Assalamualaikum, greetings to you, " + friends + " dear.");
});

//Question no.13;
let favoriteTransport: string[] = [
  "Jaguar E-type",
  "Nissan Z",
  "Porsche",
  "Corvette",
];
favoriteTransport.forEach((Transport) => {
  console.log("My favorite transport is " + Transport + ".");
});

//Question no.14;
//Guest list:
let guestList: string[] = ["Newton", "Eunhyeok", "Lady Medea", "Chat Noir"];
guestList.forEach((invites) => {
  console.log(
    "I feel immense pleasure to invite " +
      invites +
      " to my tea party at my summer house."
  );
});

//Question no.15;
//one of guests won't be able to make it to my tea party.
guestList[3] = "Luka";
guestList.forEach((invitesModified) => {
  console.log(
    "\n I feel immense pleasure to invite " +
      invitesModified +
      " to my tea party at my summer house."
  );
  console.log(
    "One of our guests won't be able to make it. Hence, Luka would be attending in his place."
  );
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

guestList.forEach((invitesEditted) => {
  console.log(
    "I feel immense pleasure to invite " +
      invitesEditted +
      " to my tea party at my summer house."
  );
  console.log("An additional table has been arranged.");
});

//Question no.17;
//Shrinking the list :'( i'm poor now
//let's just say I've had a change of heart ^_^
console.log("\nOnly two guest shall be invited to my tea party ^<o>^");
console.log(
  "Sorry, You are no longer invited to my tea party, " +
    guestList.shift() +
    ". \nI apologize for the inconvenience."
);
console.log(
  "Sorry, You are no longer invited to my tea party, " +
    guestList.pop() +
    ". \nI apologize for the inconvenience."
);
console.log(
  "Sorry, You are no longer invited to my tea party, " +
    guestList.splice(2, 1) +
    ". \nI apologize for the inconvenience."
);
console.log(
  "Sorry, You are no longer invited to my tea party, " +
    guestList.shift() +
    ". \nI apologize for the inconvenience."
);
console.log(
  "Sorry, You are no longer invited to my tea party, " +
    guestList.pop() +
    ". \nI apologize for the inconvenience."
);

guestList.forEach((invitesShrinked) => {
  console.log(
    "\tI feel immense pleasure to invite " +
      invitesShrinked +
      " to my tea party at my summer house."
  );
  console.log("Consider it an honor, only two guests have been shortlisted!");
});

guestList.splice(0, 2);
console.log("My guest list is now empty :( " + guestList);

//Question no.18;
//five places I'd like to visit:
let places: string[] = [
  "Fairy Meadows",
  "Sydney",
  "Alaska",
  "Paris",
  "Machu Pichu",
];

console.log("Original order: \n" + places);

let alphabeticalOrder = [...places].sort();
console.log(
  "List in the alphabetical order without modification of the original list: \n" +
    alphabeticalOrder
);

console.log("List: " + places);

let reverseAlphabeticalOrder = [...places].sort().reverse();
console.log(
  "List in the reverse alphabetical order without modification of the original list: \n" +
    reverseAlphabeticalOrder
);

console.log("List: " + places);

let reversedOrder = [...places].reverse();
console.log(
  "List in the reversed order without modification of the original list: \n" +
    reversedOrder
);

console.log("List: " + places);

places.sort();
console.log("Alphabetically modified list: \n" + places);

places.reverse();
console.log("Reversed alphabetically modified list: \n" + places);

//Question no.19;
console.log(
  "The number of people invited to my tea party are " +
    guestList.length +
    "." +
    "\n \t Since all the guests had already been removed in the earlier tasks."
);

//Question no.20;
let favoriteWebtoons: string[] = [
  "Your Throne",
  "Iseop's Romance",
  "Serena",
  "Forever After",
  "My Boo",
  "Couple Breaker",
];
console.log("My favorite Webtoon series are: \n" + favoriteWebtoons + ".");

//Question no.21;
let car: {
  Brand: string;
  Model: number;
  Price: number;
  Owner: {
    First_Name: string;
    Last_Name: string;
  };
} = {
  Brand: "Toyota",
  Model: 2579,
  Price: 2300000,
  Owner: { First_Name: "Serena", Last_Name: "Grayan" },
};
console.log(
  "The car parked in the lot is of Brand " +
    car.Brand +
    ". Its model is: " +
    car.Model +
    ", costs about " +
    car.Price +
    "PKR. The owner of the car is " +
    car.Owner
);

//Question no.22;
let shoes: string[] = ["High Heels", "Flats", "Boots", "Sports Shoes"];
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
// import 'core-js/es7/array/includes';
let vegetables = ["Carrot", "Potato", "Onion", "Cabbage"];
console.log("Is 'Potato' included in vegetables? I predict True. ");
console.log(vegetables.includes("Potato"));
console.log("Is 'Brocoli' included in vegetables? I predict False. ");
console.log(vegetables.includes("Brocoli"));
console.log("Is 'Potato' not included in vegetables? I predict False. ");
console.log(vegetables.includes("Potato"));
console.log("Is 'Brocoli' not included in vegetables? I predict True. ");
console.log(vegetables.includes("Brocoli"));

console.log(34 > 67, "\nI predict False.");
console.log(89 < 678, "\nI predict True.");
console.log(favoriteTransport[2] == "Porsche");
console.log(vegetables.length == 3);
console.log(56 - 54 == 2);
console.log(
  "Testing with lower case function: \n",
  "Tree".toLowerCase() == "tree"
);
console.log(
  "Testing with toggle case function: \n",
  toggleCase("zahra") == "Zahra"
);
console.log(
  "Testing with 'and' and 'or': \n",
  true && false,
  "\n",
  true,
  false
);

//Question no.25;
let AlienColor = "Yelllow";
if (AlienColor == "Yellow") {
  console.log("Congratulations! You've won.");
}
if (AlienColor == "Grey") {
  //No Output as the condition stated is false.
}

//Question no.26;
let alienColor = "blue";
if (alienColor == "blue") {
  console.log("You've earned 10 points.");
} else {
  console.log("You've earned 0 points");
}

if (alienColor == "red") {
  console.log("You've earned 10 points.");
} else {
  console.log("You've earned 0 points");
}
let alien_color = "pink";
let kills = "5";
if (alien_color == "pink" && kills == "5") {
  console.log("You've killed five aliens and you are pink");
} else if (alien_color == "green" && kills == "5") {
  console.log("You've killed five aliens and you are red");
} else if (alien_color == "red" && kills == "5") {
  console.log("You've killed five aliens and you are red");
}

//Question no.28
let age: number = 17;
if (age < 1) {
  console.log("The user is a baby.");
} else if (age > 5) {
  console.log("The user is a child.");
} else if (age > 18) {
  console.log("The user is a teenager.");
} else if (age > 20) {
  console.log("The user is an adult.");
} else if (age > 40) {
  console.log("The user is a middle aged person.");
}

//Question no.29;
let favoriteFruits: string[] = [
  "Apple",
  "Strawberry",
  "Peach",
  "Orange",
  "Kiwi",
];
if (favoriteFruits.includes("Banana")) {
  console.log("Banana is your favorite fruit!");
} else {
  console.log("You don't like Banana.");
}
if (favoriteFruits.includes("Strawberry")) {
  console.log("Strawberry is your favorite fruit!");
} else {
  console.log("You don't like Strawberry.");
}
if (favoriteFruits.includes("Apple")) {
  console.log("Apple is your favorite fruit!");
} else {
  console.log("You don't like Apple.");
}
if (favoriteFruits.includes("Kiwi")) {
  console.log("Kiwi is your favorite fruit!");
} else {
  console.log("You don't like Kiwi.");
}
if (favoriteFruits.includes("Orange")) {
  console.log("Orange is your favorite fruit!");
} else {
  console.log("You don't like Orange.");
}
if (favoriteFruits.includes("Peach")) {
  console.log("Orange is your favorite fruit!");
} else {
  console.log("You don't like Peach.");
}

//Question no.30;
const usernames: string[] = ["User1", "User2", "admin", "User3", "User5"];
usernames.forEach((users) => {
  if (users === "admin") {
    console.log("Would you like to see a status report?");
  } else {
    console.log("Welcome" + users + ", thank you for logging in again.");
  }
});

//Question no.31;
let userNames: string[] = [];
if (userNames.length == 0) {
  console.log("We need to find more users.");
} else {
  userNames.forEach((user) => {
    console.log("Welcome, " + user + ".");
  });
}

//Question no.32;
let currentUsernames = ["user1", "user7", "user4", "user0"];
let newUsernames = ["user1", "user9", "usre5", "user3"];
newUsernames.forEach((newusers) => {
  if (
    currentUsernames.some(
      (currentusers) => currentusers.toLowerCase() == newusers.toLowerCase()
    )
  ) {
    console.log("This username is not available.");
  } else {
    console.log("This usernames is available.");
  }
});

//Question no.33;
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((element) => {
  let suffix = "th";
  if (element === 1) {
    suffix = "st";
  } else if (element === 2) {
    suffix = "nd";
  } else if (element === 3) {
    suffix = "rd";
  }
  console.log(element + suffix);
});

//Question no.34;
let pizzaFlavours: string[] = ["Fajitta", "Cheese", "Spicy tikka", "Olive"];
pizzaFlavours.forEach((flavours) => {
  console.log(`The resturaunt down the street offers ${flavours} pizza.`);
  console.log("I love their services.");
});

//Question no.35;
let animals: string[] = ["Bats", "Dogs", "Cats", "Platypus", "Kangroos"];
animals.forEach((mammals) => {
  console.log(`${mammals} are mammals, belonging to kingdom Animalia.`);
});

//Question no.36;
function makeShirt(color: string, message: string) {
  console.log(
    `A ${color} coloured shirt with "${message}" printed on it is to be costumized.`
  );
}

makeShirt("pink", "Boss Girl!");
makeShirt("Yellow", "Keep calm and be a sunflower[^-^]!");

//Question no.37;
function largeShirt(size:string="Large", message:string="CUTE"){
console.log(`A ${size} size shirt with ${message} printed on it is the desired product.`);
}

largeShirt();
largeShirt("Medium");
largeShirt("Small","Sweet");

//Question no.38;
function location(city:string,country:string="Pakistan"){
  console.log(`You belong to ${city} city in ${country}.`);
}

location("Karachi");
location("Newyork","USA");
location("Islamabad");

//Question no.39;
function cityCountry(city:string,country:string){
  console.log(`${city}, ${country}.`);
}

cityCountry("Paris", "France");
cityCountry("Kabul", "Afghanistan");
cityCountry("Peru", "Papua New Gunia");

//Question no.40;
function Albums(   Artist:string, Title:string, tracks?:number){
let albums:any = {Artist, Title};
if(tracks) {
  albums["tracks"]=tracks;
} return albums;
}         
console.log(Albums("Atif Aslam", "Tera hone laga hon"));
console.log(Albums("Ariana", "7 rings",5));

//Question no.41;
let magicians:string[]=['Alice','Hook','Witch','Jack'];
function magic(magicians:string[]){
  magicians.forEach(element => {
  console.log(element)
  });
}

magic(magicians);

//Question no. 42;
function greatMagic(magicians:string[]){
  for(let i=0; i< magicians.length; i++){
    magicians[i]=magicians[i] + " the great."
  }
};

greatMagic(magicians);
magic(magicians);

//Question no.43;
let magician:string[]=['Alice','Hook','Witch','Jack'];
function greatMagician(magician:string[]):string[]{
  let great_magician:any=[];
 magician.forEach(Magician => {
  great_magician.push(Magician + " the great.");
 })
 return great_magician;
}

let great_magician = greatMagician(magician.slice());
console.log("The list of great magicians:");
magic(great_magician)
console.log("The original list:");
magic(magician)

//Question no.44;
function sandwiches(...items:string[]){
  console.log("Making a sandwich with " +items.join(" ,")+ ".");
}
sandwiches("tomotoes", "ham", "lettuce","bread","cheese");
sandwiches('cheese','bread','chicken');

//Question no.45;
function  Car(manufacturer:string,model:string,...options:[string,any][]):Record<string,any>{
let madecar:any= {manufacturer,model};
options.forEach(([key,value])=> madecar[key]=value);
return madecar;}
console.log(Car("Audi","309",["Owner","Mr.Xyz"],["USED",true]));
console.log(Car("Toyota","2024",["color","pink"],["Price",45000]));
export {};
