var greeter = require('./greet');

greeter();

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