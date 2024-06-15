//Upper Case
var personName = "Faizan";
console.log("Lowercase:", personName.toLowerCase());
//Lower Case
console.log("Uppercase:", personName.toUpperCase());
//Title Case
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); })