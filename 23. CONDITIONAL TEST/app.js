var car = 'subaru';
//TEST 1 : equality comparision (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); //True
//TEST 2 : Strict equality comparision (true)
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru'); //True
//TEST 3 : Inequality equality comparision (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); //False
//TEST 4 : Strict inequality comparision (False)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); //False
//TEST 5 : Less than comparision (False)
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); //False (lexicographic comprasion)
//TEST 6 : Grater than comparision (False)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //False (lexicographic comprasion)
//TEST 7 : Less than or equal comparision (True)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); //True
//TEST 8 : Grater than or equal comparision (True)
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); //True
//TEST 9 : Checking truthness  (True)
console.log("Is car? I predict true.");
console.log(car); //True (non empty sring is truthy)
//TEST 10 : Checking falsness  (False)
console.log("Is !car? I predict false.");
console.log(!car); //false (negative of truthy value)
