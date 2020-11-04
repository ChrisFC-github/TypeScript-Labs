document.addEventListener("DOMContentLoaded", function () {
    //* DO NOT FORGET TO PUT THE ARRAY WITH THE CLASS which in this case defines the shape or characteristic of the types YOU PASS IN through the empty array
    var diceArr = [];
    var button = document.getElementsByClassName("buttons");
    var parentDiv = document.createElement("div");
    document.body.appendChild(parentDiv);
    parentDiv.classList.add("shapeBox", "d-flex", "justify-content-center", "row");
    //* Implement public and private on the vars
    var Die = /** @class */ (function () {
        function Die(value) {
            var _this = this;
            this.value = value;
            this.div = document.createElement("div");
            this.div.classList.add("square", "d-flex", "justify-content-center", "col-xs", "col-xs-offset-2");
            this.div.innerHTML = this.value.toString(); //* added toString to fix the "Argument of type number is not assignable to string"
            this.div.addEventListener("click", function () {
                _this.roll();
            });
            this.div.addEventListener("dblclick", function () {
                var index = diceArr.indexOf(_this);
                diceArr.splice(index, 1);
                _this.div.remove();
                console.log(diceArr);
            });
            parentDiv.appendChild(this.div);
            diceArr.push(this);
        }
        Die.prototype.roll = function () {
            this.value = (Math.floor(Math.random() * 6) + 1);
            this.div.innerHTML = this.value.toString(); //* added toString to fix the "Argument of type number is not assignable to string"
        };
        return Die;
    }());
    //creates new die
    button[0].addEventListener("click", function () { return new Die(Math.floor(Math.random() * 6) + 1); });
    //rolls created dies and randomizes numbers 
    button[1].addEventListener("click", function () {
        diceArr.forEach(function (die) {
            die.roll();
        });
    });
    //sums dies even when dies are deleted or created
    button[2].addEventListener("click", function () {
        var answer = 0;
        diceArr.forEach(function (die) {
            answer = answer + die.value;
        });
        alert("sum is " + answer);
        answer = 0;
    });
});
