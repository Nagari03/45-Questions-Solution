var car = 'sabaru';
var age = 25;
var numbers = [1, 2, 3, 4];
//  **  string test **
// test 1: Equality (True)
console.log("Is car =='subsru'? I predict True.");
console.log(car == 'subaru'); //true (case insansitive)
// test 2: strict equality (false)
console.log("Is car === 'subsru'? I predict false.");
console.log(car === 'subaru'); // false (case sensitive)
//test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); // true
//test 4: Inequlity (false)
console.log("Is car! =='subaru'? I predict false.");
console.log(car !== 'subaru'); //false (case sensitive)
//** lowercase function test **
//test 5: lower case conversion (false)
console.log("Is car.toLowerCase() =='subsru'? I predict True.");
console.log(car.toLowerCase() == 'subsru'); // true (converted to lower Case)
//test 6: Lower Case Conversion (false)
console.log("Is car=== car.toLowerCase()?' I predict True.");
console.log(car === car.toLowerCase()); // false  (Original value remains upp)
//** Numerical test**
//Test 7: Equlity (true)
console.log("Is age == 25? I predict true.");
console.log(age == 25); //True
//Test 8: inEqulity (false)
console.log("Is age != 30? I predict true.");
console.log(age != 30); //True
//Test 9: Greater than (false)
console.log("Is age > 30? I predict false.");
console.log(age > 30); //false
//Test 10: Less than or equal (true)
console.log("Is age <= 25? I predict true.");
console.log(age <= 25); //true
//** logical Operators  **
//Test 11: AND (true)
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30); //true (b0th conditions met)
//Test 12: OR (false)
console.log("Is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18); //false (neighter conditions met)
//**Array Test **
//Test 13: In array  (True)
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers); //True (check for index extience)
//Test 14: Not In array  (false)
console.log("Is 5 not in numbers? I predict true.");
console.log(5, not in numbers); //True (negation pf "in" operator)
