var users = ['sana', 'baber', 'faizan', 'admin'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("HELLOadmin, would you like to see a status report?");
    }
    else {
        console.log("HELLO ".concat(user, " thank you for logging in again."));
    }
}
