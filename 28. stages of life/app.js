//stages of life : write if_else chain that determines a person's stage of 
//set a value for the variable age, and then :
//if the person is less than 2 years old , print a message that person is baby.
var age = 25;
if (age < 2) {
    console.log("the person is baby.");
}
//the the person is at least 2 years old but less than 4, print a message 
//that the person is toddler.
else if (age >= 2 && age < 4) {
    console.log("the person is toddler.");
}
// if the person is at least 4 years old  but less than 13,
//print a message that the person is kid.
else if (age >= 4 && age < 13) {
    console.log("the person is kid.");
}
// if the person is at least 13 years old  but less than 20,
//print a message that the person is teenager.
else if (age >= 13 && age < 20) {
    console.log("the person is teenager.");
}
// if the person is at least 20 years old  but less than 65,
//print a message that the person is adult.
else if (age >= 20 && age < 65) {
    console.log("the person is adult.");
}
// if the person is age 65 or older, print a message
//that the person is an elder.
else {
    console.log("the person is elder.");
}
