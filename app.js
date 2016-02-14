var greeter = require('./greet');
var pattern1 = require('./pattern1');
var pattern2 = require('./pattern2').hello;
var pattern3a = require('./pattern3');
pattern3a.greeting = 'pattern3a';
var pattern3b = require('./pattern3');
var Pattern4 = require('./pattern4');
var p4 = new Pattern4();
var pattern5 = require('./pattern5');


pattern1();
pattern2();
pattern3a.hello();
pattern3b.hello();
p4.hello();
pattern5.hello();

greeter.english();
greeter.spanish();

var util = require('util'); //This is a core module so we can require by name.
var strformat = util.format('Hello, %s', 'Core!');
console.log(strformat);

function Person(firstname, lastname)
{
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function()
{
    console.log('Hello, ' + this.firstname + ' ' + this.lastname + '!');
}

var shaw = new Person('Shaw', 'Levin');

shaw.greet();