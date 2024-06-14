let users : string[] = ['sana', 'baber', 'faizan', 'admin']
for (let user of users){
    if (user === "admin"){
        console.log("HELLOadmin, would you like to see a status report?")
    }


else{
    console.log(`HELLO ${user} thank you for logging in again.`)
}
}