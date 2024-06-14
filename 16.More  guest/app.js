var guest_list = ["ali", "farhan", "raza", "aysha"];
var not_presented = "farhan";
var new_guest = "Baber Azam";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected sir/madam" + guest_list[i] + ',\nwe invite you on  dinner tomarrow\nThank you\n');
}
guest_list.unshift('shaheen', 'sarafraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected sir/madam" + guest_list[i] + ',\nwe invite you on  dinner tomarrow\nThank you\n');
}
