'use strict'

var name = 'John Doe';
var greet1 = 'Hello ' + name;
var greet2 = `Hello ${ name }`; //ES6 - not yet completely supported. Babel for translations.

console.log(greet1);
console.log(greet2);

class Person {
    constructor() {
    this.name = 'Shaw Levin',
    this.greeting =  'Hey!',
    this.greet =  function() { console.log(this.greeting); }
    }
};

var person = new Person();
person.greet();
person.greet.call({ greeting: 'Good Morning!' }); //Pass params as list.
person.greet.apply({greeting: 'Yo'}); // Pass params as array.

class Student extends Person {
    constructor(year)
    {
        super();
        this.year = year;
        this.greet = function() { console.log(this.year); };
    }
    
}

var Shaw = new Student('Senior');
Shaw.greet();