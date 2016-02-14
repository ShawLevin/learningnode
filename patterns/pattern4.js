function Pattern4()
{
    this.greeting = 'Pattern4';
    this.hello = function ()
    { console.log(this.greeting); }
}

module.exports = Pattern4;