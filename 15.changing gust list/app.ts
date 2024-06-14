let guest_list : string []  = ['ali','farhan','raza','ayesha'];
for(let i=0; i<guest_list.length; i++){
console.log("Respected sir/madem" + guest_list[i] +',\nwe invite you on dinner tomorrow.\nThank you');
}
let not_present : string ="farhan";
let new_guest : string ="Baber azam";
guest_list[1] = new_guest;
for( let i=0;i< guest_list.length; i++){
    console.log("Respected sir/madem") +  guest_list[i] + ',\nee invite you on dinner tomorrow.\nThank you\n';
}
console.log(`Mr. ${not_present} will not come tomorrow dinner.`);






