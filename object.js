let person = {         //object literal
    name: 'Jose',    //key: value pair | property
    lastName: ''
};

//Access object property
//Dot notation
person.name = 'John';

//Bracket
//Ambiguous property name (selected at runtime by user)
//Need empty space in property name
let userChoice = 'lastName'
person[userChoice] = 'Cena';
console.log(person.lastName);