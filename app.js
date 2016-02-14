var Emitter = require('events'); //Node event emitter.
//var Emitter = require('./emitter'); //Basic custom event emitter.

var emit = new Emitter();

emit.on('greet', function() {
    console.log('someone said hello.');
});

emit.on('greet', function() {
    console.log('a greet has happened!.');
});

emit.emit('greet');