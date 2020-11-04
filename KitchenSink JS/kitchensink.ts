function addingtwoNumbers(numbersAdd: {
    firstNum: number,
    secondNum: number
}) {
    alert('Check your console for the sum of two numbers 5 and 4 added twice');
    return console.log((numbersAdd.firstNum + numbersAdd.secondNum) + (numbersAdd.firstNum + numbersAdd.secondNum));
}

addingtwoNumbers({
    firstNum: 5,
    secondNum: 4
})

console.log(' '); // hello im a spacer :D

function sayHellotypescript(helloObj: { name: string }) {
    alert(`Hello ${helloObj.name}!`);
    return console.log(`This is a typescript saying Hello to ${helloObj.name}`)
}

sayHellotypescript({
    name: "Chris"
})

console.log(' '); // hello im a spacer :D

function checkAgetypescript(peepArray: peepinterface[]) {
    for (var x = 0; x < peepArray.length; x++) {
        if (peepArray[x].agepeep < 21) {
            alert(`Sorry ${peepArray[x].namepeep} you aren't old enough to view this page`);
            return console.log(`Sorry ${peepArray[x].namepeep} you aren't old enough to view this page`);
        } else if (peepArray[x].agepeep >= 21) {
            alert(`Hello ${peepArray[x].namepeep} you are old enough to view this page`);
            return console.log(`Hello ${peepArray[x].namepeep} you are old enough to view this page`);
        }
    }
}

//* use this to assign a mix of types to properties of objects with interface which allows you to use functions using index parameters
const peepArray: peepinterface[] = [
    {
        namepeep: 'Charles',
        agepeep: 21
    },
    {
        namepeep: 'Abby',
        agepeep: 27
    },
    {
        namepeep: 'James',
        agepeep: 18
    },
    {
        namepeep: 'John',
        agepeep: 17
    },

];
interface peepinterface {
    namepeep: string,
    agepeep: number
}

checkAgetypescript(peepArray);

console.log(' '); // hello im a spacer :D

function veggietalesTypescript(veggietalesObj: { veggies: string[] }) {
    alert(`Showing a list of 6 Vegetables`);
    console.log("Displaying the Veggies in the console");
    for (var y = 0; y < veggietalesObj.veggies.length; y++) { // displays as much veggies as you want!
        console.log(veggietalesObj.veggies[y])
    }
}

veggietalesTypescript({ veggies: ['Zucchini', 'Asparagus', 'Potato', 'Cabbage', 'Onions', 'Garlic'] }); // creating a tale of veggies with an array

console.log(' '); // hello im a spacer :D

function displayimaginaryPet(imaginarypetObj: {
    name: string,
    breed: string
}) {
    alert("Displaying your imaginary pet in the console");
    return console.log(imaginarypetObj.name, imaginarypetObj.breed);
}

// putting 2 properties in an imaginary pet and then displays the imaginary doggo on the console

displayimaginaryPet({
    name: 'Bandit',
    breed: 'Groanendael'
})

console.log(' '); // hello im a spacer :D

//Showing in this code i could do it the less efficient way without using interface
// checks age with 2nd group of peeps with their respective names if they are of legal age
function checkageFriends(friendsObj: {
    friend: string,
    ageFriend: number
}) {
    if (friendsObj.ageFriend < 21) {
        alert(`Sorry ${friendsObj.friend} you aren't old enough to view this page`);
        return console.log(`Sorry ${friendsObj.friend} you aren't old enough to view this page`);
    } else if (friendsObj.ageFriend >= 21) {
        alert(`Hello ${friendsObj.friend} you are old enough to view this page`);
        return console.log(`Hello ${friendsObj.friend} you are old enough to view this page`);
    }
}

//* You could use .val or other input or DOM functions when running the function
checkageFriends({
    friend: 'Aaron',
    ageFriend: 17
})

checkageFriends({
    friend: 'Franco',
    ageFriend: 28
})

checkageFriends({
    friend: 'Selina',
    ageFriend: 24
})

checkageFriends({
    friend: 'Erick',
    ageFriend: 16
})

checkageFriends({
    friend: 'Frederick',
    ageFriend: 26
})

console.log(' '); // hello im a spacer :D

function getLength(stringObj: { string: string }) {
    let stringLength = stringObj.string.length;
    alert(`check the console if the word "Hello World" makes the world an odd or even place`);
    if (stringLength % 2 === 0) {
        console.log("The world is nice and even!");
    } else {
        console.log("The world is an odd place!");
    }
}

getLength({ string: 'Hello World' });