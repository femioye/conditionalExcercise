"use strict";
const name = 'Femi';
let age = 32;
let isProgrammer = true;
let catName = null;
age = 23;


if (isProgrammer === false) {
    console.log(`${name} is ${age} years old and is a programmer.`)
} else if (age > 30) {
    console.log(`${name} is old.`)
}
else {
    console.log(`${name} does not have a cat.`)
}
const type = 'bird';
let howOld = 28;
let numberLegs = 4;
const tail = true;
const sound = 'woof'

if (numberLegs === true) {
    console.log(`${type} is ${age} years old and is a programmer.`)
} else if (age < 30) {
    console.log(`${name} is old.`)
}
else {
    console.log(`${name} does not have a cat.`)
}
if (howOld > 5) {
    console.log(sound);
} else if (tail) {
    console.log(sound, sound);
    howOld++; //howOld = howOld + 1 howOld +=1
} else {
    console.log(`That darn ${type} can party!`)
}
console.log(howOld);