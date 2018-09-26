var Greeter = /** @class */ (function () {
    function Greeter(f_name, l_name) {
        this.f_name = f_name;
        this.l_name = l_name;
    }
    Greeter.prototype.showGreeting = function () {
        var ban = document.getElementById("ban");
        ban.innerHTML = ('Hello' + this.f_name + ' ' + this.l_name + '.');
    };
    Greeter.prototype.hideGreeting = function () {
        var ban = document.getElementById("ban");
        ban.innerHTML = ('R1C2');
    };
    return Greeter;
}());
var greet = new Greeter('Gaby', 'Costilla');
