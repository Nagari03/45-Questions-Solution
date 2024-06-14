let magicians : string[] = ["ali", "david", "faizi"];
function make_great(magicians: string[]) {
    let greatMagicians : string []= [];
    magicians.forEach(magician=> {
        greatMagicians.push (`${magician} the great`);
});
    return greatMagicians;
}


function show_magicians(magicians: string[]) {
    magicians.forEach(magician=> {
        console.log(magicians);
});
}

let greatMagicians = make_great(magicians.slice());  //creates a new modified array
console.log("original Magicians :");
show_magicians(magicians);                 // show orginal names
console.log("Great magicians");
show_magicians(greatMagicians); //show modified 