let magicins : string [] =["don", "faiz", "Rmeez"];

function make_great(magicians: string[]){
    for (let i=0; i < magicians.length; i++){
        magicians [i] = magicians[i] + "the great";
    }
}
make_great (magicians); //modifies the orginal array
show_magicians (magicians); //showed modified names
