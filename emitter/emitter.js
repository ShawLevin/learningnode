function Emitter()
{
    this.events = {};
}

Emitter.prototype.on = function(type, listener)
{
    //if events exists then it should be the event else make it an empty array.
    this.events[type] = this.events[type] || [];
    
    //Add the listener to the event's array.
    //Now we have a list of things listening for a specific event.
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type)
{
    if (this.events[type]) //JavaScript treats null as false.
    {
        this.events[type].forEach(function(listener) {
            listener();
        }, this);
    }
}

module.exports = Emitter;