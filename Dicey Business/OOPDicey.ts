document.addEventListener("DOMContentLoaded", function () { // DOM CONTENT loaded with callback function so body doesnt return as null ! DO THIS FIRST
    //* DO NOT FORGET TO PUT THE ARRAY WITH THE CLASS which in this case defines the shape or characteristic of the types YOU PASS IN through the empty array
    let diceArr: Die[] = [];
    let button = document.getElementsByClassName("buttons");
    let parentDiv = document.createElement("div");
    document.body.appendChild(parentDiv);
    parentDiv.classList.add("shapeBox", "d-flex", "justify-content-center", "row");

    //* Implement public and private on the vars
    class Die implements Dieinterface {
        public div: HTMLDivElement

        public constructor(public value: number) {
            this.div = document.createElement("div");
            this.div.classList.add("square", "d-flex", "justify-content-center", "col-xs", "col-xs-offset-2");
            this.div.innerHTML = this.value.toString(); //* added toString to fix the "Argument of type number is not assignable to string"
            this.div.addEventListener("click", () => {
                this.roll();
            });
            this.div.addEventListener("dblclick", () => {
                let index: number = diceArr.indexOf(this);
                diceArr.splice(index, 1);
                this.div.remove();
                console.log(diceArr);
            });
            parentDiv.appendChild(this.div);
            diceArr.push(this);
        }
        roll() {
            this.value = (Math.floor(Math.random() * 6) + 1);
            this.div.innerHTML = this.value.toString(); //* added toString to fix the "Argument of type number is not assignable to string"
        }
        // sum() {
        //     answer = answer + this.value;
        // }
    }
    //creates new die
    button[0].addEventListener("click", () => new Die(Math.floor(Math.random() * 6) + 1));

    //rolls created dies and randomizes numbers 
    button[1].addEventListener("click", () => {
        diceArr.forEach(die => {
            die.roll();
        });
    });
    //sums dies even when dies are deleted or created
    button[2].addEventListener("click", () => {
        let answer: number = 0;
        diceArr.forEach(die => {
            answer = answer + die.value
        });
        alert(`sum is ${answer}`);
        answer = 0;
    });
});

interface Dieinterface {
    div: HTMLElement
}