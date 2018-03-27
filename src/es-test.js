

// Collegio Technologies Inc.
// React Course Extra Materials
// Video 1: ES6

// remember, the originals aren't broken. The new ones are better!

// PART 1: let AND const

// let and const are replacements for var in JavaScript
var welcomeMessage = "Hey there Rob!";
console.log(welcomeMessage);

// let is used for variables
let newWelcomeMessage = "Hello World!";
console.log(newWelcomeMessage);

// const is used for constant values
const myConstantName = 'Rob';
console.log(myConstantName)

// the main difference between var and let is, you can redeclare a variable using var;
// you cannot using let
var welcomeMessage = "Yo yo yo!";       // allowed
console.log(welcomeMessage);

let newWelcomeMessage = "Yo World!";    // WRONG! Will throw an error!
console.log(newWelcomeMessage);

// let and const provide your with more control over your variables and values

// cannot redefine const either

// it is a good practice to initially declare variables using const, and change 
// to let when you change them in code

// var, let and const are function scoped
// let and const are also block-level scoped (for, while, etc.)

if (welcomeMessage) {
    var myNewVar = 'This is my new var!';
    let myNewLet = 'This is my new let!';
}

console.log(myNewVar);  // will print 'This is my new var!'
console.log(myNewLet);  // not in scope!



// PART 2: ARROW FUNCTIONS

const heyMessage = function(name) {
    return "Hey "+name+"!";
};

const arrowHeyMessage = (name) => {
    return "Hey "+name+"!";
};

const arrowHeyMessageCondensed = (name) => "Hey"+name+"!";

// arrow functions are always anonymous
// in order to be re-used, they must be declared as a variable

// Some important differences

// arguments object is not bound with arrow functions

const multiply = function(numOne, numTwo) {
    console.log(arguments);
    return numOne * numTwo;
};
console.log(multiply(2, 4)); // 8

const multiplyArrow = (numOne, numTwo) => {
    console.log(arguments); // error!
    return numOne * numTwo;
};

// this keyword is not bound either

const team = {
    name: 'Penguins',
    city: 'Pittsburgh',
    roster: ['Sidney Crosby', 'Evgeni Malkin', 'Phil Kessel'],
    printRoster: function() {
        console.log(this.roster);

        this.roster.forEach(function(player) {
            console.log(this.city+" "+this.name+" player: "+player);
            // will not work, this is now bound to the function
        });
    },
    printRosterArrow: function() {
        console.log(this.roster);

        this.roster.forEach((player) => {
            console.log(this.city+" "+this.name+" player: "+player);
            // this will work!
        });
    },
    printRosterMap() {
        const formattedRoster = this.roster.map((player) => {
            return this.city+" "+this.name+" player: "+player;
        });

        this.formattedRoster.forEach((formattedPlayer) => {
            console.log(formattedPlayer);
        });
    }
};
team.printRoster();

// you should not use arrow functions as object methods, because in this case
// you want the this value bound to the object

// map method

// ES6 classes

// Fundamentals
// Quick refresher: what a class is, methods and attributes, private, public and protected

class Team {
    

    constructor(city = 'None specified', name = 'None specified') {
        this.city = city || 'None specified';
        this.name = name || 'None specified';
    }

    fullTeamName() {
        // return this.city + " " + this.name;
        return `${this.city} ${this.name}`;
    }
    
};

const theTeam = new Team('Pittsburgh', 'Penguins');
console.log(theTeam.fullTeamName());

// template strings with the backtick key

// SUBCLASSES

class NHLTeam extends Team {

    constructor(city = 'None specified', name = 'None specified', division = 'None specified') {
        super(city, name);
        this.division = division || 'None specified';
    }

    fullTeamName() {
        return this.division+": "+super.fullTeamName();
    }
};

const theTeam = new NHLTeam('Pittsburgh', 'Penguins', 'Metropolitan');