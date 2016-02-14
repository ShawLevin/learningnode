function Hello()
{
    this.greeting = 'Pattern3';
    this.hello = function ()
    { console.log(this.greeting); }
}

module.exports = new Hello();