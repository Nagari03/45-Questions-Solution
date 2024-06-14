let guest_list : string [] = ["ali","farhan", "raza","aysha"];
let not_presented : string ="farhan";
let new_guest : string = "Baber Azam";
guest_list[1]= new_guest;
for(let i=0; i<guest_list.length; i++){
console.log("respected sir/madam"+guest_list[i]+ ',\nwe invite you on  dinner tomarrow\nThank you\n');
}
guest_list.unshift('shaheen','sarafraz','rizwan');
for(let i=0; i<guest_list.length; i++){
    console.log("respected sir/madam"+guest_list[i]+ ',\nwe invite you on  dinner tomarrow\nThank you\n');
    }