var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madem" + guest_list[i] + ',\nwe invite you on dinner tomorrow.\nThank you');
}
var not_present = "farhan";
var new_guest = "Baber azam";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madem") + guest_list[i] + ',\nee invite you on dinner tomorrow.\nThank you\n';
}
console.log("Mr. ".concat(not_present, " will not come tomorrow dinner."));
