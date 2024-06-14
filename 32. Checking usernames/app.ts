let cuurent_users : string[] = ["saba", "faizan", "ahmad", "admin", "raza"];
let new_users : string[] = ["fayaz", "razaq", "ali", "admin", "zameer"];
new_users. forEach((new_user) =>{
    if(
        cuurent_users.some((cuurent_user) => cuurent_user.toLocaleLowerCase() ===new_user.toLocaleLowerCase())
    ) {
        console.log(`${new_user} will need to enter a new username.`);
    } else{
        console.log(`${new_user} is available.`);
    }
});