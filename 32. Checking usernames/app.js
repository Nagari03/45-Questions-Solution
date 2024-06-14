var cuurent_users = ["saba", "faizan", "ahmad", "admin", "raza"];
var new_users = ["fayaz", "razaq", "ali", "admin", "zameer"];
new_users.forEach(function (new_user) {
    if (cuurent_users.some(function (cuurent_user) { return cuurent_user.toLocaleLowerCase() === new_user.toLocaleLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
