
import { halfof, multiply } from './lib.js';

import doSomething from './doSomething.js';

import { flag, touch } from './validator.js';

import { Vehicle, Car } from './class.js';

import { author } from './arrow.js';

import { add, userFriends, userTopFriends } from './parameter.js';

import { parent } from './closure.js';


// default function

doSomething();

console.log(halfof(84));

console.log(multiply(21, 2));

console.log(flag);

touch();

console.log(flag);

// class

let car = new Car("black");

console.log(car.toString());

console.log("car is Car: " + (car instanceof Car));

console.log("car is Vehicle: " + (car instanceof Vehicle));

// arrow function

author.printBooks();

// default, rest, spread

console.log(add(1));

console.log(add(1, 2));

const user = "Erxun";

userFriends(user, "A", "B", "C");

userTopFriends(user, ...["A", "B", "C"]);

// closure

let child = parent();

child();
