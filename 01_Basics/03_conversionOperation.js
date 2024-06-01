let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1 = "33abs"

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score2 = null;

console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = true

console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// "33" => 33
// "33abs" => NaN
// null => 0
// true => 1
// false => 0


let isLoggedIn = "pranav"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// "pranav" => true
// "" => false
// null => false
// undefined => false
// 0 => false
// NaN => false
// true => true

let someNumber = 54

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)



