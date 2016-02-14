var config = require('../config');
var EventEmitter = require('events');
var util = require('util');
//var Emitter = require('./emitter'); //Basic custom event emitter.

var emit = new EventEmitter();

emit.on(config.events.GREET, function() {
    console.log('someone said hello.');
});

emit.on(config.events.GREET, function() {
    console.log('a greet has happened!.');
});

emit.emit('greet');



function ChildOfEmitter() {
    console.log('Child of Event Emitter');
    this.name = 'Shaw';
}

util.inherits(ChildOfEmitter, EventEmitter);

ChildOfEmitter.prototype.Hello = function()
{
 console.log('Hello from ' + this.name);
 this.emit('Hello');   
}


var child = new ChildOfEmitter();
child.on('Hello', function() { console.log('someone said hello!'); });

child.Hello();
