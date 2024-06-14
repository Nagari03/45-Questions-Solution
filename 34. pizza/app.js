var myPizza = ["Cheeze Pizza", "Pepperoni Pizza", "Vegeterian Pizza"];
// print only names of pizza 
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
// printing names and sentence/message 
for (var i = 0; i < myPizza.length; i++) {
    console.log("I like to eat ".concat(myPizza[i]));
}
console.log("\nI really like to eat pizzas. pizza comes in avarirty of flavour and and toopings,\n     allowing individuals to customize it to their liking");
